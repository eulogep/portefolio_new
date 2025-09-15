/**
 * Hero Section - Portfolio Euloge Mabiala
 * Auteur: MABIALA EULOGE JUNIOR
 * Email: mabiala@et.esiea.fr
 */

import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import webpSrcset from '../../assets/photo_euloge.jpg?imagetools&format=webp&width=160;192;256;384&srcset';
import jpgSrcset from '../../assets/photo_euloge.jpg?imagetools&format=jpeg&width=160;192;256;384&srcset';
import jpgFallback from '../../assets/photo_euloge.jpg?imagetools&format=jpeg&width=192';
import { LazyMotion, domAnimation, m } from '@/ui/motion';

const Hero = ({ onSectionChange }) => {
  const scrollToNext = () => {
    onSectionChange('about');
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        id="home"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        aria-labelledby="hero-title"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl">
              <picture>
                <source type="image/webp" srcSet={webpSrcset} sizes="(max-width: 640px) 160px, 192px" />
                <source type="image/jpeg" srcSet={jpgSrcset} sizes="(max-width: 640px) 160px, 192px" />
                <img
                  src={jpgFallback}
                  alt="Euloge Mabiala"
                  className="w-full h-full object-cover"
                  width="192"
                  height="192"
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                />
              </picture>
            </div>
            <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>

          {/* Name */}
          <h1 id="hero-title" className="text-6xl md:text-8xl font-bold font-['Orbitron'] mb-6">
            Euloge Mabiala
          </h1>

          {/* Subtitle */}
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground font-medium mb-8"
          >
            Étudiant Ingénieur en Cybersécurité & Développement Logiciel
          </m.p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionné par la cybersécurité et le développement logiciel, je combine expertise technique
            et créativité pour créer des solutions innovantes et sécurisées.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="px-8 py-4 text-lg font-semibold"
              onClick={() => onSectionChange('projects')}
            >
              Découvrir mes projets
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://cdn.builder.io/o/assets%2F5722a3f143814730bd0a8901344be7b3%2Fe06a0e76e19c4734977a4e01fae357fa?alt=media&token=50eba22a-891e-4666-ba2c-469fbd79358a&apiKey=5722a3f143814730bd0a8901344be7b3', '_blank', 'noopener,noreferrer')}
              aria-label="Télécharger le CV (PDF)"
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
              className="w-12 h-12 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Ouvrir GitHub dans un nouvel onglet"
              onClick={() => window.open('https://github.com/eulogep', '_blank', 'noopener,noreferrer')}
            >
              <Github size={24} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Ouvrir LinkedIn dans un nouvel onglet"
              onClick={() => window.open('https://linkedin.com/in/euloge-mabiala', '_blank', 'noopener,noreferrer')}
            >
              <Linkedin size={24} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
              className="transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Aller à la section À propos"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default Hero;
