import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Auto-detect language based on browser
const detectLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.toLowerCase().split('-')[0];
  
  // Check if Russian
  if (langCode === 'ru' || browserLang.toLowerCase().includes('ru')) {
    return 'ru';
  }
  // Check if Azerbaijani
  if (langCode === 'az' || browserLang.toLowerCase().includes('az')) {
    return 'az';
  }
  // Default to English
  return 'en';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get from localStorage or detect
    const saved = localStorage.getItem('language');
    return saved || detectLanguage();
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
