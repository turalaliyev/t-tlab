import { motion } from 'framer-motion';
import { FaReact, FaVuejs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiSupabase, SiFirebase, SiGraphql, SiSentry } from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { HiBolt } from 'react-icons/hi2';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import NeuralBackground from '../components/NeuralBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

/* ── small section heading ── */
const SectionLabel = ({ label }) => (
  <span className="inline-flex items-center gap-2 text-xs font-mono text-neon-blue uppercase tracking-widest">
    <span className="w-1.5 h-1.5 rounded bg-neon-blue" />
    {label}
  </span>
);

export default function TechnologyStack() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-brand-bg text-slate-100 overflow-x-hidden pt-24 pb-20 px-6">
      <NeuralBackground />
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          className="mb-16"
        >
          <SectionLabel label={t.stack.digitalLab} />
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mt-4 mb-4">
            {t.stack.title}{' '}
            <span className="text-gradient-blue italic">{t.stack.titleHighlight}</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">{t.stack.description}</p>
        </motion.div>

        {/* Core Frontend */}
        <motion.section
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mb-8"
        >
          <div className="rounded border border-brand-border bg-brand-card/50 p-8">
            <SectionLabel label={t.stack.coreFrontend} />
            <h2 className="font-serif text-3xl font-semibold text-white mt-3 mb-2">{t.stack.reactiveUI}</h2>
            <p className="text-slate-500 mb-6 text-sm">{t.stack.reactiveUIDesc}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: FaReact, name: 'React.js', label: t.stack.componentBased, color: '#38bdf8' },
                { icon: FaVuejs, name: 'Vue.js', label: t.stack.reactiveSync, color: '#4ade80' },
                { icon: SiTailwindcss, name: 'Tailwind', label: t.stack.utilityFirst, color: '#22d3ee' },
                { icon: HiBolt, name: 'Ant Design', label: t.stack.enterpriseUI, color: '#a78bfa' },
              ].map(({ icon: Icon, name, label, color }, i) => (
                <motion.div key={name} variants={scaleIn} initial="hidden" whileInView="show"
                  viewport={{ once: true }} custom={i}
                  whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
                  className="rounded border border-brand-border bg-brand-surface/50 p-4 text-center glass-hover">
                  <Icon className="h-8 w-8 mx-auto mb-2" style={{ color }} />
                  <p className="text-white font-medium text-sm mb-1">{name}</p>
                  <p className="text-xs text-slate-600 font-mono">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Server + Content Layer */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Server Runtime */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}>
            <div className="rounded border border-brand-border bg-brand-card/50 p-8 h-full">
              <SectionLabel label={t.stack.serverRuntime} />
              <h2 className="font-serif text-3xl font-semibold text-white mt-3 mb-2">{t.stack.engineData}</h2>
              <p className="text-slate-500 mb-6 text-sm">{t.stack.engineDataDesc}</p>
              <div className="space-y-3">
                {[
                  { icon: SiNodedotjs, name: 'Node.js', badge: 'v20_LTS', color: '#4ade80' },
                  { icon: SiSupabase, name: 'Supabase', badge: 'POSTGRES', color: '#38bdf8' },
                  { icon: SiFirebase, name: 'Firebase', badge: 'SERVERLESS', color: '#f472b6' },
                ].map(({ icon: Icon, name, badge, color }) => (
                  <div key={name}
                    className="flex items-center justify-between rounded border border-brand-border bg-brand-surface/60 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5" style={{ color }} />
                      <span className="text-slate-200 font-medium text-sm">{name}</span>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded border border-neon-blue/30 text-neon-blue">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Layer */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}>
            <div className="rounded border border-brand-border bg-brand-card/50 p-8 h-full">
              <SectionLabel label={t.stack.contentLayer} />
              <h2 className="font-serif text-3xl font-semibold text-white mt-3 mb-2">Sanity.io</h2>
              <p className="text-slate-500 text-sm">{t.stack.contentLayerDesc}</p>
            </div>
          </motion.div>
        </div>

        {/* Deployment */}
        <motion.section
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mb-8"
        >
          <div className="rounded border border-brand-border bg-brand-card/50 p-8">
            <SectionLabel label={t.stack.deployment} />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-3">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-white mb-2">Vercel & AWS</h2>
                <p className="text-slate-500 text-sm max-w-lg">{t.stack.deploymentDesc}</p>
              </div>
              <div className="flex gap-4">
                <FaAws className="h-10 w-10 text-neon-blue/70" />
                <div className="w-px h-10 bg-brand-border" />
                <SiNextdotjs className="h-10 w-10 text-slate-500" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* System Components */}
        <motion.section
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl font-semibold text-white mb-1">{t.stack.systemComponents}</h2>
          <p className="text-slate-500 text-sm mb-8">{t.stack.systemComponentsDesc}</p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: SiNextdotjs, name: 'Next.js 14', desc: t.stack.nextjsDesc, color: '#e2e8f0' },
              { icon: SiGraphql, name: 'GraphQL', desc: t.stack.graphqlDesc, color: '#e10098' },
              { icon: HiBolt, name: 'Auth.js', desc: t.stack.authjsDesc, color: '#a78bfa' },
              { icon: SiSentry, name: 'Sentry', desc: t.stack.sentryDesc, color: '#f472b6' },
            ].map(({ icon: Icon, name, desc, color }, i) => (
              <motion.div
                key={name}
                variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
                className="flex gap-4 p-6 rounded border border-brand-border bg-brand-card/40 glass-hover"
              >
                <div className="shrink-0 w-11 h-11 rounded border border-brand-border flex items-center justify-center"
                  style={{ background: `${color}15` }}>
                  <Icon className="h-6 w-6" style={{ color }} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
