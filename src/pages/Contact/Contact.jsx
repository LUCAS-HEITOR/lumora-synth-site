import { useLanguage } from '../../context/LanguageContext';
import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './Contact.module.css';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="page">
      <div className="container container--narrow">
        <div className="page-header">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
        </div>

        <div className={styles.info}>
          <div className={styles.channel}>
            <span className={styles.channelLabel}>Email</span>
            <a href="mailto:liletlupo@gmail.com" className={styles.channelValue}>
              liletlupo@gmail.com
            </a>
          </div>
          <div className={styles.channel}>
            <span className={styles.channelLabel}>Discord</span>
            <span className={styles.channelValue}>corelupo.social</span>
          </div>
          <div className={styles.channel}>
            <span className={styles.channelLabel}>WhatsApp</span>
            <a href="https://wa.me/5592981811004" target="_blank" rel="noopener noreferrer" className={styles.channelValue}>
              +55 (92) 98181-1004
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
