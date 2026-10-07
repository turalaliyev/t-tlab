import { createContext, useContext, useEffect, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const LenisContext = createContext(null);

/* Inertial smooth scrolling for the whole page. Disabled for reduced-motion users. */
export const SmoothScroll = ({ children }) => {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const instance = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      // Let nested scrollable areas (e.g. the open mobile menu) scroll natively
      prevent: (node) => node.closest?.('[data-lenis-prevent]') !== null,
    });
    setLenis(instance);
    return () => {
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
};

/* Scroll helper that uses Lenis when active and native scrolling otherwise.
   Anchored sections clear the fixed header via `scroll-padding-top` in index.css. */
export const useScrollTo = () => {
  const lenis = useContext(LenisContext);
  return (target, { immediate = false } = {}) => {
    if (lenis) {
      lenis.resize(); // page height may have changed since Lenis last measured
      lenis.scrollTo(target, { immediate, force: true });
      return;
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior = immediate || reduced ? 'auto' : 'smooth';
    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior });
    } else {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      el?.scrollIntoView({ behavior });
    }
  };
};
