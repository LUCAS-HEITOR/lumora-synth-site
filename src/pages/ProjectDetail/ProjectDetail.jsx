import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { getProjectBySlug } from '../../data/projects';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const project = getProjectBySlug(slug);
  const heroRef = useScrollReveal();
  const overviewRef = useScrollReveal();
  const featuresRef = useScrollReveal();
  const techRef = useScrollReveal();
  const galleryRef = useScrollReveal({ threshold: 0.05 });

  if (!project) {
    return (
      <main className="page">
        <div className="container container--narrow" style={{ textAlign: 'center', paddingTop: '8rem' }}>
          <h1>Project not found</h1>
          <Link to="/portfolio" className="btn btn--primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
            {t('project.back')}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className="reveal-fade" ref={heroRef}>
            <Link to="/portfolio" className={styles.backLink}>
              &larr; {t('project.back')}
            </Link>
            <span className={styles.category}>{project.categoryLabel}</span>
            <h1 className={styles.title}>{project.title}</h1>
          </div>
        </div>
      </section>

      {/* Large image */}
      <section className={styles.imageSection}>
        <div className="container">
          <div className={styles.heroImage}>
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <div className={styles.imagePlaceholder}>
                <div className={styles.placeholderIcon}>+</div>
                <span className={styles.placeholderText}>Project Hero Image</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container container--narrow">
          <div className="reveal-fade" ref={overviewRef}>
            <h2 className={styles.sectionTitle}>{t('project.overview')}</h2>
            <p className={styles.overviewText}>{project.overview}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <div className="reveal-fade" ref={featuresRef}>
            <h2 className={styles.sectionTitle}>{t('project.features')}</h2>
            <ul className={styles.featureList}>
              {project.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section">
        <div className="container container--narrow">
          <div className="reveal-fade" ref={techRef}>
            <h2 className={styles.sectionTitle}>{t('project.technologies')}</h2>
            <div className={styles.techGrid}>
              {project.technologies.map((tech, i) => (
                <span key={i} className={styles.techBadge}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <div className="reveal-fade" ref={galleryRef}>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>
                {t('project.gallery')}
              </h2>
              <div className={styles.gallery}>
                {project.galleryImages.map((img, i) => (
                  <div key={i} className={styles.galleryItem}>
                    {img ? (
                      <img src={img} alt={`${project.title} screenshot ${i + 1}`} />
                    ) : (
                      <div className={styles.galleryPlaceholder}>
                        <span>+</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className={styles.ctaTitle}>{t('project.cta_title')}</h2>
          <p className={styles.ctaText}>{t('project.cta_text')}</p>
          <Link to="/quote" className="btn btn--white btn--lg">
            {t('project.cta_button')}
          </Link>
        </div>
      </section>
    </main>
  );
}
