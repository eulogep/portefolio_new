/**
 * Projects Enhanced Section - Portfolio Euloge Mabiala
 * Auteur: MABIALA EULOGE JUNIOR
 * Email: mabiala@et.esiea.fr
 * Galerie de projets améliorée avec animations et interactions
 */

import { useState, useEffect } from 'react';
import { ExternalLink, Github, Eye, Code, Shield, Smartphone, Globe, Star, Calendar, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const ProjectsEnhanced = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Double Calculator',
      description: 'Calculatrice avancée avec interface moderne et fonctionnalités étendues pour calculs complexes',
      category: 'web',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
      image: '/images/project1NUMERIQUE.jpg',
      github: 'https://github.com/eulogep/double-calculator',
      demo: '#',
      featured: true,
      status: 'Terminé',
      duration: '2 mois',
      team: 'Solo',
      highlights: [
        'Interface utilisateur intuitive et moderne',
        'Support des calculs scientifiques avancés',
        'Historique des calculs avec sauvegarde locale',
        'Design responsive pour tous les appareils'
      ],
      metrics: {
        lines: '1,200+',
        functions: '25+',
        tests: '95%'
      }
    },
    {
      id: 2,
      title: 'Système de Sécurité IoT',
      description: 'Solution complète de sécurité pour objets connectés avec monitoring temps réel et alertes',
      category: 'security',
      technologies: ['Python', 'IoT', 'Cryptographie', 'MongoDB', 'MQTT', 'Docker'],
      image: '/images/cybersecuritycertification.jpg',
      github: '#',
      demo: '#',
      featured: true,
      status: 'En développement',
      duration: '4 mois',
      team: '3 personnes',
      highlights: [
        'Chiffrement end-to-end des communications',
        'Dashboard de monitoring en temps réel',
        'Système d\'alertes automatisé',
        'Architecture microservices scalable'
      ],
      metrics: {
        devices: '50+',
        uptime: '99.9%',
        alerts: '24/7'
      }
    },
    {
      id: 3,
      title: 'Application Mobile Sécurisée',
      description: 'App mobile avec authentification biométrique et chiffrement end-to-end pour communications',
      category: 'mobile',
      technologies: ['React Native', 'Node.js', 'JWT', 'Biométrie', 'SQLite', 'WebRTC'],
      image: '/images/project2NUMERIQUE.jpg',
      github: '#',
      demo: '#',
      featured: false,
      status: 'Version Beta',
      duration: '3 mois',
      team: '2 personnes',
      highlights: [
        'Authentification biométrique (empreinte, visage)',
        'Chiffrement AES-256 des données',
        'Chat sécurisé avec auto-destruction',
        'Interface Material Design 3.0'
      ],
      metrics: {
        users: '100+',
        security: 'A+',
        rating: '4.8/5'
      }
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      description: 'Tableau de bord interactif pour l\'analyse de données de sécurité avec visualisations avancées',
      category: 'web',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'WebSockets', 'Chart.js'],
      image: '/images/project3NUMERIQUE.jpg',
      github: '#',
      demo: '#',
      featured: false,
      status: 'Terminé',
      duration: '2.5 mois',
      team: 'Solo',
      highlights: [
        'Visualisations interactives en temps réel',
        'Support de millions de points de données',
        'Exportation multi-formats (PDF, CSV, PNG)',
        'Tableaux de bord personnalisables'
      ],
      metrics: {
        data: '1M+ points',
        charts: '15 types',
        performance: '<100ms'
      }
    },
    {
      id: 5,
      title: 'Audit de Sécurité Automatisé',
      description: 'Outil d\'audit automatique pour détecter les vulnérabilités web selon les standards OWASP',
      category: 'security',
      technologies: ['Python', 'Selenium', 'OWASP', 'Docker', 'Redis', 'FastAPI'],
      image: '/images/project4NUMERIQUE.jpg',
      github: '#',
      demo: '#',
      featured: true,
      status: 'Production',
      duration: '5 mois',
      team: '4 personnes',
      highlights: [
        'Détection automatique de 200+ types de vulnérabilités',
        'Rapports PDF détaillés avec recommandations',
        'Intégration CI/CD pipeline',
        'API REST pour intégrations tierces'
      ],
      metrics: {
        scans: '1000+',
        vulnerabilities: '200+ types',
        accuracy: '97%'
      }
    },
    {
      id: 6,
      title: 'Portfolio Interactif',
      description: 'Site portfolio avec animations avancées, design futuriste et optimisations performance',
      category: 'web',
      technologies: ['React', 'Tailwind', 'Framer Motion', 'Vite', 'Three.js', 'GSAP'],
      image: '/images/web.jpg',
      github: '#',
      demo: '#',
      featured: false,
      status: 'Terminé',
      duration: '1 mois',
      team: 'Solo',
      highlights: [
        'Animations 3D avec Three.js',
        'Score Lighthouse 95+',
        'Design system cohérent',
        'Accessibilité WCAG 2.1 AA'
      ],
      metrics: {
        performance: '95/100',
        accessibility: '100/100',
        seo: '92/100'
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

  // Animation pour les cartes
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-project-card]');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-6 neon-text">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez une sélection de mes projets les plus significatifs en développement et cybersécurité
          </p>
        </div>

        {/* Featured Projects Showcase */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <Star className="inline mr-2 text-primary" size={24} />
            Projets Mis en Avant
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <Card key={project.id} className="glass border-primary/20 hover-glow group overflow-hidden transform transition-all duration-500 hover:scale-105">
                  <div className="relative">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="h-full bg-gradient-to-br from-primary/20 to-secondary/20 hidden items-center justify-center">
                        <CategoryIcon size={48} className="text-primary/50" />
                      </div>
                    </div>
                    
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground animate-pulse">
                      <Star size={14} className="mr-1" />
                      Mis en avant
                    </Badge>

                    <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <Button 
                        size="lg" 
                        onClick={() => openProjectModal(project)}
                        className="animate-bounce"
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
              );
            })}
          </div>
        </div>

        {/* Enhanced Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
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

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            const isVisible = visibleCards.has(index);
            
            return (
              <Card 
                key={project.id} 
                data-project-card
                data-index={index}
                className={`glass border-primary/20 hover-glow group overflow-hidden transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
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
            );
          })}
        </div>

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
              <div key={index} className="glass p-6 rounded-2xl hover-glow">
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
            <Button size="lg" className="px-8 py-4 text-lg font-semibold hover-glow">
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
                  <h2 className="text-3xl font-bold mb-2 neon-text">{selectedProject.title}</h2>
                  <Badge className={`${getStatusColor(selectedProject.status)} border`}>
                    {selectedProject.status}
                  </Badge>
                </div>
                <Button variant="ghost" size="icon" onClick={closeModal}>
                  ×
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
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