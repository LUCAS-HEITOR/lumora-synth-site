import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedProjects } from '../../data/projects';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './Portfolio.module.css';

const FILTERS = [
  { key: 'all', labelKey: 'portfolio.filter_all' },
  { key: 'website', labelKey: 'portfolio.filter_web' },
  { key: 'automation', labelKey: 'portfolio.filter_automation' },
];

export default function Portfolio() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const heroRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05 });

  const allProjects = getLocalizedProjects(lang);
  const filtered =
    activeFilter === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <main className="page">
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className="reveal-fade" ref={heroRef}>
            <h1 className={styles.heroTitle}>{t('portfolio.title')}</h1>
            <p className={styles.heroSubj}>{t('portfolio.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.filters}>
            {FILTERS.map(({ key, labelKey }) => (
              <button
                key={key}
                className={`${styles.filterBtn} ${activeFilter === key ? styles.filterActive : ''}`}
                onClick={() => setActiveFilter(key)}
              >
                {t(labelKey)}
              </button>
            ))}
          </div>

          <div className={`${styles.grid} reveal-fade`} ref={gridRef}>
            {filtered.length === 0 ? (
              <p className={styles.empty}>{t('portfolio.empty')}</p>
            ) : (
              filtered.map((project, index) => (
                <Link
                  to={`/portfolio/${project.slug}`}
                  key={project.id}
                  className={styles.card}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.imageWrapper}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className={styles.image}
                      />
                    ) : (
                      <div className={styles.placeholder}>
                        <div className={styles.placeholderIcon}>+</div>
                        <span className={styles.placeholderText}>16 : 9</span>
                      </div>
                    )}
                    <div className={styles.overlay}>
                      <span className={styles.overlayCategory}>
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.tagRow}>
                      <span className={styles.categoryTag}>{project.categoryLabel}</span>
                      {project.status === 'in-development' && (
                        <span className={styles.devBadge}>{t('project.in_development')}</span>
                      )}
                    </div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDesc}>{project.shortDescription}</p>
                    <span className={styles.viewLink}>
                      {t('portfolio.view_project')} &rarr;
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
