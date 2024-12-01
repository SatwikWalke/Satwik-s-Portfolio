import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />
      <main id="about">
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;