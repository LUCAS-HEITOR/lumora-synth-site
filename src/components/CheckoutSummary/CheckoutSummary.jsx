import { formatCurrency } from '../../utils/formatCurrency';
import { useLanguage } from '../../context/LanguageContext';
import styles from './CheckoutSummary.module.css';

export default function CheckoutSummary({ item }) {
  const { t } = useLanguage();

  if (!item) {
    return (
      <div className={styles.empty}>
        <p>{t('checkout.empty')}</p>
      </div>
    );
  }

  return (
    <div className={styles.summary}>
      <h3 className={styles.heading}>{t('checkout.summary')}</h3>
      <div className={styles.row}>
        <span className={styles.label}>{t('checkout.service')}</span>
        <span className={styles.value}>{item.name}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>{t('checkout.currency')}</span>
        <span className={styles.value}>{item.currency}</span>
      </div>
      <div className={styles.divider} />
      <div className={styles.row}>
        <span className={styles.totalLabel}>{t('checkout.total')}</span>
        <span className={styles.totalValue}>
          {formatCurrency(item.price, item.currency)}
        </span>
      </div>
    </div>
  );
}
