import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBars3, HiXMark, HiChevronDown, HiArrowUpRight } from 'react-icons/hi2';
import { useLanguage, useT } from '../contexts/LanguageContext';
import { Logo } from './ui';

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
  { code: 'az', name: 'Azərbaycan' },
];

const Navigation = () => {
  const location = useLocation();
  const { language, changeLanguage } = useLanguage();
  const t = useT();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const upScrollAccum = useRef(0);
  const langRef = useRef(null);

  const navItems = [
    { to: '/services', label: t.nav.services },
    { to: '/work', label: t.nav.work },
    { to: '/#process', label: t.nav.process },
    { to: '/stack', label: t.nav.stack },
    { to: '/contact', label: t.nav.contact },
  ];

  const isActive = (to) => {
    const [path, hash] = to.split('#');
    if (hash) return location.pathname === '/' && location.hash === `#${hash}`;
    return location.pathname.startsWith(path);
  };

  // Hide on scroll down, reveal after a short scroll up
  useEffect(() => {
    const SHOW_THRESHOLD = 32;
    const HIDE_AFTER = 120;

    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScrollY.current;
      setScrolled(current > 12);

      if (current <= HIDE_AFTER) {
        setHidden(false);
        upScrollAccum.current = 0;
      } else if (delta > 0) {
        upScrollAccum.current = 0;
        setHidden(true);
      } else {
        upScrollAccum.current += Math.abs(delta);
        if (upScrollAccum.current >= SHOW_THRESHOLD) setHidden(false);
      }
      lastScrollY.current = current;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const onOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setLangOpen(false);
    document.addEventListener('mousedown', onOutside);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onOutside);
      document.removeEventListener('keydown', onKey);
    };
  }, [langOpen]);

  // Close the mobile menu on navigation
  useEffect(() => setMenuOpen(false), [location.pathname, location.hash]);

  const solid = scrolled || menuOpen;

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden && !menuOpen ? '-100%' : 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 border-b ${
        solid ? 'bg-ink-950/80 backdrop-blur-xl border-line' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-6" aria-label="Main">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive(item.to) ? 'text-fg bg-white/[0.06]' : 'text-fg-muted hover:text-fg'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Language */}
          <div className="relative hidden sm:block" ref={langRef}>
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={t.nav.language}
              className="flex h-10 items-center gap-1 rounded-full px-3 font-mono text-xs text-fg-muted hover:text-fg transition-colors"
            >
              {language.toUpperCase()}
              <HiChevronDown className={`h-3.5 w-3.5 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.ul
                  role="listbox"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6, transition: { duration: 0.12 } }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-line bg-ink-900 p-1 shadow-2xl shadow-black/50"
                >
                  {LANGUAGES.map((lang) => (
                    <li key={lang.code}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={language === lang.code}
                        onClick={() => { changeLanguage(lang.code); setLangOpen(false); }}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                          language === lang.code ? 'bg-white/[0.06] text-fg' : 'text-fg-muted hover:bg-white/[0.04] hover:text-fg'
                        }`}
                      >
                        {lang.name}
                        <span className="font-mono text-[11px] text-fg-subtle">{lang.code.toUpperCase()}</span>
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact" className="btn-primary hidden md:inline-flex h-10 px-5">
            {t.nav.cta}
            <HiArrowUpRight className="h-4 w-4" />
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="lg:hidden grid h-11 w-11 place-items-center rounded-full text-fg-muted hover:text-fg hover:bg-white/[0.05] transition-colors"
          >
            {menuOpen ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0, transition: { duration: 0.18 } }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-line"
          >
            <div className="container-page py-6">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={`block rounded-xl px-4 py-3.5 text-lg transition-colors ${
                        isActive(item.to) ? 'bg-white/[0.06] text-fg' : 'text-fg-muted hover:text-fg'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-2 border-t border-line pt-6">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => changeLanguage(lang.code)}
                    aria-pressed={language === lang.code}
                    className={`h-10 rounded-full px-4 font-mono text-xs transition-colors ${
                      language === lang.code ? 'bg-fg text-ink-950' : 'border border-line text-fg-muted'
                    }`}
                  >
                    {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
              <Link to="/contact" className="btn-primary mt-6 w-full">
                {t.nav.cta}
                <HiArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
