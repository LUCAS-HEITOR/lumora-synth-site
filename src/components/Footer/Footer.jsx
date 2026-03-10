import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Footer.module.css';

const quickLinks = [
  { path: '/', key: 'nav.home' },
  { path: '/services', key: 'nav.services' },
  { path: '/portfolio', key: 'nav.portfolio' },
  { path: '/quote', key: 'nav.quote' },
  { path: '/faq', key: 'nav.faq' },
  { path: '/contact', key: 'nav.contact' },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* ── Company ── */}
          <div className={styles.column}>
            <h4 className={styles.sectionLabel}>{t('footer.section_company')}</h4>
            <Link to="/" className={styles.brand}>
              <img src="/logo.png" alt="Lumora Synth" className={styles.brandLogo} />
              Lumora Synth
            </Link>
            <p className={styles.description}>{t('footer.description')}</p>
          </div>

          {/* ── Quick Links ── */}
          <div className={styles.column}>
            <h4 className={styles.sectionLabel}>{t('footer.section_links')}</h4>
            <ul className={styles.linkList}>
              {quickLinks.map(({ path, key }) => (
                <li key={path}>
                  <Link to={path} className={styles.link}>{t(key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className={styles.column}>
            <h4 className={styles.sectionLabel}>{t('footer.section_contact')}</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="mailto:liletlupo@gmail.com" className={styles.link}>
                  liletlupo@gmail.com
                </a>
              </li>
              <li>
                <span className={styles.link}>
                  Discord: corelupo.social
                </span>
              </li>
              <li>
                <a
                  href="https://wa.me/5592981811004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  WhatsApp: +55 (92) 98181-1004
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            &copy; 2025 Lumora Synth. {t('footer.rights')}
          </span>
          <div className={styles.legalLinks}>
            <Link to="/privacy" className={styles.legalLink}>{t('footer.privacy')}</Link>
            <Link to="/terms" className={styles.legalLink}>{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
