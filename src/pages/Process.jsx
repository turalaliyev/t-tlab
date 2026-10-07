import { Link } from 'react-router-dom';
import {
  HiCheck, HiOutlineDocumentText, HiOutlineClock, HiOutlineUser,
  HiOutlineChatBubbleLeftRight, HiOutlinePresentationChartLine, HiOutlineLink, HiOutlinePencilSquare,
} from 'react-icons/hi2';
import { useT } from '../contexts/LanguageContext';
import { Reveal } from '../components/ui';
import { PageHeader, CtaBlock } from '../components/Sections';

/* Anchor ids for each stage. Order matches home.process.steps and process.stages */
const PROCESS_STAGES = ['discovery', 'design', 'build', 'launch'];

const COMMS_ICONS = [
  HiOutlineChatBubbleLeftRight, HiOutlinePresentationChartLine, HiOutlineLink, HiOutlinePencilSquare,
];

const Stage = ({ slug, step, stage, labels, index, isLast }) => (
  <section id={slug} className="relative border-t border-line py-20 sm:py-24">
    <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
      {/* Left: number, title, lead */}
      <Reveal className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-full border border-accent/40 bg-ink-950 font-mono text-base text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            {!isLast && (
              <span
                className="h-px flex-1 max-w-[8rem]"
                style={{ background: 'linear-gradient(90deg, rgba(124,156,255,0.6), transparent)' }}
                aria-hidden="true"
              />
            )}
          </div>
          <h2 className="h-section mt-8">{step.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-fg-muted">{stage.lead}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-3 rounded-xl border border-line bg-ink-900 px-4 py-3">
              <HiOutlineClock className="h-5 w-5 text-accent" />
              <div>
                <p className="text-xs text-fg-subtle">{labels.duration}</p>
                <p className="text-sm font-medium text-fg">{step.meta}</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Right: activities, deliverables, client's part */}
      <div className="space-y-5 lg:col-span-7">
        <Reveal delay={0.05} className="card p-7 sm:p-8">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">{labels.activities}</h3>
          <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {stage.activities.map((line) => (
              <li key={line} className="flex gap-3 text-fg">
                <HiCheck className="mt-1 h-4 w-4 shrink-0 text-accent-mint" />
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal delay={0.1} className="card p-7 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">{labels.deliverables}</h3>
            <ul className="mt-6 space-y-3">
              {stage.deliverables.map((line) => (
                <li key={line} className="flex gap-3 leading-relaxed text-fg-muted">
                  <HiOutlineDocumentText className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="card border-accent/20 bg-accent-strong/[0.06] p-7 sm:p-8">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              <HiOutlineUser className="h-4 w-4" />
              {labels.yourPart}
            </h3>
            <p className="mt-6 leading-relaxed text-fg">{stage.yourPart}</p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default function Process() {
  const t = useT();
  const p = t.process;
  const steps = t.home.process.steps;

  return (
    <>
      <PageHeader eyebrow={p.eyebrow} title={p.title} description={p.description}>
        <nav aria-label={p.labels.stages} className="mt-10">
          <ol className="flex flex-wrap items-center gap-2">
            {PROCESS_STAGES.map((slug, i) => (
              <li key={slug} className="flex items-center gap-2">
                <Link
                  to={`/process#${slug}`}
                  className="inline-flex h-11 items-center gap-2.5 rounded-full border border-line bg-ink-950/60 px-4 text-sm text-fg-muted backdrop-blur transition-colors hover:border-white/30 hover:text-fg"
                >
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                  {steps[i].title}
                </Link>
                {i < PROCESS_STAGES.length - 1 && <span className="hidden h-px w-4 bg-line sm:block" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </nav>
      </PageHeader>

      {PROCESS_STAGES.map((slug, i) => (
        <Stage
          key={slug}
          slug={slug}
          step={steps[i]}
          stage={p.stages[i]}
          labels={p.labels}
          index={i}
          isLast={i === PROCESS_STAGES.length - 1}
        />
      ))}

      {/* Communication */}
      <section className="border-t border-line bg-ink-900/40 py-24">
        <div className="container-page">
          <Reveal>
            <h2 className="h-section max-w-2xl">{p.comms.title}</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {p.comms.items.map((item, i) => {
              const Icon = COMMS_ICONS[i];
              return (
                <Reveal key={item.title} delay={i * 0.05} className="bg-ink-950 p-7">
                  <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  <h3 className="mt-5 font-semibold tracking-tight text-fg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.desc}</p>
                </Reveal>
              );
            })}
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
