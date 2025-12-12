import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

import { BackgroundGrid } from './components/BackgroundGrid';

function App() {
  useScrollReveal();

  return (
    <div className="bg-white text-gray-900 antialiased relative min-h-screen">
      <BackgroundGrid />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;