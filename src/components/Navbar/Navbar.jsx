import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.css';

const navLinks = [
  { path: '/', key: 'nav.home' },
  { path: '/services', key: 'nav.services' },
  { path: '/portfolio', key: 'nav.portfolio' },
  { path: '/quote', key: 'nav.quote' },
  { path: '/about', key: 'nav.about' },
  { path: '/faq', key: 'nav.faq' },
  { path: '/contact', key: 'nav.contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Lumora Synth" className={styles.logoImg} />
          Lumora Synth
        </Link>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
          {navLinks.map(({ path, key }) => (
            <li key={path}>
              <Link
                to={path}
                className={`${styles.navLink} ${isActive(path) ? styles.navLinkActive : ''}`}
              >
                {t(key)}
              </Link>
            </li>
          ))}
          <li className={styles.langMobile}>
            <LanguageSwitcher />
          </li>
        </ul>

        <div className={styles.actions}>
          <div className={styles.langDesktop}>
            <LanguageSwitcher />
          </div>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </div>
    </nav>
  );
}
