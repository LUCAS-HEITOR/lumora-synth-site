import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import styles from './ServiceDetails.module.css';

export default function ServiceDetails() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const { addToCart } = useCart();

  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="page">
        <div className="container container--narrow">
          <div className={styles.notFound}>
            <h1>Service Not Found</h1>
            <p>The service you are looking for does not exist or has been removed.</p>
            <Link to="/services" className="btn btn--primary">
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleBuy = () => {
    addToCart(service);
  };

  return (
    <div className="page">
      <div className="container container--narrow">
        <div className={styles.header}>
          <Link to="/services" className={styles.backLink}>
            &larr; All Services
          </Link>
          <span className={styles.category}>
            {service.category.replace('-', ' ')}
          </span>
          <h1 className={styles.title}>{service.name}</h1>
        </div>

        <div className={styles.body}>
          <p className={styles.description}>{service.description}</p>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('services.deliverables')}</h2>
            <ul className={styles.deliverables}>
              {service.deliverables.map((item, index) => (
                <li key={index} className={styles.deliverableItem}>
                  <span className={styles.checkmark}>&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.meta}>
            <div className={styles.pricing}>
              {service.comingSoon ? (
                <span className={styles.badge}>{t('services.coming_soon')}</span>
              ) : (
                <div className={styles.priceBlock}>
                  <span className={styles.priceLabel}>{t('services.starting_at')}</span>
                  <span className={styles.price}>
                    {formatCurrency(service.priceFrom, service.currency)}
                  </span>
                </div>
              )}
            </div>

            <div className={styles.timeline}>
              <span className={styles.timelineLabel}>{t('services.estimated_time')}</span>
              <span className={styles.timelineValue}>
                {service.estimatedDays} {t('services.days')}
              </span>
            </div>
          </div>

          <div className={styles.actions}>
            {service.comingSoon ? (
              <button className="btn btn--primary btn--lg" disabled>
                {t('services.coming_soon')}
              </button>
            ) : (
              <>
                <Link
                  to="/checkout"
                  className="btn btn--primary btn--lg"
                  onClick={handleBuy}
                >
                  {t('services.buy')}
                </Link>
                <Link
                  to={`/quote?service=${service.category}`}
                  className="btn btn--secondary btn--lg"
                >
                  {t('services.quote')}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
