import { motion } from 'framer-motion';
import { HiOutlineCodeBracket, HiOutlineBolt, HiOutlineShieldCheck, HiOutlineRocketLaunch } from 'react-icons/hi2';
import { useT } from '../contexts/LanguageContext';
import { Reveal, EASE } from '../components/ui';
import { CtaBlock } from '../components/Sections';
import { STACK_GROUPS } from '../data/site';

const PRINCIPLE_ICONS = [HiOutlineCodeBracket, HiOutlineBolt, HiOutlineShieldCheck, HiOutlineRocketLaunch];

export default function TechnologyStack() {
  const t = useT();

  return (
    <>
      <section className="relative pt-36 pb-16 sm:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="container-page relative"
        >
          <p className="eyebrow">{t.stack.eyebrow}</p>
          <h1 className="h-display mt-5 max-w-4xl text-5xl sm:text-7xl">{t.stack.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">{t.stack.description}</p>
        </motion.div>
      </section>

      <section className="pb-24">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.stack.groups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.06} className="card flex flex-col p-8">
              <p className="font-mono text-xs text-fg-subtle">{String(i + 1).padStart(2, '0')}</p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-fg">{group.title}</h2>
              <p className="mt-2 leading-relaxed text-fg-muted">{group.desc}</p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {STACK_GROUPS[i].map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-3 py-1.5 text-sm text-fg-muted"
                  >
                    <Icon className="h-4 w-4 text-fg" aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ink-900/40 py-24">
        <div className="container-page">
          <Reveal>
            <h2 className="h-section max-w-2xl">{t.stack.principlesTitle}</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {t.stack.principles.map((p, i) => {
              const Icon = PRINCIPLE_ICONS[i];
              return (
                <Reveal key={p.title} delay={i * 0.06} className="bg-ink-950 p-8">
                  <Icon className="h-7 w-7 text-accent" aria-hidden="true" />
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-fg">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-fg-muted">{p.desc}</p>
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
