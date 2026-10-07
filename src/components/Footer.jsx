import { Link } from 'react-router-dom';
import { useT } from '../contexts/LanguageContext';
import { CONTACT, SOCIALS, SERVICES } from '../data/site';
import { Logo, LiveDot } from './ui';

const Footer = () => {
  const t = useT();

  const company = [
    { to: '/services', label: t.nav.services },
    { to: '/work', label: t.nav.work },
    { to: '/#process', label: t.nav.process },
    { to: '/stack', label: t.nav.stack },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-line">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-fg-muted leading-relaxed">{t.footer.tagline}</p>
          <p className="mt-6 inline-flex items-center gap-2.5 text-sm text-fg-muted">
            <LiveDot />
            {t.home.badge}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">{t.footer.services}</p>
          <ul className="mt-5 space-y-3 text-sm">
            {t.home.services.items.map((s, i) => (
              <li key={s.title}>
                <Link to={`/services#${SERVICES[i].slug}`} className="text-fg-muted hover:text-fg transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">{t.footer.company}</p>
          <ul className="mt-5 space-y-3 text-sm">
            {company.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-fg-muted hover:text-fg transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">{t.footer.contact}</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="break-words text-fg-muted hover:text-fg transition-colors">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={CONTACT.phoneHref} className="text-fg-muted hover:text-fg transition-colors">{CONTACT.phone}</a>
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg-muted hover:border-white/30 hover:text-fg transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 22 Lab. {t.footer.rights}</p>
          <p className="font-mono">{t.contact.locationValue}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
