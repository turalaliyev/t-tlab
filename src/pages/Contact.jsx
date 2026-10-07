import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiOutlineEnvelope, HiOutlinePhone, HiOutlineGlobeEuropeAfrica } from 'react-icons/hi2';
import { useT } from '../contexts/LanguageContext';
import { EASE, LiveDot } from '../components/ui';
import Select from '../components/Select';
import { CONTACT, SOCIALS } from '../data/site';

const TYPE_KEYS = ['webapp', 'mobile', 'website', 'ecommerce', 'design', 'landing', 'other'];

export default function Contact() {
  const t = useT();
  const c = t.contact;

  const [form, setForm] = useState({
    name: '', email: '', projectType: '', budget: '', details: '', requireNDA: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project inquiry from ${form.name || 'Website Contact'}`);
    const body = encodeURIComponent([
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project type: ${c.types[form.projectType] || form.projectType}`,
      `Budget: ${form.budget || '-'}`,
      '',
      'Project details:',
      form.details,
      '',
      `NDA required: ${form.requireNDA ? 'Yes' : 'No'}`,
    ].join('\n'));
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const channels = [
    { icon: HiOutlineEnvelope, label: c.email, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: HiOutlinePhone, label: c.phone, value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: HiOutlinePhone, label: c.phone, value: CONTACT.phone2, href: CONTACT.phone2Href },
    { icon: HiOutlineGlobeEuropeAfrica, label: c.location, value: c.locationValue },
  ];

  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="container-page relative grid gap-14 lg:grid-cols-12">
        {/* Left: intro + channels */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="lg:col-span-5"
        >
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="h-display mt-5 text-5xl sm:text-6xl">{c.title}</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-fg-muted">{c.description}</p>

          <ul className="mt-12 space-y-6">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={value} className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-white/[0.03] text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-fg-subtle">{label}</p>
                  {href ? (
                    <a href={href} className="mt-0.5 block break-all text-fg hover:text-accent transition-colors">{value}</a>
                  ) : (
                    <p className="mt-0.5 text-fg">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex gap-2">
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-fg-muted hover:border-white/30 hover:text-fg transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="mt-12 border-t border-line pt-10">
            <p className="flex items-center gap-2.5 font-medium text-fg">
              <LiveDot />
              {c.nextTitle}
            </p>
            <ol className="mt-6 space-y-4">
              {c.next.map((step, i) => (
                <li key={step} className="flex gap-4 text-fg-muted">
                  <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="card p-6 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-fg">{c.formTitle}</h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label">{c.fullName}</label>
                  <input id="name" name="name" type="text" autoComplete="name" required
                    value={form.name} onChange={handleChange} className="field" />
                </div>
                <div>
                  <label htmlFor="email" className="label">{c.emailAddress}</label>
                  <input id="email" name="email" type="email" autoComplete="email" required
                    value={form.email} onChange={handleChange} className="field" />
                </div>
              </div>

              <fieldset>
                <legend className="label">{c.projectType}</legend>
                <div className="flex flex-wrap gap-2">
                  {TYPE_KEYS.map((key) => {
                    const checked = form.projectType === key;
                    return (
                      <label
                        key={key}
                        className={`cursor-pointer rounded-full border px-4 py-2.5 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent ${
                          checked ? 'border-fg bg-fg text-ink-950' : 'border-ink-700 text-fg-muted hover:border-white/30 hover:text-fg'
                        }`}
                      >
                        <input type="radio" name="projectType" value={key} checked={checked}
                          onChange={handleChange} required className="sr-only" />
                        {c.types[key]}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div>
                <label id="budget-label" htmlFor="budget" className="label">
                  {c.budget} <span className="text-fg-subtle">({c.optional})</span>
                </label>
                <Select
                  id="budget"
                  labelledBy="budget-label"
                  value={form.budget}
                  onChange={(budget) => setForm((prev) => ({ ...prev, budget }))}
                  options={c.budgets.map((b) => ({ value: b, label: b }))}
                  placeholder={c.budgetPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="details" className="label">{c.projectDetails}</label>
                <textarea id="details" name="details" rows={5} required
                  value={form.details} onChange={handleChange}
                  placeholder={c.projectDetailsPlaceholder} className="field resize-y" />
              </div>

              <label className="flex cursor-pointer items-center gap-3 text-sm text-fg-muted">
                <input type="checkbox" name="requireNDA" checked={form.requireNDA} onChange={handleChange}
                  className="h-4 w-4 rounded border-ink-700 bg-ink-950 accent-accent-strong" />
                {c.requireNDA}
              </label>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="btn-primary group sm:w-auto">
                  {c.sendMessage}
                  <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="text-sm text-fg-subtle">{c.formNote}</p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
