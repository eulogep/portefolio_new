/**
 * Hero Section - Portfolio Euloge Mabiala
 * Auteur: MABIALA EULOGE JUNIOR
 * Email: mabiala@et.esiea.fr
 */

import { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import profileImage from '../../assets/photo_euloge.jpg';

const Hero = ({ onSectionChange }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Étudiant Ingénieur en Cybersécurité & Développement Logiciel";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToNext = () => {
    onSectionChange('about');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl animate-glow">
            <img
              src={profileImage}
              alt="Euloge Mabiala"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>
          <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold font-['Orbitron'] mb-6 neon-text">
          Euloge Mabiala
        </h1>

        {/* Animated Subtitle */}
        <div className="h-16 mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Passionné par la cybersécurité et le développement logiciel, je combine expertise technique
          et créativité pour créer des solutions innovantes et sécurisées.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="px-8 py-4 text-lg font-semibold hover-glow animate-glow"
            onClick={() => onSectionChange('projects')}
          >
            Découvrir mes projets
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Download className="mr-2" size={20} />
            Télécharger CV
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full hover-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Ouvrir GitHub dans un nouvel onglet"
            onClick={() => window.open('https://github.com/eulogep', '_blank', 'noopener,noreferrer')}
          >
            <Github size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full hover-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Ouvrir LinkedIn dans un nouvel onglet"
            onClick={() => window.open('https://linkedin.com/in/euloge-mabiala', '_blank', 'noopener,noreferrer')}
          >
            <Linkedin size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full hover-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Envoyer un email"
            onClick={() => (window.location.href = 'mailto:mabiala@et.esiea.fr')}
          >
            <Mail size={24} />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="animate-bounce hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Aller à la section À propos"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
