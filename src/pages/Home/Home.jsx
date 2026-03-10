import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { getFeaturedServices } from '../../data/services';
import { getFeaturedProjects } from '../../data/projects';
import HeroSection from '../../components/HeroSection/HeroSection';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import CTASection from '../../components/CTASection/CTASection';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './Home.module.css';

const TECH_STACK = [
  'Roblox Studio',
  'Lua',
  'Blender',
  'Node.js',
  'React',
  'Three.js',
];

export default function Home() {
  const { t } = useLanguage();
  const featuredServices = getFeaturedServices();
  const featuredProjects = getFeaturedProjects();
  const steps = t('sections.how_steps');
  const highlights = t('sections.highlights');
  const serviceGroups = t('sections.service_groups');

  const servicesRef = useScrollReveal();
  const groupsRef = useScrollReveal();
  const howRef = useScrollReveal();
  const highlightsRef = useScrollReveal();
  const trustRef = useScrollReveal();
  const featuredRef = useScrollReveal();

  return (
    <main className="page">
      <HeroSection />

      {/* Service Groups */}
      <section className="section">
        <div className="container">
          <div className="reveal-fade" ref={groupsRef}>
            <SectionTitle
              title={t('sections.services_title')}
              subtitle={t('sections.services_subtitle')}
            />
            <div className={styles.serviceGroups}>
              {Array.isArray(serviceGroups) &&
                serviceGroups.map((group, i) => (
                  <div key={i} className={styles.serviceGroup}>
                    <h3 className={styles.groupTitle}>{group.title}</h3>
                    <ul className={styles.groupList}>
                      {group.items.map((item, j) => (
                        <li key={j} className={styles.groupItem}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service Cards */}
      <section className="section section--alt">
        <div className="container">
          <div className="reveal-fade" ref={servicesRef}>
            <div className="grid grid--3">
              {featuredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="reveal-fade" ref={howRef}>
            <SectionTitle
              title={t('sections.how_title')}
              subtitle={t('sections.how_subtitle')}
            />
            <div className="grid grid--3">
              {Array.isArray(steps) &&
                steps.map((step, index) => (
                  <div key={index} className={styles.step}>
                    <span className={styles.stepNumber}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepText}>{step.text}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Lumora Synth */}
      <section className="section section--alt">
        <div className="container">
          <div className="reveal-fade" ref={highlightsRef}>
            <SectionTitle title={t('sections.highlights_title')} />
            <div className="grid grid--4">
              {Array.isArray(highlights) &&
                highlights.map((item, index) => (
                  <div key={index} className={styles.highlight}>
                    <div className={styles.highlightNumber}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className={styles.highlightTitle}>{item.title}</h3>
                    <p className={styles.highlightText}>{item.text}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="section">
        <div className="container">
          <div className="reveal-fade" ref={trustRef}>
            <SectionTitle title={t('sections.trust_title')} />
            <div className={styles.techGrid}>
              {TECH_STACK.map((tech) => (
                <div key={tech} className={styles.techItem}>
                  <span className={styles.techName}>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section section--alt">
        <div className="container">
          <div className="reveal-fade" ref={featuredRef}>
            <SectionTitle title={t('sections.featured_title')} />
            <div className={styles.featuredGrid}>
              {featuredProjects.map((project) => (
                <Link
                  to={`/portfolio/${project.slug}`}
                  key={project.id}
                  className={styles.featuredCard}
                >
                  <div className={styles.featuredImage}>
                    {project.image ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      <div className={styles.featuredPlaceholder}>
                        <span>+</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.featuredInfo}>
                    <span className={styles.featuredCategory}>{project.categoryLabel}</span>
                    <h3 className={styles.featuredTitle}>{project.title}</h3>
                    <p className={styles.featuredDesc}>{project.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
              <Link to="/portfolio" className="btn btn--primary btn--lg">
                {t('sections.featured_button')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={t('sections.cta_title')}
        text={t('sections.cta_text')}
        buttonText={t('sections.cta_button')}
      />
    </main>
  );
}
