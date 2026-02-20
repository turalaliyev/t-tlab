import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import TechnologyStack from './pages/TechnologyStack';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import CaseStudy from './pages/CaseStudy';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-brand-bg relative">
          {/* Global animated background (all pages) */}
          <div className="fixed inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
          </div>
          <div className="relative z-10">
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stack" element={<TechnologyStack />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/case-study" element={<CaseStudy />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
