import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiGlobeAlt } from 'react-icons/hi2';
import { HiMail } from 'react-icons/hi';
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import NeuralBackground from '../components/NeuralBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
};

const SOCIALS = [
  { href: 'mailto:tural.aliyev555@gmail.com', icon: HiMail, label: 'Email' },
  { href: 'https://wa.me/994508747905', icon: FaWhatsapp, label: 'WhatsApp' },
  { href: 'https://t.me/tural_1995_aliyev', icon: FaTelegramPlane, label: 'Telegram' },
  { href: 'https://www.instagram.com/', icon: FaInstagram, label: 'Instagram' },
];

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [formData, setFormData] = useState({
    name: '', email: '', projectType: '', details: '', requireNDA: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project inquiry from ${formData.name || 'Website Contact'}`);
    const body = encodeURIComponent([
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Project type: ${formData.projectType}`,
      '',
      'Project details:',
      formData.details,
      '',
      `NDA required: ${formData.requireNDA ? 'Yes' : 'No'}`,
    ].join('\n'));
    window.location.href = `mailto:tural.aliyev555@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputClass = `w-full px-4 py-3 rounded bg-brand-surface border border-brand-border text-slate-200 placeholder-slate-600
    focus:outline-none focus:border-neon-blue/50 transition-colors`;

  return (
    <div className="min-h-screen bg-brand-bg text-slate-100 overflow-x-hidden pt-24 pb-20 px-6">
      <NeuralBackground />
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          className="mb-14 text-center"
        >
          <p className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-4">
            {t.contact.connect}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
            {t.contact.title}
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">{t.contact.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left – contact info */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="space-y-8"
          >
            {/* Email */}
            <div>
              <p className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-2">{t.contact.email}</p>
              <a href="mailto:tural.aliyev555@gmail.com"
                className="text-slate-200 hover:text-neon-blue transition-colors">
                tural.aliyev555@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <p className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-2">{t.contact.phone}</p>
              <a href="tel:+994508747905" className="text-slate-200 hover:text-neon-blue transition-colors">
                +994 50 874 79 05
              </a>
            </div>

            {/* Location */}
            <div>
              <p className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-2">{t.contact.location}</p>
              <div className="flex items-center gap-2 text-white">
                <HiGlobeAlt className="h-5 w-5 text-neon-blue/60" />
                <span>{t.contact.remoteGlobal}</span>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-3">{t.contact.socials}</p>
              <div className="flex gap-3">
                {SOCIALS.map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.12, y: -2 }}
                    transition={{ duration: 0.18 }}
                    className="w-11 h-11 rounded border border-brand-border bg-brand-card flex items-center justify-center text-slate-400 hover:border-neon-blue/50 hover:text-neon-blue transition-colors duration-200"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative card */}
            <div className="rounded border border-brand-border bg-brand-card/40 p-6 mt-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                {t.contact.description}
              </p>
              <div className="mt-4 h-px w-full"
                style={{ background: 'linear-gradient(90deg, #38bdf8, #a78bfa, transparent)' }} />
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={2}
          >
            <div className="rounded border border-brand-border bg-brand-card/60 backdrop-blur-sm p-8">
              <h2 className="font-serif text-2xl font-semibold text-white mb-7">
                {t.contact.formTitle}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">
                      {t.contact.fullName}
                    </label>
                    <input type="text" id="name" name="name" value={formData.name}
                      onChange={handleChange} placeholder="John Doe"
                      className={inputClass} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">
                      {t.contact.emailAddress}
                    </label>
                    <input type="email" id="email" name="email" value={formData.email}
                      onChange={handleChange} placeholder="john@example.com"
                      className={inputClass} required />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">
                    {t.contact.projectType}
                  </label>
                  <select id="projectType" name="projectType" value={formData.projectType}
                    onChange={handleChange}
                    className={inputClass} required>
                    <option value="" className="bg-brand-bg">{t.contact.selectOption}</option>
                    <option value="ecommerce" className="bg-brand-bg">{t.contact.ecommerce}</option>
                    <option value="saas" className="bg-brand-bg">{t.contact.saas}</option>
                    <option value="web3" className="bg-brand-bg">{t.contact.web3}</option>
                    <option value="design" className="bg-brand-bg">{t.contact.designSystem}</option>
                    <option value="other" className="bg-brand-bg">{t.contact.other}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="details" className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">
                    {t.contact.projectDetails}
                  </label>
                  <textarea id="details" name="details" value={formData.details}
                    onChange={handleChange} placeholder={t.contact.projectDetailsPlaceholder}
                    rows={5} className={`${inputClass} resize-none`} required />
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="requireNDA" name="requireNDA"
                    checked={formData.requireNDA} onChange={handleChange}
                    className="w-4 h-4 rounded border-brand-border bg-brand-surface accent-neon-blue" />
                  <label htmlFor="requireNDA" className="text-sm text-slate-400">
                    {t.contact.requireNDA}
                  </label>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded text-white font-semibold text-sm transition-all"
                  style={{ background: 'linear-gradient(135deg, #0369a1, #5b21b6)' }}
                >
                  {t.contact.sendMessage}
                  <HiArrowRight className="h-5 w-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
