import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const { t } = useLanguage();
  const ref = useScrollReveal();

  return (
    <section className={styles.hero}>
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className="reveal-fade" ref={ref}>
          <h1 className={styles.headline}>{t('hero.headline')}</h1>
          <p className={styles.subheadline}>{t('hero.subheadline')}</p>
          <div className={styles.actions}>
            <Link to="/services" className="btn btn--white btn--lg">
              {t('hero.cta_services')}
            </Link>
            <Link to="/portfolio" className="btn btn--secondary btn--lg" style={{ borderColor: '#fff', color: '#fff' }}>
              {t('hero.cta_portfolio')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
