import { useState } from 'react';
import { getLocalizedServices, getLocalizedCategories } from '../../data/services';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Services.module.css';

export default function Services() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const allServices = getLocalizedServices(lang);
  const localizedCategories = getLocalizedCategories(lang);
  const filteredServices =
    activeCategory === 'all'
      ? allServices
      : allServices.filter((s) => s.category === activeCategory);

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1>{t('sections.services_title')}</h1>
          <p>{t('sections.services_subtitle')}</p>
        </div>

        <div className={styles.filterBar}>
          <button
            className={`${styles.filterBtn} ${activeCategory === 'all' ? styles.filterBtnActive : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            {t('services.all')}
          </button>
          {localizedCategories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
