import { useLanguage } from '../../context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { lang, switchLanguage } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.btn} ${lang === 'en' ? styles.active : ''}`}
        onClick={() => switchLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className={styles.divider}>/</span>
      <button
        className={`${styles.btn} ${lang === 'pt' ? styles.active : ''}`}
        onClick={() => switchLanguage('pt')}
        aria-label="Mudar para Português"
      >
        PT
      </button>
    </div>
  );
}
