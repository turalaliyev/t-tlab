import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollTo } from './SmoothScroll';

/* Jumps to the top on route change, or glides to #anchor when the URL has a hash */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const scrollTo = useScrollTo();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target page has rendered
      const id = requestAnimationFrame(() => scrollTo(hash));
      return () => cancelAnimationFrame(id);
    }
    scrollTo(0, { immediate: true });
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
