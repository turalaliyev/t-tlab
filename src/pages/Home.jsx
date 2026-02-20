import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiArrowUpRight, HiChevronUp, HiChevronDown } from 'react-icons/hi2';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import NeuralBackground from '../components/NeuralBackground';
import Project1 from '../assets/project1/Project1.png?url';
import Project2 from '../assets/project2/Project2.PNG?url';
import Project3 from '../assets/project3/Main.PNG?url';

/* ── animation variants ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.93 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

/* ── what we build data ─────────────────────────────────── */
const SERVICES = [
  {
    icon: '◈',
    gradient: 'from-[#38bdf8] to-[#22d3ee]',
    title: { en: 'Business Websites', ru: 'Бизнес-сайты', az: 'Biznes saytları' },
    desc: {
      en: 'Fast, beautifully designed sites that represent your brand and convert visitors into clients.',
      ru: 'Быстрые сайты, которые отражают ваш бренд и превращают посетителей в клиентов.',
      az: 'Brendinizi əks etdirən və ziyarətçiləri müştəriyə çevirən sürətli, gözəl saytlar.',
    },
  },
  {
    icon: '⬡',
    gradient: 'from-[#a78bfa] to-[#f472b6]',
    title: { en: 'Web Applications', ru: 'Веб-приложения', az: 'Veb tətbiqlər' },
    desc: {
      en: 'Custom portals, dashboards, booking systems and tools that automate your operations.',
      ru: 'Кастомные порталы, дашборды, системы бронирования для автоматизации операций.',
      az: 'Əməliyyatlarınızı avtomatlaşdıran xüsusi portallar, idarə panelləri, bron sistemləri.',
    },
  },
  {
    icon: '◎',
    gradient: 'from-[#22d3ee] to-[#4ade80]',
    title: { en: 'E‑Commerce Stores', ru: 'Интернет-магазины', az: 'Onlayn mağazalar' },
    desc: {
      en: 'Online stores with smooth checkout, inventory management and integrations to grow sales.',
      ru: 'Интернет-магазины с удобной оплатой, управлением товарами и интеграциями.',
      az: 'Rahat ödəniş, məhsul idarəetməsi və satışı artıran inteqrasiyalarla onlayn mağazalar.',
    },
  },
  {
    icon: '◐',
    gradient: 'from-[#4ade80] to-[#38bdf8]',
    title: { en: 'Landing Pages', ru: 'Лендинги', az: 'Landing səhifələr' },
    desc: {
      en: 'High-impact single pages for campaigns, product launches and lead generation.',
      ru: 'Высококонверсионные страницы для кампаний, запуска продуктов и лидогенерации.',
      az: 'Kampaniyalar, məhsul buraxılışları və müştəri toplama üçün yüksək etkili səhifələr.',
    },
  },
  {
    icon: '⬢',
    gradient: 'from-[#f472b6] to-[#a78bfa]',
    title: { en: 'Brand Experiences', ru: 'Бренд-опыт', az: 'Brend təcrübəsi' },
    desc: {
      en: 'Visual identity, storytelling and interactive experiences that make your brand memorable.',
      ru: 'Визуальная идентичность и интерактивные переживания, делающие ваш бренд незабываемым.',
      az: 'Brendinizi yadda qalan edən vizual kimlik, hekayə anlatma və interaktiv təcrübələr.',
    },
  },
  {
    icon: '◉',
    gradient: 'from-[#38bdf8] to-[#a78bfa]',
    title: { en: 'Content Management', ru: 'Управление контентом', az: 'Məzmun idarəetməsi' },
    desc: {
      en: 'Easy-to-edit systems so your team can update text, images and products without a developer.',
      ru: 'Удобные CMS-решения, чтобы команда могла обновлять контент самостоятельно.',
      az: 'Komandanızın proqramçısız məzmunu asanca yeniləyə bildiyi idarəetmə sistemləri.',
    },
  },
];

const STATS = [
  { value: '3+', label: { en: 'Years building', ru: 'Лет опыта', az: 'İllik təcrübə' } },
  { value: '15+', label: { en: 'Projects shipped', ru: 'Запущено проектов', az: 'Tamamlanan layihə' } },
  { value: '100%', label: { en: 'Client satisfaction', ru: 'Довольных клиентов', az: 'Müştəri məmnuniyyəti' } },
  { value: '24h', label: { en: 'Response time', ru: 'Время ответа', az: 'Cavab müddəti' } },
];

/* -- Section navigator ------------------------------------------------- */
function useSectionIndex(containerRef) {
  const [index, setIndex] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const sections = [...container.querySelectorAll('section[data-snap]')];
    setTotal(sections.length);

    const update = () => {
      let best = 0;
      let bestDist = Infinity;
      sections.forEach((el, i) => {
        const dist = Math.abs(el.getBoundingClientRect().top);
        if (dist < bestDist) { bestDist = dist; best = i; }
      });
      setIndex(best);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [containerRef]);

  return [index, total];
}

