import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Scene from './components/Scene';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-white overflow-x-hidden">
      <Scene />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;