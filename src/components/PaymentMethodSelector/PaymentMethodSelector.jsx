import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedPaymentMethods } from '../../data/paymentMethods';
import styles from './PaymentMethodSelector.module.css';

export default function PaymentMethodSelector({ onSelect }) {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState(null);
  const methods = getLocalizedPaymentMethods(lang);

  const handleSelect = (method) => {
    setSelected(method.id);
    if (onSelect) onSelect(method);
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>{t('checkout.payment_method')}</h3>
      <div className={styles.methods}>
        {methods.map((method) => (
          <button
            key={method.id}
            className={`${styles.method} ${selected === method.id ? styles.selected : ''}`}
            onClick={() => handleSelect(method)}
            type="button"
          >
            <span className={styles.icon}>{method.icon}</span>
            <div className={styles.info}>
              <span className={styles.name}>{method.name}</span>
              <span className={styles.description}>{method.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
