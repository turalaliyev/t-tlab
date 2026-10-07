import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUpRight, HiCheck } from 'react-icons/hi2';
import { useT } from '../contexts/LanguageContext';
import { EASE } from '../components/ui';
import { useScrollTo } from '../components/SmoothScroll';
import { ProjectVisual } from '../components/DeviceFrames';
import { PageHeader, CtaBlock, StoreButtons } from '../components/Sections';
import { PROJECTS, WORK_FILTERS } from '../data/site';

const CaseStudy = ({ project, copy, kase, labels, index }) => (
  <motion.article
    id={project.slug}
    layout
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
    transition={{ duration: 0.5, ease: EASE }}
    className="border-t border-line py-16 first:border-t-0 sm:py-24"
  >
    <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block lg:col-span-7"
        aria-label={`${project.title} — ${labels.visit}`}
      >
        <ProjectVisual
          project={project}
          alt={`${project.title} screenshot`}
          className="transition-transform duration-500 group-hover:-translate-y-1"
          imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </a>

      <div className="lg:col-span-5">
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="text-fg-subtle">{String(index + 1).padStart(2, '0')}</span>
          <span className="h-px w-6 bg-line" />
          <span className="uppercase tracking-[0.18em] text-accent">{kase.industry}</span>
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{project.title}</h2>
        <p className="mt-2 text-fg-subtle">{copy.tagline}</p>
        <p className="mt-6 text-lg leading-relaxed text-fg-muted">{kase.overview}</p>
        {project.stores ? (
          <StoreButtons stores={project.stores} className="mt-8" />
        ) : (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-8"
          >
            {labels.visit}
            <span className="text-fg-subtle">{project.domain}</span>
            <HiArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>

    <div className="mt-12 grid gap-5 md:grid-cols-12">
      <div className="card p-7 md:col-span-4">
        <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">{labels.scope}</h3>
        <ul className="mt-5 space-y-3">
          {kase.scope.map((line) => (
            <li key={line} className="flex gap-3 text-fg">
              <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-accent" />
              {line}
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-7 md:col-span-5">
        <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">{labels.features}</h3>
        <ul className="mt-5 space-y-3">
          {kase.features.map((line) => (
            <li key={line} className="flex gap-3 leading-relaxed text-fg-muted">
              <HiCheck className="mt-1 h-4 w-4 shrink-0 text-accent-mint" />
              {line}
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-7 md:col-span-3">
        <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
          {project.platform === 'mobile' ? labels.platforms : labels.stack}
        </h3>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => <li key={tech} className="chip text-xs">{tech}</li>)}
        </ul>
        {kase.languages && (
          <>
            <h3 className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">{labels.languages}</h3>
            <p className="mt-4 font-mono text-sm text-fg">{kase.languages}</p>
          </>
        )}
      </div>
    </div>
  </motion.article>
);

export default function Work() {
  const t = useT();
  const w = t.work;
  const [filter, setFilter] = useState('all');
  const { hash } = useLocation();
  const scrollTo = useScrollTo();

  // A link to /work#slug must show that project even if a filter is hiding it
  useEffect(() => {
    const target = PROJECTS.find((p) => `#${p.slug}` === hash);
    if (target && filter !== 'all' && target.filter !== filter) {
      setFilter('all');
      // Re-aim once the full list has rendered
      const id = setTimeout(() => scrollTo(hash), 350);
      return () => clearTimeout(id);
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  const entries = PROJECTS
    .map((project, i) => ({ project, copy: t.projects[i], kase: w.cases[i] }))
    .filter(({ project }) => filter === 'all' || project.filter === filter);

  const count = (key) => (key === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.filter === key).length);

  return (
    <>
      <PageHeader eyebrow={w.eyebrow} title={w.title} description={w.description}>
        <div role="group" aria-label={w.eyebrow} className="mt-10 flex flex-wrap gap-2">
          {WORK_FILTERS.map((key) => {
            const active = filter === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                aria-pressed={active}
                className={`inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm transition-colors ${
                  active
                    ? 'border-fg bg-fg text-ink-950'
                    : 'border-line bg-ink-950/60 text-fg-muted backdrop-blur hover:border-white/30 hover:text-fg'
                }`}
              >
                {w.filters[key]}
                <span className={`font-mono text-[11px] ${active ? 'text-ink-950/60' : 'text-fg-subtle'}`}>{count(key)}</span>
              </button>
            );
          })}
        </div>
      </PageHeader>

      <section className="pb-8">
        <div className="container-page">
          <AnimatePresence mode="popLayout" initial={false}>
            {entries.map(({ project, copy, kase }, i) => (
              <CaseStudy
                key={project.slug}
                project={project}
                copy={copy}
                kase={kase}
                labels={w.labels}
                index={i}
              />
            ))}
          </AnimatePresence>
        </div>
      </section>

      <CtaBlock
        title={t.portfolio.ctaTitle}
        description={t.portfolio.ctaDesc}
        primary={t.portfolio.cta}
        secondary={t.home.cta.secondary}
      />
    </>
  );
}
