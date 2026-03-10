import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ service }) {
  const { t } = useLanguage();
  const { addToCart } = useCart();

  const handleBuy = () => {
    addToCart(service);
  };

  return (
    <div className={`${styles.card} ${service.comingSoon ? styles.comingSoon : ''}`}>
      <div className={styles.category}>{service.category.replace('-', ' ')}</div>
      <h3 className={styles.name}>{service.name}</h3>
      <p className={styles.description}>{service.shortDescription}</p>

      <div className={styles.pricing}>
        {service.comingSoon ? (
          <span className={styles.badge}>{t('services.coming_soon')}</span>
        ) : (
          <span className={styles.price}>
            {t('services.starting_at')} {formatCurrency(service.priceFrom, service.currency)}
          </span>
        )}
      </div>

      <div className={styles.actions}>
        {!service.comingSoon && (
          <>
            <Link to="/checkout" className="btn btn--primary btn--sm" onClick={handleBuy}>
              {t('services.buy')}
            </Link>
            <Link to={`/quote?service=${service.category}`} className="btn btn--secondary btn--sm">
              {t('services.quote')}
            </Link>
          </>
        )}
        <Link to={`/services/${service.slug}`} className={styles.detailsLink}>
          Learn more →
        </Link>
      </div>
    </div>
  );
}
