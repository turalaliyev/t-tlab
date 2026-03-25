import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBars3, HiChevronDown } from 'react-icons/hi2';
import { HiX } from 'react-icons/hi';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Navigation = () => {
  const location = useLocation();
  const { language, changeLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const upScrollAccum = useRef(0);
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

  const currentLang = languages.find(l => l.code === language) || languages[0];
  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const SHOW_THRESHOLD = 32; // 2rem — min upward scroll to reveal nav
    const HIDE_AFTER = 80;     // px from top before hiding kicks in

    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScrollY.current;

      setScrolled(current > 20);

      if (current <= HIDE_AFTER) {
        // Always visible near the top
        setHidden(false);
        upScrollAccum.current = 0;
      } else if (delta > 0) {
        // Scrolling down — hide immediately and reset accumulator
        upScrollAccum.current = 0;
        setHidden(true);
      } else {
        // Scrolling up — accumulate upward distance
        upScrollAccum.current += Math.abs(delta);
        if (upScrollAccum.current >= SHOW_THRESHOLD) {
          setHidden(false);
        }
      }

      lastScrollY.current = current;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleOutside = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setIsLangMenuOpen(false);
      }
    };
    if (isLangMenuOpen) {
      document.addEventListener('mousedown', handleOutside);
      return () => document.removeEventListener('mousedown', handleOutside);
    }
  }, [isLangMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? '-100%' : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 neon-frame ${
        scrolled
          ? 'bg-brand-bg/90 backdrop-blur-xl border-b border-brand-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link to="/" onClick={closeMobileMenu}
            className="text-xl font-semibold text-white hover:text-neon-blue transition-colors shrink-0 tracking-[0.08em] uppercase">
            22 <span className="text-gradient-blue">Lab</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.div key={item.path} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors relative pb-0.5 ${
                    isActive(item.path) ? 'text-neon-blue' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 bottom-0 h-px rounded"
                      style={{ background: 'linear-gradient(90deg, #38bdf8, #a78bfa)' }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right: lang + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-brand-border bg-brand-surface/50 text-slate-400 text-xs font-medium hover:border-neon-blue/40 hover:text-white transition-all"
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.code.toUpperCase()}</span>
                <HiChevronDown className={`h-3.5 w-3.5 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 mt-2 w-44 rounded overflow-hidden border border-brand-border bg-brand-card backdrop-blur-xl shadow-xl shadow-black/30 z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { changeLanguage(lang.code); setIsLangMenuOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 flex items-center gap-3 text-sm transition-colors ${
                          language === lang.code
                            ? 'bg-neon-blue/10 text-neon-blue'
                            : 'text-slate-400 hover:bg-brand-surface hover:text-white'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-brand-border bg-brand-bg/98 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-2 py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-neon-blue/10 text-neon-blue'
                        : 'text-slate-400 hover:bg-brand-surface hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-brand-border">
                  <p className="px-4 py-2 text-xs text-slate-600 uppercase font-mono">Language</p>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { changeLanguage(lang.code); closeMobileMenu(); }}
                      className={`w-full text-left px-4 py-2.5 flex items-center gap-3 text-sm transition-colors ${
                        language === lang.code ? 'text-neon-blue' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
