/**
 * Projects Section - Portfolio Euloge Mabiala
 * Auteur: MABIALA EULOGE JUNIOR
 * Email: mabiala@et.esiea.fr
 */

import { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Shield, Smartphone, Globe } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Double Calculator',
      description: 'Calculatrice avancée avec interface moderne et fonctionnalités étendues',
      category: 'web',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/eulogep/double-calculator',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Système de Sécurité IoT',
      description: 'Solution de sécurité pour objets connectés avec monitoring en temps réel',
      category: 'security',
      technologies: ['Python', 'IoT', 'Cryptographie', 'MongoDB'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Application Mobile Sécurisée',
      description: 'App mobile avec authentification biométrique et chiffrement end-to-end',
      category: 'mobile',
      technologies: ['React Native', 'Node.js', 'JWT', 'Biométrie'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      description: 'Tableau de bord interactif pour l\'analyse de données de sécurité',
      category: 'web',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Audit de Sécurité Automatisé',
      description: 'Outil d\'audit automatique pour détecter les vulnérabilités web',
      category: 'security',
      technologies: ['Python', 'Selenium', 'OWASP', 'Docker'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Portfolio Interactif',
      description: 'Site portfolio avec animations avancées et design futuriste',
      category: 'web',
      technologies: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous', icon: Globe },
    { id: 'web', label: 'Web', icon: Code },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'security', label: 'Sécurité', icon: Shield }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'web': return Code;
      case 'mobile': return Smartphone;
      case 'security': return Shield;
      default: return Globe;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
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

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'glass hover:bg-primary/20'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <Card key={project.id} className="glass border-primary/20 hover-glow group overflow-hidden">
                <div className="relative">
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <CategoryIcon size={48} className="text-primary/50" />
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      Mis en avant
                    </Badge>
                  )}

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="outline" className="border-primary text-primary">
                      <Eye size={16} className="mr-2" />
                      Voir
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

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Intéressé par mes projets ? Consultez mon profil GitHub pour plus de détails.
          </p>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Github size={20} className="mr-2" />
            Voir tous mes projets sur GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

