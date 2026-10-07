import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiArrowRight, HiArrowUpRight, HiArrowUp, HiPlus,
  HiOutlineChatBubbleLeftRight, HiOutlinePresentationChartLine, HiOutlineBolt, HiOutlineKey,
} from 'react-icons/hi2';
import { useT } from '../contexts/LanguageContext';
import { useScrollTo } from '../components/SmoothScroll';
import { Reveal, SectionHeader, LiveDot, EASE } from '../components/ui';
import HeroVisual from '../components/HeroVisual';
import { PROJECTS, MARQUEE, SERVICES } from '../data/site';
import { ProjectRow, CtaBlock } from '../components/Sections';

const WHY_ICONS = [
  HiOutlineChatBubbleLeftRight,
  HiOutlinePresentationChartLine,
  HiOutlineBolt,
  HiOutlineKey,
];

/* ───────────────────────── Hero ───────────────────────── */
const Hero = ({ t }) => (
  <section className="relative overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-28">
    <div className="absolute inset-0 bg-grid" aria-hidden="true" />
    <div
      className="absolute left-1/2 top-0 h-[560px] w-[1100px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-60 blur-3xl"
      style={{ background: 'radial-gradient(closest-side, rgba(91,124,250,0.35), rgba(167,139,250,0.12) 60%, transparent)' }}
      aria-hidden="true"
    />

    <div className="container-page relative grid items-center gap-16 lg:grid-cols-12">
      <div className="lg:col-span-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-sm text-fg-muted"
        >
          <LiveDot />
          {t.home.badge}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
          className="h-display mt-7 text-[2.6rem] sm:text-6xl xl:text-[4.4rem]"
        >
          {t.home.titleA} <span className="text-gradient">{t.home.titleB}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted"
        >
          {t.home.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Link to="/contact" className="btn-primary group">
            {t.home.ctaPrimary}
            <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link to="/work" className="btn-ghost">
            {t.home.ctaSecondary}
          </Link>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8 sm:grid-cols-4"
        >
          {t.home.stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-fg">{s.value}</dd>
              <dd className="mt-1 text-sm text-fg-subtle">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        className="relative pb-10 lg:col-span-6"
      >
        <HeroVisual />
      </motion.div>
    </div>
  </section>
);

/* ───────────────────────── Tech marquee ───────────────────────── */
const TechMarquee = ({ t }) => (
  <section className="border-y border-line py-10" aria-label={t.home.techStrip}>
    <p className="container-page mb-7 text-center text-sm text-fg-subtle">{t.home.techStrip}</p>
    <div className="mask-fade-x overflow-hidden">
      <ul className="flex w-max animate-marquee gap-12 pr-12">
        {[...MARQUEE, ...MARQUEE].map(({ name, icon: Icon }, i) => (
          <li
            key={i}
            aria-hidden={i >= MARQUEE.length}
            className="flex items-center gap-2.5 whitespace-nowrap text-fg-subtle"
          >
            <Icon className="h-5 w-5" />
            <span className="text-[15px] font-medium">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

/* ───────────────────────── Services ───────────────────────── */
const Services = ({ t }) => (
  <section id="services" className="py-24 sm:py-32">
    <div className="container-page">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow={t.home.services.eyebrow}
          title={t.home.services.title}
          description={t.home.services.description}
        />
        <Reveal>
          <Link to="/services" className="btn-ghost shrink-0">
            {t.home.services.all}
            <HiArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {t.home.services.items.map((s, i) => {
          const { icon: Icon, slug } = SERVICES[i];
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.06} className="bg-ink-950">
              <Link
                to={`/services#${slug}`}
                className="group block h-full p-8 transition-colors duration-300 hover:bg-ink-900"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-white/[0.03] text-accent transition-colors group-hover:border-accent/40">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="flex items-center gap-2 font-mono text-xs text-fg-subtle">
                    {String(i + 1).padStart(2, '0')}
                    <HiArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-fg">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-fg-muted">{s.desc}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <li key={tag} className="chip">{tag}</li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

/* ───────────────────────── Work ───────────────────────── */
const Work = ({ t }) => (
  <section id="work" className="border-t border-line py-24 sm:py-32">
    <div className="container-page">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader eyebrow={t.home.work.eyebrow} title={t.home.work.title} description={t.home.work.description} />
        <Reveal>
          <Link to="/work" className="btn-ghost shrink-0">
            {t.home.work.all}
            <HiArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
      <div className="mt-16 space-y-24 sm:space-y-32">
        {PROJECTS.slice(0, 3).map((p, i) => (
          <ProjectRow key={p.title} project={p} copy={t.projects[i]} index={i} visitLabel={t.common.visitSite} />
        ))}
      </div>
    </div>
  </section>
);

/* ───────────────────────── Process ───────────────────────── */
const Process = ({ t }) => (
  <section id="process" className="relative border-t border-line bg-ink-900/40 py-24 sm:py-32">
    <div className="container-page">
      <SectionHeader eyebrow={t.home.process.eyebrow} title={t.home.process.title} description={t.home.process.description} />
      <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <div
          className="absolute left-0 right-0 top-[1.4rem] hidden h-px lg:block"
          style={{ background: 'linear-gradient(90deg, rgba(124,156,255,0.6), rgba(167,139,250,0.4), transparent)' }}
          aria-hidden="true"
        />
        {t.home.process.steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 0.08} className="relative">
            <span className="relative grid h-11 w-11 place-items-center rounded-full border border-accent/40 bg-ink-950 font-mono text-sm text-accent">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-fg-subtle">{step.meta}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-fg-muted">{step.desc}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

/* ───────────────────────── Why us ───────────────────────── */
const Why = ({ t }) => (
  <section className="border-t border-line py-24 sm:py-32">
    <div className="container-page grid gap-14 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <SectionHeader eyebrow={t.home.why.eyebrow} title={t.home.why.title} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
        {t.home.why.items.map((item, i) => {
          const Icon = WHY_ICONS[i];
          return (
            <Reveal key={item.title} delay={(i % 2) * 0.06} className="card p-8">
              <Icon className="h-7 w-7 text-accent" />
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-fg">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-fg-muted">{item.desc}</p>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

/* ───────────────────────── FAQ ───────────────────────── */
const Faq = ({ t }) => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="border-t border-line py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader eyebrow={t.home.faq.eyebrow} title={t.home.faq.title} />
        </div>
        <ul className="divide-y divide-line border-y border-line lg:col-span-8">
          {t.home.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium text-fg hover:text-accent transition-colors"
                  >
                    {item.q}
                    <HiPlus className={`h-5 w-5 shrink-0 text-fg-subtle transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0, transition: { duration: 0.18 } }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 leading-relaxed text-fg-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

/* ───────────────────────── Page ───────────────────────── */
export default function Home() {
  const t = useT();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Hero t={t} />
      <TechMarquee t={t} />
      <Services t={t} />
      <Work t={t} />
      <Process t={t} />
      <Why t={t} />
      <Faq t={t} />
      <CtaBlock
        title={t.home.cta.title}
        description={t.home.cta.description}
        primary={t.home.cta.primary}
        secondary={t.home.cta.secondary}
      />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            aria-label={t.common.backToTop}
            onClick={() => scrollTo(0)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-line bg-ink-900/90 text-fg-muted shadow-lg backdrop-blur hover:text-fg hover:border-white/30 transition-colors"
          >
            <HiArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
