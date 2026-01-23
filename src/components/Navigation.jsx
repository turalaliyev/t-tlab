import { Link, useLocation } from 'react-router-dom';
import { HiBolt } from 'react-icons/hi2';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Services' },
    { path: '/stack', label: 'Stack' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-accent-primary transition-colors">
            <HiBolt className="h-6 w-6 text-accent-primary" />
            <span className="text-xl font-bold">T&T LAB</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-accent-primary'
                    : 'text-white hover:text-accent-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="px-4 py-2 bg-accent-primary text-dark-bg rounded-lg font-medium text-sm hover:bg-accent-light transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
