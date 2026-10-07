import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const EASE = [0.16, 1, 0.3, 1];

/* Fades + lifts children into view once. MotionConfig in App handles reduced motion. */
export const Reveal = ({ children, delay = 0, y = 24, className = '', as = 'div', ...rest }) => {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export const SectionHeader = ({ eyebrow, title, description, align = 'left', className = '' }) => (
  <Reveal
    className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}
  >
    {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
    <h2 className="h-section">{title}</h2>
    {description && (
      <p className={`mt-5 text-lg leading-relaxed text-fg-muted ${align === 'center' ? 'mx-auto' : ''} max-w-2xl`}>
        {description}
      </p>
    )}
  </Reveal>
);

/* "22." monogram on a 32-unit grid. Same geometry as public/favicon.svg */
const LogoMark = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <rect width="32" height="32" rx="6" className="fill-fg" />
    <path
      className="fill-ink-950"
      d="M5 7h8v10H8v5h5v3H5V14h5v-4H5zM16 7h8v10h-5v5h5v3h-8V14h5v-4h-5z"
    />
    <rect x="25" y="22" width="3" height="3" className="fill-accent-strong" />
  </svg>
);

export const Logo = ({ onClick }) => (
  <Link to="/" onClick={onClick} className="inline-flex items-center gap-3 shrink-0" aria-label="22 Lab home">
    <LogoMark />
    <span className="text-[15px] font-semibold uppercase tracking-[0.24em] text-fg">Lab</span>
  </Link>
);

/* Small pulsing dot used for "available" states */
export const LiveDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full rounded-full bg-accent-mint opacity-60 motion-safe:animate-ping" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-mint" />
  </span>
);

/* Site-wide top backdrop: contour lines + soft glow, identical on every page.
   Rendered once in App behind the page content and fades out as the page scrolls. */
export const PageBackdrop = () => (
  <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[1000px] overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 bg-contours" />
    <div
      className="absolute left-1/2 top-0 h-[560px] w-[1100px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-60 blur-3xl"
      style={{ background: 'radial-gradient(closest-side, rgba(91,124,250,0.35), rgba(167,139,250,0.12) 60%, transparent)' }}
    />
  </div>
);
