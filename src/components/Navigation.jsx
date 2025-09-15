import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Award, Heart, FolderOpen, Mail } from 'lucide-react';
import { Button } from './ui/button';
import ThemeToggle from './ThemeToggle';
import EffectsToggle from './EffectsToggle';

const Navigation = ({ activeSection, onSectionChange, effectsEnabled, onToggleEffects, bgVariant, onCycleBg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'about', label: 'À propos', icon: User },
    { id: 'experience', label: 'Expérience', icon: Briefcase },
    { id: 'skills', label: 'Compétences', icon: Award },
    { id: 'projects', label: 'Projets', icon: FolderOpen },
    { id: 'passions', label: 'Passions', icon: Heart },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    onSectionChange(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass backdrop-blur-md' : 'bg-transparent'
        }`}
        aria-label="Navigation principale"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold font-['Orbitron'] neon-text">EM</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      isActive ? 'text-primary bg-primary/10' : 'text-foreground'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
              <EffectsToggle enabled={effectsEnabled} onToggle={onToggleEffects} bgVariant={bgVariant} onCycleBg={onCycleBg} />
              <ThemeToggle />
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center space-x-2 md:hidden">
              <ThemeToggle />
              <Button
                aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />
        <div className="relative flex flex-col items-center justify-center h-full space-y-8">
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <EffectsToggle enabled={effectsEnabled} onToggle={onToggleEffects} bgVariant={bgVariant} onCycleBg={onCycleBg} />
            <ThemeToggle />
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-4 px-6 py-3 rounded-lg text-xl transition-all duration-300 hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive ? 'text-primary bg-primary/10' : 'text-foreground'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={24} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navigation;