function SectionNavigator({ containerRef }) {
  const [index, total] = useSectionIndex(containerRef);
  const isScrolling = useRef(false);

  const goTo = (targetIndex) => {
    if (isScrolling.current) return;
    if (targetIndex < 0 || targetIndex >= total) return;
    const container = containerRef.current;
    if (!container) return;
    const sections = [...container.querySelectorAll('section[data-snap]')];
    const target = sections[targetIndex];
    if (!target) return;
    isScrolling.current = true;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => { isScrolling.current = false; }, 850);
  };

  const canUp = index > 0;
  const canDown = total > 0 && index < total - 1;

  const btnBase = 'w-9 h-9 flex items-center justify-center rounded border transition-all duration-200';
  const btnActive = 'border-brand-border bg-brand-card/80 backdrop-blur-sm text-slate-400 hover:border-neon-blue/50 hover:text-neon-blue hover:bg-brand-surface cursor-pointer';
  const btnDisabled = 'border-brand-border/25 bg-brand-card/20 text-slate-700 cursor-default';

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 items-center">
      <button
        onClick={() => goTo(index - 1)}
        disabled={!canUp}
        aria-label="Scroll to previous section"
        className={`${btnBase} ${canUp ? btnActive : btnDisabled}`}
      >
        <HiChevronUp className="h-5 w-5" />
      </button>

      <div className="flex flex-col items-center gap-1.5 py-1">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to section ${i + 1}`}
            className="w-1.5 transition-all duration-300"
            style={{
              height: i === index ? '20px' : '6px',
              borderRadius: '2px',
              background: i === index
                ? 'linear-gradient(180deg, #38bdf8, #a78bfa)'
                : 'rgba(56,189,248,0.25)',
            }}
          />
        ))}
      </div>

      <button
        onClick={() => goTo(index + 1)}
        disabled={!canDown}
        aria-label="Scroll to next section"
        className={`${btnBase} ${canDown ? btnActive : btnDisabled}`}
      >
        <HiChevronDown className="h-5 w-5" />
      </button>
    </div>
  );
}

/* ── component ─────────────────────────────────────────── */
export default function Home() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const loc = (obj) => (obj && obj[language]) || obj?.en || '';
  const pageRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Danilov',
      category: { en: 'E‑Commerce', ru: 'Интернет-магазин', az: 'E-ticarət' },
      tagline: { en: 'Premium footwear store', ru: 'Магазин премиальной обуви', az: 'Premium ayaqqabı mağazası' },
      image: Project3,
      url: 'https://danilov.az',
      accent: '#38bdf8',
    },
    {
      id: 2,
      title: 'RE:AZ',
      category: { en: 'Digital Agency', ru: 'Агентство', az: 'Rəqəmsal agentlik' },
      tagline: { en: 'Modern agency website', ru: 'Сайт цифрового агентства', az: 'Müasir agentlik saytı' },
      image: Project1,
      url: 'https://design-az.netlify.app/',
      accent: '#a78bfa',
    },
    {
      id: 3,
      title: 'Fresh Garden Quba',
      category: { en: 'Resort & Booking', ru: 'Курорт', az: 'Kurort' },
      tagline: { en: 'Resort booking & landing', ru: 'Бронирование курорта', az: 'Kurort bron sistemi' },
      image: Project2,
      url: 'https://freshgardenquba.az/',
      accent: '#4ade80',
    },
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-transparent text-slate-100 overflow-x-hidden">

      {/* Floating section navigator */}
      <SectionNavigator containerRef={pageRef} />

      {/* ══════════════ HERO ══════════════ */}
      <section data-snap className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <NeuralBackground />
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
        {/* radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(56,189,248,0.4) 0%, transparent 70%)' }} />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-28 pb-20 text-center">
          {/* badge */}
          <motion.div
            variants={fadeIn} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-neon-blue/30 bg-neon-blue/5 text-neon-blue text-xs font-mono tracking-widest uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded bg-neon-blue animate-pulse" />
            {t.home.q4Banner}
          </motion.div>

          {/* headline */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight mb-6"
          >
            <span className="text-white">{t.home.heroTitle} </span>
            <span className="text-gradient-blue italic">{t.home.heroTitleHighlight}</span>
            <span className="text-white"> {t.home.heroTitleEnd}</span>
          </motion.h1>

          {/* sub */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t.home.heroDescription}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #38bdf8, #a78bfa)' }}
            >
              {t.home.getStarted}
              <HiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded border border-white/15 text-slate-300 font-medium text-sm hover:border-neon-blue/50 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              {t.home.viewAllProjects}
              <HiArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* scroll hint */}
          <motion.div variants={fadeIn} initial="hidden" animate="show" custom={5}
            className="mt-16 flex justify-center">
            <div className="flex flex-col items-center gap-2 text-slate-600">
              <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
              <motion.div
                className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent"
                animate={{ scaleY: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section data-snap className="border-y border-brand-border">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              className={`text-center py-4 ${i < 3 ? 'md:border-r border-brand-border' : ''}`}
            >
              <p className="text-3xl sm:text-4xl font-serif font-semibold text-gradient-blue mb-1">{s.value}</p>
              <p className="text-sm text-slate-500">{loc(s.label)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════ PROJECTS ══════════════ */}
      <section data-snap className="w-full py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
            <p className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-3">
              {t.home.projectsSubline}
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white">
              {t.home.projectsMadeWith}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
              >
                <motion.a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded overflow-hidden glass glass-hover transition-all duration-300"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* hover overlay */}
                    <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(to top, rgba(6,10,18,0.85), transparent)' }}>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
                        Visit site <HiArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    {/* accent top-border on hover */}
                    <div className="absolute inset-x-0 top-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }} />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-mono uppercase tracking-widest block mb-2" style={{ color: p.accent }}>
                      {loc(p.category)}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-1">{p.title}</h3>
                    <p className="text-sm text-slate-500">{loc(p.tagline)}</p>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mt-10 text-center">
            <Link to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-neon-blue transition-colors font-medium">
              {t.home.viewAllProjects} <HiArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ WHAT WE BUILD ══════════════ */}
      <section data-snap className="w-full py-24 px-6 border-y border-brand-border">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <p className="text-xs font-mono text-neon-purple uppercase tracking-widest mb-3">
                {t.home.coreCompetencies}
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white">{t.home.techStack}</h2>
            </div>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">{t.home.engineeringDescription}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                custom={i % 3}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group p-6 rounded glass glass-hover cursor-default h-full flex flex-col"
              >
                <div className={`text-3xl mb-4 bg-gradient-to-r ${svc.gradient} bg-clip-text`}
                  style={{ WebkitTextFillColor: 'transparent' }}>
                  {svc.icon}
                </div>
                <h3 className="font-semibold text-white mb-2 text-lg">{loc(svc.title)}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{loc(svc.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ HOW WE WORK ══════════════ */}
      <section data-snap className="w-full py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14">
            <p className="text-xs font-mono text-neon-cyan uppercase tracking-widest mb-3">
              {t.home.engineeringExcellence}
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white">{t.home.techStack}</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01', color: '#38bdf8',
                title: { en: 'Understand & Plan', ru: 'Понять и спланировать', az: 'Anlamaq & Planlamaq' },
                desc: { en: 'We learn your goals, audience and context before writing a single line of code.', ru: 'Изучаем ваши цели, аудиторию и контекст прежде чем писать код.', az: 'Bir sətir kod yazmadan əvvəl məqsədlərinizi, auditoriyani və konteksti öyrənirik.' },
              },
              {
                step: '02', color: '#a78bfa',
                title: { en: 'Design & Build', ru: 'Разработать и создать', az: 'Dizayn & İnşa' },
                desc: { en: 'We design and build in the open — you see real progress at every step.', ru: 'Разрабатываем открыто — вы видите реальный прогресс на каждом этапе.', az: 'Hər addımda real irəliləyişi görürsünüz — açıq şəkildə dizayn edir və qururuq.' },
              },
              {
                step: '03', color: '#4ade80',
                title: { en: 'Launch & Support', ru: 'Запустить и поддержать', az: 'Buraxılış & Dəstək' },
                desc: { en: 'We handle the launch and stay available for updates, fixes and improvements.', ru: 'Берём на себя запуск и остаёмся на связи для обновлений и улучшений.', az: 'Buraxılışı biz həll edirik və yeniliklər üçün əlçatan qalırıq.' },
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="relative p-7 rounded border border-brand-border bg-brand-card/20 backdrop-blur-sm overflow-hidden"
              >
                <span className="absolute -top-4 -right-2 font-mono font-bold text-8xl select-none"
                  style={{ color: item.color, opacity: 0.04 }}>
                  {item.step}
                </span>
                <div className="w-10 h-10 rounded flex items-center justify-center mb-5 font-mono text-xs font-bold"
                  style={{ background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}30` }}>
                  {item.step}
                </div>
                <h3 className="font-semibold text-white text-lg mb-3">{loc(item.title)}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{loc(item.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section data-snap className="w-full py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-15 rounded pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(167,139,250,0.7) 0%, transparent 70%)' }} />
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-4xl sm:text-6xl font-semibold text-white mb-5 leading-tight">
            {t.home.readyToUpgrade}
          </h2>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed">{t.home.upgradeDescription}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 rounded text-white font-semibold transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #38bdf8, #a78bfa)' }}
              >
                {t.home.contactLab}
                <HiArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <a href="mailto:tural.aliyev555@gmail.com"
              className="text-sm text-slate-500 hover:text-neon-blue transition-colors underline underline-offset-4">
              tural.aliyev555@gmail.com
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
