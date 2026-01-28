import { Link } from 'react-router-dom';
import { HiBolt } from 'react-icons/hi2';
import { HiMail } from 'react-icons/hi';
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-dark-border bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 text-white">
            <HiBolt className="h-5 w-5 text-accent-primary" />
            <span className="text-lg font-bold">T&T LAB</span>
          </Link>

          <div className="flex items-center gap-4 text-gray-400">
            <a
              href="mailto:tural.aliyev555@gmail.com"
              className="w-9 h-9 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center hover:border-accent-primary hover:text-accent-primary transition-colors"
              aria-label="Email"
            >
              <HiMail className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/994508747905"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center hover:border-accent-primary hover:text-accent-primary transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="h-4 w-4" />
            </a>
            <a
              href="https://t.me/tural_1995_aliyev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center hover:border-accent-primary hover:text-accent-primary transition-colors"
              aria-label="Telegram"
            >
              <FaTelegramPlane className="h-4 w-4" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center hover:border-accent-primary hover:text-accent-primary transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
          </div>

          <p className="text-sm text-gray-400">© 2024 T&T Lab. Built for the future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
