import { Link } from 'react-router-dom';
import { HiMail } from 'react-icons/hi';
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const SOCIALS = [
  { href: 'mailto:tural.aliyev555@gmail.com', icon: HiMail, label: 'Email' },
  { href: 'https://wa.me/994508747905', icon: FaWhatsapp, label: 'WhatsApp' },
  { href: 'https://t.me/tural_1995_aliyev', icon: FaTelegramPlane, label: 'Telegram' },
  { href: 'https://www.instagram.com/', icon: FaInstagram, label: 'Instagram' },
];

const Footer = () => (
  <footer className="border-t border-brand-border bg-brand-surface/40">
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        <Link to="/" className="font-serif text-xl font-semibold text-white hover:text-neon-blue transition-colors">
          22 <span className="text-gradient-blue">Lab</span>
        </Link>

        <div className="flex items-center gap-3">
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded border border-brand-border bg-brand-card flex items-center justify-center text-slate-500 hover:border-neon-blue/40 hover:text-neon-blue transition-all duration-200"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-600 font-mono">
          © {new Date().getFullYear()} 22 Lab. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
