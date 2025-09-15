/**
 * Projects Enhanced Section - Portfolio Euloge Mabiala
 * Auteur: MABIALA EULOGE JUNIOR
 * Email: mabiala@et.esiea.fr
 * Galerie de projets avec animations sobres et performantes
 */

import { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Shield, Smartphone, Globe, Star, Calendar, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { LazyMotion, domAnimation, m } from '@/ui/motion';
// Responsive images imports (WebP + JPEG)
import web_320_webp from '../../../images/web.jpg?imagetools&w=320&format=webp';
import web_480_webp from '../../../images/web.jpg?imagetools&w=480&format=webp';
import web_640_webp from '../../../images/web.jpg?imagetools&w=640&format=webp';
import web_320_jpg from '../../../images/web.jpg?imagetools&w=320&format=jpeg';
import web_480_jpg from '../../../images/web.jpg?imagetools&w=480&format=jpeg';
import web_640_jpg from '../../../images/web.jpg?imagetools&w=640&format=jpeg';

import p1_320_webp from '../../../images/project1NUMERIQUE.jpg?imagetools&w=320&format=webp';
import p1_480_webp from '../../../images/project1NUMERIQUE.jpg?imagetools&w=480&format=webp';
import p1_640_webp from '../../../images/project1NUMERIQUE.jpg?imagetools&w=640&format=webp';
import p1_320_jpg from '../../../images/project1NUMERIQUE.jpg?imagetools&w=320&format=jpeg';
import p1_480_jpg from '../../../images/project1NUMERIQUE.jpg?imagetools&w=480&format=jpeg';
import p1_640_jpg from '../../../images/project1NUMERIQUE.jpg?imagetools&w=640&format=jpeg';

import p2_320_webp from '../../../images/project2NUMERIQUE.jpg?imagetools&w=320&format=webp';
import p2_480_webp from '../../../images/project2NUMERIQUE.jpg?imagetools&w=480&format=webp';
import p2_640_webp from '../../../images/project2NUMERIQUE.jpg?imagetools&w=640&format=webp';
import p2_320_jpg from '../../../images/project2NUMERIQUE.jpg?imagetools&w=320&format=jpeg';
import p2_480_jpg from '../../../images/project2NUMERIQUE.jpg?imagetools&w=480&format=jpeg';
import p2_640_jpg from '../../../images/project2NUMERIQUE.jpg?imagetools&w=640&format=jpeg';

import p3_320_webp from '../../../images/project3NUMERIQUE.jpg?imagetools&w=320&format=webp';
import p3_480_webp from '../../../images/project3NUMERIQUE.jpg?imagetools&w=480&format=webp';
import p3_640_webp from '../../../images/project3NUMERIQUE.jpg?imagetools&w=640&format=webp';
import p3_320_jpg from '../../../images/project3NUMERIQUE.jpg?imagetools&w=320&format=jpeg';
import p3_480_jpg from '../../../images/project3NUMERIQUE.jpg?imagetools&w=480&format=jpeg';
import p3_640_jpg from '../../../images/project3NUMERIQUE.jpg?imagetools&w=640&format=jpeg';

import p4_320_webp from '../../../images/project4NUMERIQUE.jpg?imagetools&w=320&format=webp';
import p4_480_webp from '../../../images/project4NUMERIQUE.jpg?imagetools&w=480&format=webp';
import p4_640_webp from '../../../images/project4NUMERIQUE.jpg?imagetools&w=640&format=webp';
import p4_320_jpg from '../../../images/project4NUMERIQUE.jpg?imagetools&w=320&format=jpeg';
import p4_480_jpg from '../../../images/project4NUMERIQUE.jpg?imagetools&w=480&format=jpeg';
import p4_640_jpg from '../../../images/project4NUMERIQUE.jpg?imagetools&w=640&format=jpeg';

import cyber_320_webp from '../../../images/cybersecuritycertification.jpg?imagetools&w=320&format=webp';
import cyber_480_webp from '../../../images/cybersecuritycertification.jpg?imagetools&w=480&format=webp';
import cyber_640_webp from '../../../images/cybersecuritycertification.jpg?imagetools&w=640&format=webp';
import cyber_320_jpg from '../../../images/cybersecuritycertification.jpg?imagetools&w=320&format=jpeg';
import cyber_480_jpg from '../../../images/cybersecuritycertification.jpg?imagetools&w=480&format=jpeg';
import cyber_640_jpg from '../../../images/cybersecuritycertification.jpg?imagetools&w=640&format=jpeg';

const imageMap = {
  web: {
    webp: `${web_320_webp} 320w, ${web_480_webp} 480w, ${web_640_webp} 640w`,
    jpg: `${web_320_jpg} 320w, ${web_480_jpg} 480w, ${web_640_jpg} 640w`,
    fallback: web_480_jpg,
  },
  project1: {
    webp: `${p1_320_webp} 320w, ${p1_480_webp} 480w, ${p1_640_webp} 640w`,
    jpg: `${p1_320_jpg} 320w, ${p1_480_jpg} 480w, ${p1_640_jpg} 640w`,
    fallback: p1_480_jpg,
  },
  project2: {
    webp: `${p2_320_webp} 320w, ${p2_480_webp} 480w, ${p2_640_webp} 640w`,
    jpg: `${p2_320_jpg} 320w, ${p2_480_jpg} 480w, ${p2_640_jpg} 640w`,
    fallback: p2_480_jpg,
  },
  project3: {
    webp: `${p3_320_webp} 320w, ${p3_480_webp} 480w, ${p3_640_webp} 640w`,
    jpg: `${p3_320_jpg} 320w, ${p3_480_jpg} 480w, ${p3_640_jpg} 640w`,
    fallback: p3_480_jpg,
  },
  project4: {
    webp: `${p4_320_webp} 320w, ${p4_480_webp} 480w, ${p4_640_webp} 640w`,
    jpg: `${p4_320_jpg} 320w, ${p4_480_jpg} 480w, ${p4_640_jpg} 640w`,
    fallback: p4_480_jpg,
  },
  cyber: {
    webp: `${cyber_320_webp} 320w, ${cyber_480_webp} 480w, ${cyber_640_webp} 640w`,
    jpg: `${cyber_320_jpg} 320w, ${cyber_480_jpg} 480w, ${cyber_640_jpg} 640w`,
    fallback: cyber_480_jpg,
  }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

const ProjectsEnhanced = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Plateforme Solutions Afrique',
      description: "Web‑app qui recense les problèmes en Afrique, propose des projets et gère des investissements avec dashboard d'analyse",
      category: 'web',
      technologies: ['Flask', 'SQLite', 'JavaScript', 'Dashboard', 'Glassmorphism'],
      imageKey: 'web',
      github: 'https://github.com/eulogep',
      demo: '#',
      featured: true,
      status: 'En développement',
      duration: '4 mois',
      team: 'Solo',
      highlights: [
        'Gestion des problèmes et des projets',
        'Système d’investissement avec analytics',
        'UI glassmorphism performante'
      ],
      metrics: {
        modules: '10+',
        perf: 'Lighthouse 90+',
        db: 'SQLite'
      }
    },
    {
      id: 2,
      title: 'Classeur Numérique Intelligent',
      description: 'Gestion documentaire hybride (Electron/Supabase) avec OCR, classification intelligente et recherche avancée',
      category: 'web',
      technologies: ['Electron', 'Supabase', 'React', 'Node/Express', 'Tesseract.js'],
      imageKey: 'project3',
      github: 'https://github.com/eulogep',
      demo: '#',
      featured: true,
      status: 'En développement',
      duration: '3 mois',
      team: 'Solo',
      highlights: [
        'OCR via Tesseract.js',
        'Classification auto et recherche avancée',
        'Stockage Supabase sécurisé'
      ],
      metrics: {
        docs: '5k+',
        accuracy: '92% OCR',
        latency: '<200ms'
      }
    },
    {
      id: 3,
      title: 'Blockchain Certificate Vault dApp',
      description: 'Émission, vérification et gestion de certificats via smart‑contracts et IPFS avec front React moderne',
      category: 'security',
      technologies: ['Vite', 'React', 'Tailwind', 'Ethers.js', 'OpenZeppelin', 'IPFS'],
      imageKey: 'project4',
      github: 'https://github.com/eulogep',
      demo: '#',
      featured: true,
      status: 'En développement',
      duration: '2 mois',
      team: 'Solo',
      highlights: [
        'Contrats sécurisés OpenZeppelin',
        'Stockage décentralisé IPFS',
        'Vérification rapide des certificats'
      ],
      metrics: {
        tx: '100+',
        cost: 'Optimisé',
        audit: 'en cours'
      }
    },
    {
      id: 4,
      title: 'DEX Swap App',
      description: 'Interface de swap (ETH, USDC, DAI, WBTC, USDT) sur Uniswap v3 avec simulation de slippage et design néon',
      category: 'web',
      technologies: ['React 18', 'Ethers.js', 'Uniswap v3', 'Tailwind', 'Voice Onboarding'],
      imageKey: 'project1',
      github: 'https://github.com/eulogep',
      demo: '#',
      featured: false,
      status: 'En développement',
      duration: '2 mois',
      team: 'Solo',
      highlights: [
        'Simulation de slippage en temps réel',
        'Design néon/glassmorphism fluide',
        'Onboarding vocal'
      ],
      metrics: {
        pairs: '5+',
        fps: '60fps UI',
        latency: '<150ms'
      }
    },
    {
      id: 5,
      title: 'Simulateur d’Attaque Brute Force',
      description: 'Outil pédagogique pour calculer la robustesse d’un mot de passe et simuler des attaques (CPU/GPU/cluster)',
      category: 'security',
      technologies: ['Web Workers', 'Charting', 'HIBP API', 'React'],
      imageKey: 'cyber',
      github: 'https://github.com/eulogep',
      demo: '#',
      featured: false,
      status: 'Terminé',
      duration: '1.5 mois',
      team: 'Solo',
      highlights: [
        'Graphiques interactifs',
        'Conseils de sécurité dynamiques',
        'Simulation fuite de données'
      ],
      metrics: {
        breaches: 'Pwned API',
        threads: 'Multi‑workers',
        tips: 'contextuels'
      }
    },
    {
      id: 6,
      title: 'Double Calculatrice Pro',
      description: 'Calculatrice web multirôle (standard, scientifique, financier, convertisseur) avec reco vocale et thèmes',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
      imageKey: 'project2',
      github: 'https://github.com/eulogep/double-calculator',
      demo: '#',
      featured: true,
      status: 'Terminé',
      duration: '2 mois',
      team: 'Solo',
      highlights: [
        'Reconnaissance vocale',
        'Thèmes dynamiques',
        'Historique intelligent'
      ],
      metrics: {
        modes: '4',
        tests: '95%',
        perf: 'Lighthouse 90+'
      }
    },
    {
      id: 7,
      title: 'Bruteforce Tool (v1)',
      description: 'App éducative avec règles personnalisables, support GPU via Hashcat et API REST Flask',
      category: 'security',
      technologies: ['Flask', 'Hashcat', 'React', 'Tailwind'],
      imageKey: 'project3',
      github: 'https://github.com/eulogep',
      demo: '#',
      featured: false,
      status: 'Prototype',
      duration: '1 mois',
      team: 'Solo',
      highlights: [
        'Suivi temps réel',
        'Configuration intuitive',
        'Support GPU'
      ],
      metrics: {
        hashes: 'MH/s',
        profiles: '10+',
        ui: 'réactive'
      }
    },
    {
      id: 8,
      title: 'Securebreaker (Testeur Sécurité)',
      description: 'Interface de démo en React + TypeScript pour configurer et monitorer des tests de sécurité',
      category: 'security',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      imageKey: 'web',
      github: 'https://github.com/eulogep',
      demo: '#',
      featured: false,
      status: 'Démo',
      duration: '2 semaines',
      team: 'Solo',
      highlights: [
        'Panneaux de configuration modulaires',
        'Multiples protocoles',
        'Monitoring clair'
      ],
      metrics: {
        modules: '6',
        coverage: 'large',
        ux: 'fluide'
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les projets', icon: Globe, count: projects.length },
    { id: 'web', label: 'Applications Web', icon: Code, count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Applications Mobile', icon: Smartphone, count: projects.filter(p => p.category === 'mobile').length },
    { id: 'security', label: 'Cybersécurité', icon: Shield, count: projects.filter(p => p.category === 'security').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'web': return Code;
      case 'mobile': return Smartphone;
      case 'security': return Shield;
      default: return Globe;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Terminé': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'En développement': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Version Beta': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Production': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header (reveal heading only) */}
        <m.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-6">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez une sélection de mes projets les plus significatifs en développement et cybersécurité
          </p>
        </m.div>

        {/* Featured Projects Showcase */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <Star className="inline mr-2 text-primary" size={24} />
            Projets Mis en Avant
          </h3>
          <LazyMotion features={domAnimation}>
            <m.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {featuredProjects.slice(0, 3).map((project) => {
                const CategoryIcon = getCategoryIcon(project.category);
                return (
                  <m.li key={project.id} variants={item} className="list-none">
                    <Card className="glass border-primary/20 group overflow-hidden transform transition-transform duration-500 hover:scale-105">
                      <div className="relative">
                        <div className="h-48 overflow-hidden">
                          <picture>
                            <source type="image/webp" srcSet={imageMap[project.imageKey].webp} sizes="(max-width: 1024px) 50vw, 400px" />
                            <source type="image/jpeg" srcSet={imageMap[project.imageKey].jpg} sizes="(max-width: 1024px) 50vw, 400px" />
                            <img
                              src={imageMap[project.imageKey].fallback}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                              decoding="async"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                const pic = e.target.closest('picture');
                                if (pic && pic.nextElementSibling) pic.nextElementSibling.style.display = 'flex';
                              }}
                            />
                          </picture>
                          <div className="h-full bg-gradient-to-br from-primary/20 to-secondary/20 hidden items-center justify-center">
                            <CategoryIcon size={48} className="text-primary/50" />
                          </div>
                        </div>
                        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                          <Star size={14} className="mr-1" />
                          Mis en avant
                        </Badge>
                        <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button 
                            size="lg" 
                            onClick={() => openProjectModal(project)}
                          >
                            <Eye size={16} className="mr-2" />
                            Voir les détails
                          </Button>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <CategoryIcon size={20} className="text-primary" />
                        </div>
                        
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex items-center justify-between mb-4">
                          <Badge className={`${getStatusColor(project.status)} border text-xs`}>
                            {project.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Calendar size={12} className="mr-1" />
                            {project.duration}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </m.li>
                );
              })}
            </m.ul>
          </LazyMotion>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-transform duration-300 transform hover:scale-105 ${
                  filter === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'glass hover:bg-primary/20'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{category.label}</span>
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with stagger on scroll */}
        <LazyMotion features={domAnimation}>
          <m.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <m.li key={project.id} variants={item} className="list-none">
                  <Card className="glass border-primary/20 group overflow-hidden transform transition-transform duration-500 hover:scale-105">
                    <div className="relative">
                      <div className="h-48 overflow-hidden">
                        <picture>
                          <source type="image/webp" srcSet={imageMap[project.imageKey].webp} sizes="(max-width: 1024px) 50vw, 400px" />
                          <source type="image/jpeg" srcSet={imageMap[project.imageKey].jpg} sizes="(max-width: 1024px) 50vw, 400px" />
                          <img
                            src={imageMap[project.imageKey].fallback}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              const pic = e.target.closest('picture');
                              if (pic && pic.nextElementSibling) pic.nextElementSibling.style.display = 'flex';
                            }}
                          />
                        </picture>
                        <div className="h-full bg-gradient-to-br from-primary/20 to-secondary/20 hidden items-center justify-center">
                          <CategoryIcon size={48} className="text-primary/50" />
                        </div>
                      </div>
                      
                      {project.featured && (
                        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                          <Star size={14} className="mr-1" />
                          Mis en avant
                        </Badge>
                      )}

                      <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-primary text-primary"
                          onClick={() => openProjectModal(project)}
                        >
                          <Eye size={16} className="mr-2" />
                          Détails
                        </Button>
                        <Button size="sm" variant="outline" className="border-primary text-primary">
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <CategoryIcon size={20} className="text-primary" />
                      </div>
                      
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <Badge className={`${getStatusColor(project.status)} border text-xs`}>
                          {project.status}
                        </Badge>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Calendar size={12} />
                          <span>{project.duration}</span>
                          <Users size={12} />
                          <span>{project.team}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => openProjectModal(project)}
                        >
                          <ArrowRight size={16} className="mr-2" />
                          Plus
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </m.li>
              );
            })}
          </m.ul>
        </LazyMotion>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: projects.length, label: 'Projets réalisés', icon: Code },
            { number: projects.filter(p => p.status === 'Terminé').length, label: 'Projets terminés', icon: Eye },
            { number: [...new Set(projects.flatMap(p => p.technologies))].length, label: 'Technologies utilisées', icon: Globe },
            { number: projects.filter(p => p.featured).length, label: 'Projets mis en avant', icon: Star }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="glass p-6 rounded-2xl">
                <Icon size={32} className="text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Vous souhaitez voir plus de mes travaux ou collaborer sur un projet ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold">
              <Github size={20} className="mr-2" />
              Voir tous mes projets sur GitHub
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-primary text-primary">
              <ExternalLink size={20} className="mr-2" />
              Collaborons ensemble
            </Button>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <Card className="glass border-primary/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                  <Badge className={`${getStatusColor(selectedProject.status)} border`}>
                    {selectedProject.status}
                  </Badge>
                </div>
                <Button variant="ghost" size="icon" onClick={closeModal} aria-label="Fermer">
                  ×
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <picture>
                    <source type="image/webp" srcSet={imageMap[selectedProject.imageKey].webp} sizes="(max-width: 1024px) 80vw, 640px" />
                    <source type="image/jpeg" srcSet={imageMap[selectedProject.imageKey].jpg} sizes="(max-width: 1024px) 80vw, 640px" />
                    <img
                      src={imageMap[selectedProject.imageKey].fallback}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Calendar className="text-primary mx-auto mb-2" size={20} />
                      <div className="text-sm font-semibold">{selectedProject.duration}</div>
                      <div className="text-xs text-muted-foreground">Durée</div>
                    </div>
                    <div className="text-center">
                      <Users className="text-primary mx-auto mb-2" size={20} />
                      <div className="text-sm font-semibold">{selectedProject.team}</div>
                      <div className="text-xs text-muted-foreground">Équipe</div>
                    </div>
                    <div className="text-center">
                      <Star className="text-primary mx-auto mb-2" size={20} />
                      <div className="text-sm font-semibold">{selectedProject.featured ? 'Oui' : 'Non'}</div>
                      <div className="text-xs text-muted-foreground">Mis en avant</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Points Forts</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold mb-4 text-primary">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-primary">Métriques</h3>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(selectedProject.metrics).map(([key, value], index) => (
                      <div key={index} className="text-center glass p-3 rounded-lg">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button className="flex-1">
                      <ExternalLink size={16} className="mr-2" />
                      Voir la démo
                    </Button>
                    <Button variant="outline" className="flex-1 border-primary">
                      <Github size={16} className="mr-2" />
                      Code source
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
};

export default ProjectsEnhanced;
