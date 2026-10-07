import { Link } from 'react-router-dom';
import {
  HiArrowRight, HiArrowUpRight, HiCheck, HiOutlineClock,
  HiOutlineDevicePhoneMobile, HiOutlineBolt, HiOutlineMagnifyingGlass, HiOutlineChartBar,
  HiOutlineLockClosed, HiOutlinePencilSquare, HiOutlineKey, HiOutlineLifebuoy,
} from 'react-icons/hi2';
import { useT } from '../contexts/LanguageContext';
import { Reveal } from '../components/ui';
import { PageHeader, CtaBlock } from '../components/Sections';
import { SERVICES, PROJECTS } from '../data/site';

const EVERY_ICONS = [
  HiOutlineDevicePhoneMobile, HiOutlineBolt, HiOutlineMagnifyingGlass, HiOutlineChartBar,
  HiOutlineLockClosed, HiOutlinePencilSquare, HiOutlineKey, HiOutlineLifebuoy,
];

const projectBySlug = Object.fromEntries(PROJECTS.map((p) => [p.slug, p]));

const ServiceSection = ({ service, item, detail, labels, index }) => {
  const Icon = service.icon;
  const related = service.work.map((slug) => projectBySlug[slug]).filter(Boolean);

  return (
    <section id={service.slug} className="border-t border-line py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: summary */}
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-white/[0.03] text-accent">
                <Icon className="h-6 w-6" />
              </span>
              <span className="font-mono text-xs text-fg-subtle">{String(index + 1).padStart(2, '0')} / {String(SERVICES.length).padStart(2, '0')}</span>
            </div>
            <h2 className="h-section mt-8">{item.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted">{detail.lead}</p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-line bg-ink-900 px-4 py-3">
              <HiOutlineClock className="h-5 w-5 text-accent" />
              <div>
                <p className="text-xs text-fg-subtle">{labels.timeline}</p>
                <p className="text-sm font-medium text-fg">{detail.timeline}</p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/contact" className="btn-ghost group">
                {labels.discuss}
                <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Right: specifics */}
        <div className="space-y-5 lg:col-span-7">
          <Reveal delay={0.05} className="card p-7 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">{labels.included}</h3>
            <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {detail.included.map((line) => (
                <li key={line} className="flex gap-3 text-fg">
                  <HiCheck className="mt-1 h-4 w-4 shrink-0 text-accent-mint" />
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal delay={0.1} className="card p-7 sm:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">{labels.goodFor}</h3>
              <ul className="mt-6 space-y-3">
                {detail.goodFor.map((line) => (
                  <li key={line} className="flex gap-3 leading-relaxed text-fg-muted">
                    <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-accent" />
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="card p-7 sm:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">{labels.tech}</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.tech.map((tech) => <li key={tech} className="chip text-xs">{tech}</li>)}
              </ul>
              {related.length > 0 && (
                <>
                  <h3 className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">{labels.work}</h3>
                  <ul className="mt-4 space-y-2">
                    {related.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={`/work#${p.slug}`}
                          className="group inline-flex items-center gap-1.5 text-fg hover:text-accent transition-colors"
                        >
                          {p.title}
                          <HiArrowUpRight className="h-3.5 w-3.5 text-fg-subtle group-hover:text-accent transition-colors" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Services() {
  const t = useT();
  const s = t.services;
  const items = t.home.services.items;

  return (
    <>
      <PageHeader eyebrow={s.eyebrow} title={s.title} description={s.description}>
        <nav aria-label={s.labels.jump} className="mt-10 flex flex-wrap gap-2">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Link
                key={svc.slug}
                to={`/services#${svc.slug}`}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-ink-950/60 px-4 text-sm text-fg-muted backdrop-blur transition-colors hover:border-white/30 hover:text-fg"
              >
                <Icon className="h-4 w-4 text-accent" />
                {items[i].title}
              </Link>
            );
          })}
        </nav>
      </PageHeader>

      {SERVICES.map((svc, i) => (
        <ServiceSection
          key={svc.slug}
          service={svc}
          item={items[i]}
          detail={s.details[i]}
          labels={s.labels}
          index={i}
        />
      ))}

      {/* Included in every project */}
      <section className="border-t border-line bg-ink-900/40 py-24">
        <div className="container-page">
          <Reveal>
            <h2 className="h-section max-w-2xl">{s.every.title}</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {s.every.items.map((item, i) => {
              const Icon = EVERY_ICONS[i];
              return (
                <Reveal key={item.title} delay={(i % 4) * 0.05} className="bg-ink-950 p-7">
                  <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  <h3 className="mt-5 font-semibold tracking-tight text-fg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="border-t border-line py-24">
        <div className="container-page">
          <Reveal>
            <h2 className="h-section max-w-2xl">{s.models.title}</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {s.models.items.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06} className="card p-8">
                <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-fg">{m.title}</h3>
                <p className="mt-3 leading-relaxed text-fg-muted">{m.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        title={t.home.cta.title}
        description={t.home.cta.description}
        primary={t.home.cta.primary}
        secondary={t.home.cta.secondary}
      />
    </>
  );
}
