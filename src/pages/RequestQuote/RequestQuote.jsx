import { useLanguage } from '../../context/LanguageContext';
import QuoteForm from '../../components/QuoteForm/QuoteForm';

export default function RequestQuote() {
  const { t } = useLanguage();

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1>{t('quote.title')}</h1>
          <p>{t('quote.subtitle')}</p>
        </div>
        <QuoteForm />
      </div>
    </div>
  );
}
