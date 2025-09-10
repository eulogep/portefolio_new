import { useState, useEffect } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const palettes = {
  cyan: {
    name: 'Cyan',
    primary: '#00e6ff',
    secondary: '#005f99',
    accent: '#00e6ff',
    'primary-foreground': '#000814',
    card: '#0d1b2a',
    muted: '#1b263b',
    backgroundDark: '#000814',
    foregroundDark: '#ffffff',
    backgroundLight: '#f8fafc',
    foregroundLight: '#0f1724'
  },
  magenta: {
    name: 'Magenta',
    primary: '#ff4da6',
    secondary: '#7a0366',
    accent: '#ff7ab6',
    'primary-foreground': '#0b0b0b',
    card: '#1a0b17',
    muted: '#2b1223',
    backgroundDark: '#090007',
    foregroundDark: '#fff6fb',
    backgroundLight: '#fff7fb',
    foregroundLight: '#210026'
  },
  lime: {
    name: 'Lime',
    primary: '#7cff00',
    secondary: '#2e5f00',
    accent: '#baff66',
    'primary-foreground': '#001000',
    card: '#0b1408',
    muted: '#1a2b14',
    backgroundDark: '#021004',
    foregroundDark: '#ecffef',
    backgroundLight: '#f7fff5',
    foregroundLight: '#05200a'
  },
  coral: {
    name: 'Coral',
    primary: '#ff7a5c',
    secondary: '#7a2f24',
    accent: '#ff956f',
    'primary-foreground': '#1a0703',
    card: '#2a120f',
    muted: '#41211e',
    backgroundDark: '#0b0403',
    foregroundDark: '#fff7f5',
    backgroundLight: '#fff6f4',
    foregroundLight: '#2b0f0c'
  }
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [openPalette, setOpenPalette] = useState(false);
  const [paletteKey, setPaletteKey] = useState('cyan');
  const panelRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setIsDark(savedTheme === 'dark');
    const savedPalette = localStorage.getItem('palette');
    if (savedPalette && palettes[savedPalette]) setPaletteKey(savedPalette);
  }, []);

  useEffect(() => {
    applyPalette(paletteKey, isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    localStorage.setItem('palette', paletteKey);
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark, paletteKey]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpenPalette(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const applyPalette = (key, dark) => {
    const p = palettes[key] || palettes.cyan;
    const root = document.documentElement;
    root.style.setProperty('--primary', p.primary);
    root.style.setProperty('--secondary', p.secondary);
    root.style.setProperty('--accent', p.accent);
    root.style.setProperty('--card', p.card);
    root.style.setProperty('--muted', p.muted);
    root.style.setProperty('--primary-foreground', p['primary-foreground']);
    root.style.setProperty('--background', dark ? p.backgroundDark : p.backgroundLight);
    root.style.setProperty('--foreground', dark ? p.foregroundDark : p.foregroundLight);
  };

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="relative inline-flex items-center">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="w-10 h-10 rounded-full hover-glow transition-all duration-300"
        aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      >
        {isDark ? (
          <Sun size={18} className="text-primary" />
        ) : (
          <Moon size={18} className="text-primary" />
        )}
      </Button>

      <div className="relative ml-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => { e.stopPropagation(); setOpenPalette(!openPalette); }}
          className="w-10 h-10 rounded-full hover-glow transition-all duration-300"
          aria-label="Choisir la palette de couleurs"
        >
          <div className="w-5 h-5 rounded-full flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-primary mr-0.5" style={{ background: palettes[paletteKey].primary }} />
            <span className="w-2 h-2 rounded-full bg-secondary" style={{ background: palettes[paletteKey].secondary, marginLeft: 4 }} />
          </div>
        </Button>

        {openPalette && (
          <div ref={panelRef} className="absolute right-0 mt-2 w-44 p-3 bg-card border border-primary/10 rounded-lg glass shadow-neon z-50">
            <div className="text-sm font-medium mb-2 text-primary">Thème de couleur</div>
            <div className="grid grid-cols-4 gap-2">
              {Object.keys(palettes).map((key) => {
                const p = palettes[key];
                return (
                  <button
                    key={key}
                    onClick={(e) => { e.stopPropagation(); setPaletteKey(key); setOpenPalette(false); }}
                    className={`w-8 h-8 rounded-full border-2 transition-transform transform ${paletteKey === key ? 'scale-110 border-white' : 'border-transparent'}`}
                    title={p.name}
                    style={{ background: `linear-gradient(135deg, ${p.primary}, ${p.secondary})` }}
                  />
                );
              })}
            </div>
            <div className="mt-3 text-xs text-muted-foreground">Mode: <span className="font-medium">{isDark ? 'Sombre' : 'Clair'}</span></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
