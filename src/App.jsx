/**
 * Portfolio Professionnel - Euloge Mabiala
 *
 * Auteur: MABIALA EULOGE JUNIOR
 * Email: mabiala@et.esiea.fr
 *
 * Portfolio moderne et interactif développé avec React
 * présentant les compétences en cybersécurité et développement logiciel
 */

import { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';

// Lazy components
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));
const LightningBackground = lazy(() => import('./components/LightningBackground'));
const Navigation = lazy(() => import('./components/Navigation'));
const LoadingScreen = lazy(() => import('./components/LoadingScreen'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const ExperienceEnhanced = lazy(() => import('./components/sections/ExperienceEnhanced'));
const SkillsEnhanced = lazy(() => import('./components/sections/SkillsEnhanced'));
const ProjectsEnhanced = lazy(() => import('./components/sections/ProjectsEnhanced'));
const Contact = lazy(() => import('./components/sections/Contact'));
import LazyMount from './components/LazySection';
import { MotionConfig } from 'framer-motion';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [reducedMode, setReducedMode] = useState('user');
  const [showParticles, setShowParticles] = useState(true);
  const [effectsEnabled, setEffectsEnabled] = useState(() => {
    const saved = localStorage.getItem('effectsEnabled');
    return saved === null ? true : saved === 'true';
  });
  const [bgVariant, setBgVariant] = useState(() => localStorage.getItem('bgVariant') || 'default');

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

  useEffect(() => {
    if (typeof document !== 'undefined' && document.documentElement.hasAttribute('data-test-no-motion')) {
      setReducedMode('always');
    }

    const mqlReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqlSmall = window.matchMedia('(max-width: 768px)');
    const compute = () => {
      const saveData = navigator.connection && navigator.connection.saveData;
      const prefers = mqlReduce.matches;
      const small = mqlSmall.matches;
      const base = !prefers && !saveData && !small;
      setShowParticles(base && effectsEnabled);
      setReducedMode(prefers ? 'always' : 'user');
    };
    compute();
    const onReduceChange = () => compute();
    const onSmallChange = () => compute();
    mqlReduce.addEventListener && mqlReduce.addEventListener('change', onReduceChange);
    mqlSmall.addEventListener && mqlSmall.addEventListener('change', onSmallChange);
    return () => {
      mqlReduce.removeEventListener && mqlReduce.removeEventListener('change', onReduceChange);
      mqlSmall.removeEventListener && mqlSmall.removeEventListener('change', onSmallChange);
    };
  }, [effectsEnabled]);

  // Update activeSection based on scroll position
  useEffect(() => {
    const ids = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
    let observer;

    const bind = () => {
      const elements = ids
        .map((id) => document.getElementById(id))
        .filter((el) => !!el);

      const visibility = new Map();

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
          });
          let bestId = activeSection;
          let bestRatio = 0;
          visibility.forEach((ratio, id) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestId = id;
            }
          });
          if (bestId && bestId !== activeSection) setActiveSection(bestId);
        },
        { root: null, rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
      );

      elements.forEach((el) => observer.observe(el));
    };

    bind();

    const onLazyMounted = () => {
      if (observer) observer.disconnect();
      bind();
    };
    window.addEventListener('lazy-section-mounted', onLazyMounted);

    return () => {
      window.removeEventListener('lazy-section-mounted', onLazyMounted);
      if (observer) observer.disconnect();
    };
  }, [activeSection]);

  useEffect(() => {
    document.documentElement.setAttribute('data-bg-variant', bgVariant);
    localStorage.setItem('bgVariant', bgVariant);
  }, [bgVariant]);

  const toggleEffects = () => {
    const v = !effectsEnabled;
    setEffectsEnabled(v);
    localStorage.setItem('effectsEnabled', String(v));
  };

  const cycleBg = () => {
    setBgVariant((prev) => (prev === 'default' ? 'purple' : prev === 'purple' ? 'dark' : 'default'));
  };

  if (isLoading) {
    return (
      <MotionConfig reducedMotion={reducedMode}>
        <Suspense fallback={null}>
          <LoadingScreen onComplete={handleLoadingComplete} />
        </Suspense>
      </MotionConfig>
    );
  }

  return (
    <MotionConfig reducedMotion={reducedMode}>
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded"
      >
        Aller au contenu principal
      </a>

      <Suspense fallback={null}>
        {showParticles ? (
          <>
            <ParticleBackground />
            <LightningBackground />
          </>
        ) : null}
      </Suspense>

      <Suspense fallback={null}>
        <Navigation
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          effectsEnabled={effectsEnabled}
          onToggleEffects={toggleEffects}
          bgVariant={bgVariant}
          onCycleBg={cycleBg}
        />
      </Suspense>

      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>

      <main id="main-content" role="main" tabIndex={-1}>
        <Suspense fallback={<div role="status" className="p-8 text-center">Chargement…</div>}>
          <Hero onSectionChange={handleSectionChange} />
        </Suspense>

        <Suspense fallback={null}>
          <LazyMount>
            <About />
          </LazyMount>
        </Suspense>

        <Suspense fallback={null}>
          <LazyMount>
            <ExperienceEnhanced />
          </LazyMount>
        </Suspense>

        <Suspense fallback={null}>
          <LazyMount>
            <SkillsEnhanced />
          </LazyMount>
        </Suspense>

        <Suspense fallback={null}>
          <LazyMount>
            <ProjectsEnhanced />
          </LazyMount>
        </Suspense>

        <Suspense fallback={null}>
          <LazyMount>
            <Contact />
          </LazyMount>
        </Suspense>
      </main>
    </div>
    </MotionConfig>
  );
}

export default App;
