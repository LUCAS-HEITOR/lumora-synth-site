import { createContext, useContext, useState, useCallback } from 'react';
import en from '../data/locales/en';
import pt from '../data/locales/pt';

const locales = { en, pt };
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const t = useCallback(
    (path) => {
      const keys = path.split('.');
      let value = locales[lang];
      for (const key of keys) {
        if (value == null) return path;
        value = value[key];
      }
      return value ?? path;
    },
    [lang]
  );

  const switchLanguage = useCallback((newLang) => {
    if (locales[newLang]) setLang(newLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
