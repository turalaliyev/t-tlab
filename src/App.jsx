import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import TechnologyStack from './pages/TechnologyStack';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import CaseStudy from './pages/CaseStudy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg">
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
    </Router>
  );
}

export default App;
