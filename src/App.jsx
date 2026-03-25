import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
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
            <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none grid-drift" />
            <div className="absolute inset-0 scanline-overlay opacity-40 pointer-events-none" />
            <div className="absolute -top-28 left-[15%] w-[34rem] h-[34rem] rounded-full pointer-events-none cyber-pulse"
              style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.16) 0%, transparent 62%)' }} />
            <div className="absolute -bottom-32 right-[12%] w-[30rem] h-[30rem] rounded-full pointer-events-none cyber-float"
              style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.16) 0%, transparent 64%)' }} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
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
          </motion.div>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
