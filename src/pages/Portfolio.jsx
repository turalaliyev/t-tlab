import { HiArrowUpRight } from 'react-icons/hi2';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import Project1 from '../assets/project1/Project1.png?url';
import Project2 from '../assets/project2/Project2.PNG?url';
import Project3 from '../assets/project3/Main.PNG?url';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const projects = [
    {
      id: 1,
      title: 'Danilov',
      descriptions: {
        en: 'A high-performance ecommerce experience for a premium shoes brand, optimized for fast browsing and conversion.',
        ru: 'Высокопроизводительный интернет‑магазин для премиального бренда обуви с быстрым каталогом и сфокусированной конверсией.',
        az: 'Premium ayaqqabı brendi üçün sürətli kataloq və satışa yönəlmiş müasir e-ticarət təcrübəsi.',
      },
      technologies: ['REACT', 'SANITY', 'TAILWIND'],
      image: Project3,
      url: 'https://danilov.az',
    },
    {
      id: 2,
      title: 'RE:AZ',
      descriptions: {
        en: 'A modern digital agency website for RE:AZ with smooth animations, project highlights, and a clear services narrative.',
        ru: 'Современный сайт цифрового агентства RE:AZ с плавными анимациями, кейсами и понятной презентацией услуг.',
        az: 'RE:AZ üçün layihələri, xidmətləri və hekayəni vurğulayan animasiyalı müasir rəqəmsal agentlik saytı.',
      },
      technologies: ['NEXT.JS', 'TYPESCRIPT', 'FRAMER'],
      image: Project1,
      url: 'https://design-az.netlify.app/',
    },
    {
      id: 3,
      title: 'Fresh Garden Quba',
      descriptions: {
        en: 'A visually rich landing page for the Fresh Garden Quba resort, emphasizing atmosphere, photography, and easy booking.',
        ru: 'Насыщенный визуалами лендинг для курорта Fresh Garden Quba с акцентом на атмосферу, фотографии и удобное бронирование.',
        az: 'Fresh Garden Quba kurortu üçün atmosferi, fotoları və rahat bron sistemini önə çıxaran vizual cəhətdən zəngin landinq.',
      },
      technologies: ['VUE', 'SHOPIFY', 'GRAPHQL'],
      image: Project2,
      url: 'https://freshgardenquba.az/',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
          {t.portfolio.title}{' '}
          <span className="text-accent-primary">{t.portfolio.titleHighlight}</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          {t.portfolio.description}
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-accent-primary/50 transition-all cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <HiArrowUpRight className="h-6 w-6 text-accent-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {(project.descriptions && project.descriptions[language]) ||
                    (project.descriptions && project.descriptions.en)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs text-gray-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto bg-dark-card border border-dark-border rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">{t.portfolio.readyToBuild}</h2>
        <p className="text-gray-400 mb-6">
          {t.portfolio.readyToBuildDesc}
        </p>
        <Link to={'/contact'} className="px-6 py-3 bg-accent-primary text-dark-bg rounded-lg font-medium hover:bg-accent-light transition-colors">
          {t.portfolio.contactLab}
        </Link>
      </section>
    </div>
  );
};

export default Portfolio;
