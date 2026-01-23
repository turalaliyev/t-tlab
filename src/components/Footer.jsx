import { Link } from 'react-router-dom';
import { HiBolt } from 'react-icons/hi2';

const Footer = () => {
  return (
    <footer className="border-t border-dark-border bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 text-white">
            <HiBolt className="h-5 w-5 text-accent-primary" />
            <span className="text-lg font-bold">T&T LAB</span>
          </Link>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-accent-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-accent-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-accent-primary transition-colors">LinkedIn</a>
          </div>

          <p className="text-sm text-gray-400">© 2024 T&T Lab. Built for the future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
