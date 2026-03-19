import { useLanguage } from '../../context/LanguageContext';
import styles from './About.module.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="page">
      <div className="container container--narrow">
        <div className="page-header">
          <h1>{t('about.title')}</h1>
        </div>

        <div className={styles.content}>
          <p className={styles.text}>{t('about.text')}</p>

          <div className={styles.values}>
            <div className={styles.value}>
              <h3 className={styles.valueTitle}>Our Mission</h3>
              <p className={styles.valueText}>
                To deliver premium digital products that combine creative vision with solid engineering,
                making advanced technology accessible to businesses and creators worldwide.
              </p>
            </div>
            <div className={styles.value}>
              <h3 className={styles.valueTitle}>Our Approach</h3>
              <p className={styles.valueText}>
                We believe in clean code, transparent communication, and results-driven development.
                Every project starts with understanding your goals and ends with a product you're proud of.
              </p>
            </div>
            <div className={styles.value}>
              <h3 className={styles.valueTitle}>Our Stack</h3>
              <p className={styles.valueText}>
                React, Django, Python, Node.js, Selenium, and a growing collection
                of automation tools — we choose the right technology for each project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
