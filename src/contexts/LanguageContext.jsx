import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

/* Current language's strings, falling back to English */
export const useT = () => {
  const { language } = useLanguage();
  return translations[language] || translations.en;
};

// Auto-detect language based on browser
const detectLanguage = () => {
  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  const langCode = browserLang.split('-')[0];
  if (langCode === 'ru') return 'ru';
  if (langCode === 'az') return 'az';
  return 'en';
};

const readSaved = () => {
  try {
    const saved = localStorage.getItem('language');
    return translations[saved] ? saved : null;
  } catch {
    return null;
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => readSaved() || detectLanguage());

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem('language', language);
    } catch {
      /* storage unavailable */
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage: setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
