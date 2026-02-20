import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowUpRight, HiArrowRight } from 'react-icons/hi2';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import Project1 from '../assets/project1/Project1.png?url';
import Project2 from '../assets/project2/Project2.PNG?url';
import Project3 from '../assets/project3/Main.PNG?url';
import NeuralBackground from '../components/NeuralBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

export default function Portfolio() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const projects = [
    {
      id: 1,
      title: 'Danilov',
      category: { en: 'E‑Commerce', ru: 'Интернет-магазин', az: 'E-ticarət' },
      accent: '#38bdf8',
      descriptions: {
        en: 'A high-performance e-commerce experience for a premium shoes brand, optimized for fast browsing and conversion.',
        ru: 'Высокопроизводительный интернет‑магазин для премиального бренда обуви с быстрым каталогом и сфокусированной конверсией.',
        az: 'Premium ayaqqabı brendi üçün sürətli kataloq və satışa yönəlmiş müasir e-ticarət təcrübəsi.',
      },
      technologies: ['React', 'Sanity', 'Tailwind'],
      image: Project3,
      url: 'https://danilov.az',
    },
    {
      id: 2,
      title: 'RE:AZ',
      category: { en: 'Digital Agency', ru: 'Агентство', az: 'Rəqəmsal agentlik' },
      accent: '#a78bfa',
      descriptions: {
        en: 'A modern digital agency website for RE:AZ with smooth animations, project highlights, and a clear services narrative.',
        ru: 'Современный сайт цифрового агентства RE:AZ с плавными анимациями, кейсами и понятной презентацией услуг.',
        az: 'RE:AZ üçün layihələri, xidmətləri və hekayəni vurğulayan animasiyalı müasir rəqəmsal agentlik saytı.',
      },
      technologies: ['Next.js', 'TypeScript', 'Framer Motion'],
      image: Project1,
      url: 'https://design-az.netlify.app/',
    },
    {
      id: 3,
      title: 'Fresh Garden Quba',
      category: { en: 'Resort & Booking', ru: 'Курорт', az: 'Kurort' },
      accent: '#4ade80',
      descriptions: {
        en: 'A visually rich landing page for the Fresh Garden Quba resort, emphasizing atmosphere, photography, and easy booking.',
        ru: 'Насыщенный визуалами лендинг для курорта Fresh Garden Quba с акцентом на атмосферу, фотографии и удобное бронирование.',
        az: 'Fresh Garden Quba kurortu üçün atmosferi, fotoları və rahat bron sistemini önə çıxaran vizual cəhətdən zəngin landinq.',
      },
      technologies: ['Vue', 'Shopify', 'GraphQL'],
      image: Project2,
      url: 'https://freshgardenquba.az/',
    },
  ];

  const loc = (obj) => (obj && obj[language]) || obj?.en || '';

  return (
    <div className="min-h-screen bg-brand-bg text-slate-100 overflow-x-hidden pt-24 pb-20 px-6">
      <NeuralBackground />
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          className="mb-16 text-center"
        >
          <p className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-4">
            {t.portfolio.labJournal}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-5">
            {t.portfolio.title}{' '}
            <span className="text-gradient-blue italic">{t.portfolio.titleHighlight}</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t.portfolio.description}
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={scaleIn} initial="hidden" animate="show" custom={i}
            >
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded overflow-hidden glass glass-hover transition-all duration-300"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* top accent line on hover */}
                  <div className="absolute inset-x-0 top-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }} />
                  {/* hover overlay */}
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(6,10,18,0.85), transparent)' }}>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
                      Visit site <HiArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-mono uppercase tracking-widest block mb-2"
                    style={{ color: project.accent }}>
                    {loc(project.category)}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                    {loc(project.descriptions)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech}
                        className="text-xs font-mono px-2 py-0.5 rounded border border-brand-border text-slate-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="relative rounded border border-brand-border bg-brand-card/40 p-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(56,189,248,0.08), transparent 60%)' }} />
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-3">
            {t.portfolio.readyToBuild}
          </h2>
          <p className="text-slate-400 mb-7 max-w-xl mx-auto">{t.portfolio.readyToBuildDesc}</p>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="inline-block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded text-white font-semibold text-sm"
              style={{ background: 'linear-gradient(135deg, #38bdf8, #a78bfa)' }}
            >
              {t.portfolio.contactLab}
              <HiArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
