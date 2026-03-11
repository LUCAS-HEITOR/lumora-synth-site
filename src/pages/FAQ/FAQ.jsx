import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedFaqItems } from '../../data/faq';
import FAQItem from '../../components/FAQItem/FAQItem';

export default function FAQ() {
  const { t, lang } = useLanguage();
  const localizedFaq = getLocalizedFaqItems(lang);

  return (
    <div className="page">
      <div className="container container--narrow">
        <div className="page-header">
          <h1>{t('faq.title')}</h1>
          <p>{t('faq.subtitle')}</p>
        </div>
        <div>
          {localizedFaq.map((item) => (
            <FAQItem key={item.id} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
