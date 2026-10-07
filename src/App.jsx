import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { SmoothScroll } from './components/SmoothScroll';
import { PageBackdrop } from './components/ui';
import Home from './pages/Home';
import TechnologyStack from './pages/TechnologyStack';
import Services from './pages/Services';
import Work from './pages/Work';
import Process from './pages/Process';
import Contact from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <SmoothScroll>
          <Router>
            <ScrollToTop />
            <div className="relative min-h-screen bg-ink-950 overflow-x-clip">
              <PageBackdrop />
              <div className="relative z-10 flex min-h-screen flex-col">
                <Navigation />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/stack" element={<TechnologyStack />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/process" element={<Process />} />
                    <Route path="/portfolio" element={<Navigate to="/work" replace />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </div>
          </Router>
        </SmoothScroll>
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
