import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ThemeProvider } from './components/ThemeProvider';
import Layout from './components/Layout';
import Home from './pages/Home';

import About from './pages/About';
import Services from './pages/Services';
import Subjects from './pages/Subjects';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Placeholders for routes that might not exist yet but were in the old nav
const SolverPage = () => <div className="container section-padding"><h1>Question Solver</h1><p>Coming soon...</p></div>;
const PracticePage = () => <div className="container section-padding"><h1>Practice</h1><p>Coming soon...</p></div>;
const MockTestsPage = () => <div className="container section-padding"><h1>Mock Tests</h1><p>Coming soon...</p></div>;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });

    // Simulate loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="questionssolver-theme">
      {/* Loading Screen */}
      <div className={`loader-wrapper ${!loading ? 'hidden' : ''}`}>
        <div className="loader"></div>
        <div className="loader-text" style={{ fontWeight: 600, fontSize: '1.25rem', color: 'var(--accent)' }}>QuestionsSolver</div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="solver" element={<SolverPage />} />
            <Route path="practice" element={<PracticePage />} />
            <Route path="mock-tests" element={<MockTestsPage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
