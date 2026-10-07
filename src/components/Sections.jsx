import { Link } from 'react-router-dom';
import { HiArrowRight, HiArrowUpRight } from 'react-icons/hi2';
import { FaWhatsapp, FaApple, FaGooglePlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Reveal, EASE } from './ui';
import { ProjectVisual } from './DeviceFrames';
import { CONTACT } from '../data/site';

/* App Store / Google Play links for mobile projects (store names are the same in every language) */
export const StoreButtons = ({ stores, className = '' }) => (
  <div className={`flex flex-wrap gap-3 ${className}`}>
    {stores.appStore && (
      <a href={stores.appStore} target="_blank" rel="noopener noreferrer" className="btn-ghost">
        <FaApple className="h-4 w-4" />
        App Store
        <HiArrowUpRight className="h-4 w-4 text-fg-subtle" />
      </a>
    )}
    {stores.googlePlay && (
      <a href={stores.googlePlay} target="_blank" rel="noopener noreferrer" className="btn-ghost">
        <FaGooglePlay className="h-3.5 w-3.5" />
        Google Play
        <HiArrowUpRight className="h-4 w-4 text-fg-subtle" />
      </a>
    )}
  </div>
);

/* Large alternating project row used on Home */
export const ProjectRow = ({ project, copy, index, visitLabel }) => {
  const flip = index % 2 === 1;
  return (
    <Reveal className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}
        aria-label={`${project.title} — ${visitLabel}`}
      >
        <ProjectVisual
          project={project}
          alt={`${project.title} screenshot`}
          className="transition-transform duration-500 group-hover:-translate-y-1"
          imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </a>
      <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{copy.category}</p>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{project.title}</h3>
        <p className="mt-4 text-lg leading-relaxed text-fg-muted">{copy.desc}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => <li key={tech} className="chip">{tech}</li>)}
        </ul>
        {project.stores ? (
          <StoreButtons stores={project.stores} className="mt-8" />
        ) : (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg hover:text-accent transition-colors"
          >
            {visitLabel} <span className="text-fg-subtle">{project.domain}</span>
            <HiArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </Reveal>
  );
};

/* ───────────────────────── CTA ───────────────────────── */
export const CtaBlock = ({ title, description, primary, secondary }) => (
  <section className="py-24 sm:py-32">
    <div className="container-page">
      <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-ink-900 px-6 py-16 text-center sm:px-16 sm:py-24">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
        <div
          className="absolute left-1/2 top-full h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(91,124,250,0.45), transparent)' }}
          aria-hidden="true"
        />
        <div className="relative">
          <h2 className="h-display mx-auto max-w-3xl text-4xl sm:text-6xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">{description}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="btn-primary group">
              {primary}
              <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            {secondary && (
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <FaWhatsapp className="h-4 w-4" />
                {secondary}
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* Top-of-page intro used by the inner pages */
export const PageHeader = ({ eyebrow, title, description, children }) => (
  <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
    <div className="absolute inset-0 bg-grid" aria-hidden="true" />
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="container-page relative"
    >
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="h-display mt-5 max-w-4xl text-5xl sm:text-7xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">{description}</p>
      {children}
    </motion.div>
  </section>
);
