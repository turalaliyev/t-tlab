import { motion } from 'framer-motion';
import { EASE } from './ui';

/* Neutral illustration for the hero: a code editor and a phone running a generic app.
   Built from markup, so it contains no client work and scales crisply. */

const K = ({ children }) => <span className="text-[#c4b5fd]">{children}</span>; // keyword
const F = ({ children }) => <span className="text-[#93b4ff]">{children}</span>; // function
const S = ({ children }) => <span className="text-accent-mint">{children}</span>; // string
const C = ({ children }) => <span className="text-fg-subtle">{children}</span>; // comment

const CODE = [
  <C key="c">{'// orders.service.ts'}</C>,
  <><K>export async function</K> <F>createOrder</F>(input) {'{'}</>,
  <>{'  '}<K>const</K> user = <K>await</K> auth.<F>require</F>();</>,
  <>{'  '}<K>const</K> order = <K>await</K> db.order.<F>create</F>({'{'}</>,
  <>{'    '}data: {'{'} ...input, userId: user.id {'}'},</>,
  <>{'  '}{'}'});</>,
  <>{'  '}<K>await</K> push.<F>send</F>(user, <S>'Order confirmed'</S>);</>,
  <>{'  '}<K>return</K> order;</>,
  <>{'}'}</>,
];

const BARS = [38, 62, 46, 78, 54, 90, 70];

const Editor = () => (
  <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl shadow-black/50">
    <div className="flex items-center gap-3 border-b border-line bg-ink-850 px-4 py-3">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      <div className="flex gap-1 font-mono text-[11px]">
        <span className="rounded-md bg-white/[0.06] px-2.5 py-1 text-fg-muted">orders.service.ts</span>
        <span className="px-2.5 py-1 text-fg-subtle">App.tsx</span>
      </div>
    </div>
    <pre className="overflow-hidden px-1 py-5 font-mono text-[11.5px] leading-[1.9] text-fg-muted sm:text-[12.5px]">
      {CODE.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.5 + i * 0.07 }}
          className="flex"
        >
          <span className="w-9 shrink-0 select-none pr-4 text-right text-fg-subtle/50">{i + 1}</span>
          <span className="whitespace-pre">{line}</span>
        </motion.div>
      ))}
      <div className="flex">
        <span className="w-9 shrink-0 select-none pr-4 text-right text-fg-subtle/50">{CODE.length + 1}</span>
        <span className="h-[1.1em] w-[7px] translate-y-[0.35em] bg-accent motion-safe:animate-pulse" />
      </div>
    </pre>
  </div>
);

const Phone = () => (
  <div className="rounded-[1.75rem] border border-white/15 bg-ink-950 p-1.5 shadow-2xl shadow-black/60">
    <div className="relative flex aspect-[9/19] flex-col overflow-hidden rounded-[1.4rem] bg-ink-900 px-3 pb-2 pt-6">
      <span className="absolute left-1/2 top-2 h-1.5 w-1/3 -translate-x-1/2 rounded-full bg-ink-950" />

      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="h-1.5 w-8 rounded-full bg-white/20" />
          <div className="h-2.5 w-14 rounded-full bg-white/60" />
        </div>
        <div className="h-5 w-5 rounded-full bg-accent/30" />
      </div>

      {/* chart card */}
      <div className="mt-3 rounded-xl border border-line bg-ink-850 p-2.5">
        <div className="h-1.5 w-10 rounded-full bg-white/20" />
        <div className="mt-1 h-2.5 w-12 rounded-full bg-white/70" />
        <div className="mt-3 flex h-12 items-end gap-1">
          {BARS.map((h, i) => (
            <motion.span
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.9 + i * 0.05 }}
              style={{ height: `${h}%`, transformOrigin: 'bottom' }}
              className={`flex-1 rounded-sm ${i === 5 ? 'bg-accent' : 'bg-white/15'}`}
            />
          ))}
        </div>
      </div>

      {/* list */}
      <div className="mt-3 space-y-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg bg-white/[0.03] p-1.5">
            <div className={`h-5 w-5 shrink-0 rounded-md ${i === 0 ? 'bg-accent-mint/30' : 'bg-white/10'}`} />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 w-3/4 rounded-full bg-white/40" />
              <div className="h-1.5 w-1/2 rounded-full bg-white/15" />
            </div>
          </div>
        ))}
      </div>

      {/* tab bar */}
      <div className="mt-auto flex justify-around border-t border-line pt-2">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-accent' : 'bg-white/20'}`} />
        ))}
      </div>
    </div>
  </div>
);

export default function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-[580px] lg:mr-6" aria-hidden="true">
      <div className="absolute -inset-8 rounded-[2rem] bg-accent-strong/20 blur-3xl" />
      <div className="relative">
        <Editor />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
        className="absolute -bottom-14 -right-3 w-[27%] sm:-right-8"
      >
        <Phone />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 1.3 }}
        className="absolute -bottom-5 left-6 hidden items-center gap-2.5 rounded-xl border border-line bg-ink-900/90 px-4 py-3 font-mono text-xs text-fg-muted shadow-2xl shadow-black/40 backdrop-blur sm:flex"
      >
        <span className="h-2 w-2 rounded-full bg-accent-mint" />
        build passed · deployed
      </motion.div>
    </div>
  );
}
