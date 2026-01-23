import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiBolt, HiBars3, HiChevronDown } from 'react-icons/hi2';
import { HiX } from 'react-icons/hi';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Navigation = () => {
  const location = useLocation();
  const { language, changeLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef(null);

  const t = translations[language];

  const navItems = [
    { path: '/', label: t.nav.services },
    { path: '/stack', label: t.nav.stack },
    { path: '/portfolio', label: t.nav.portfolio },
    { path: '/contact', label: t.nav.contact },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'az', name: 'Azərbaycan', flag: '🇦🇿' },
  ];

  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setIsLangMenuOpen(false);
      }
    };

    if (isLangMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isLangMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white hover:text-accent-primary transition-colors"
            onClick={closeMobileMenu}
          >
            <HiBolt className="h-6 w-6 text-accent-primary" />
            <span className="text-xl font-bold">T&T LAB</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-accent-primary'
                    : 'text-white hover:text-accent-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Language Selector */}
          <div className="hidden md:block relative" ref={langMenuRef}>
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-dark-card border border-dark-border rounded-lg font-medium text-sm text-white hover:border-accent-primary transition-colors"
            >
              <span>{currentLang.flag}</span>
              <span>{currentLang.code.toUpperCase()}</span>
              <HiChevronDown className={`h-4 w-4 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-dark-card border border-dark-border rounded-lg shadow-lg overflow-hidden z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center gap-3 text-sm font-medium transition-colors ${
                      language === lang.code
                        ? 'bg-accent-primary/10 text-accent-primary'
                        : 'text-white hover:bg-dark-surface'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-accent-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiBars3 className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-dark-border bg-dark-bg/98 backdrop-blur-md">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-accent-primary/10 text-accent-primary border-l-2 border-accent-primary'
                      : 'text-white hover:bg-dark-card hover:text-accent-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {/* Mobile Language Selector */}
              <div className="mt-4 pt-4 border-t border-dark-border">
                <p className="px-4 py-2 text-xs text-gray-400 uppercase">Language</p>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      closeMobileMenu();
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center gap-3 text-sm font-medium transition-colors ${
                      language === lang.code
                        ? 'bg-accent-primary/10 text-accent-primary'
                        : 'text-white hover:bg-dark-card'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
