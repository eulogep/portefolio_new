/**
 * Portfolio Professionnel - Euloge Mabiala
 * 
 * Auteur: MABIALA EULOGE JUNIOR
 * Email: mabiala@et.esiea.fr
 * 
 * Portfolio moderne et interactif développé avec React
 * présentant les compétences en cybersécurité et développement logiciel
 */

import { useState, useEffect } from 'react';
import './App.css';

// Components
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      <ScrollToTop />
      
      <main>
        <Hero onSectionChange={handleSectionChange} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

