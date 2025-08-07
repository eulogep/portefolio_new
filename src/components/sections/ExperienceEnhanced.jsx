/**
 * Experience Enhanced Section - Portfolio Euloge Mabiala
 * Auteur: MABIALA EULOGE JUNIOR
 * Email: mabiala@et.esiea.fr
 * Timeline interactive avec animations et détails
 */

import { useState, useEffect } from 'react';
import { Calendar, MapPin, ExternalLink, User, Building, Clock, TrendingUp, Award, ChevronDown, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const ExperienceEnhanced = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const [expandedItems, setExpandedItems] = useState(new Set([0]));
  const [visibleItems, setVisibleItems] = useState(new Set());

  const experiences = [
    {
      id: 1,
      title: 'Étudiant Ingénieur en Cybersécurité',
      company: 'École d\'Ingénierie ESIEA',
      location: 'Paris, France',
      period: '2022 - Présent',
      startDate: '2022-09',
      endDate: 'present',
      type: 'Formation',
      status: 'En cours',
      description: 'Formation approfondie en cybersécurité, développement logiciel et gestion de projets techniques avec spécialisation en sécurité des systèmes d\'information.',
      detailedDescription: 'Cursus d\'ingénieur spécialisé en cybersécurité couvrant tous les aspects de la sécurité informatique : cryptographie, sécurité réseau, analyse de vulnérabilités, forensique numérique, et développement sécurisé. Formation pratique avec de nombreux projets hands-on et stages en entreprise.',
      achievements: [
        'Spécialisation en sécurité des systèmes d\'information',
        'Projets pratiques en développement sécurisé',
        'Participation à des CTF (Capture The Flag) et compétitions',
        'Certification en langages de programmation',
        'Projet de fin d\'études en cours sur l\'IoT sécurisé'
      ],
      technologies: ['Python', 'Java', 'JavaScript', 'Cryptographie', 'Réseaux', 'Linux'],
      skills: ['Analyse de risques', 'Audit de sécurité', 'Développement sécurisé', 'Gestion de projet'],
      projects: [
        { name: 'Système IoT sécurisé', description: 'Architecture sécurisée pour objets connectés' },
        { name: 'Audit automatisé', description: 'Outil d\'audit de vulnérabilités web' },
        { name: 'Cryptographie avancée', description: 'Implémentation d\'algorithmes de chiffrement' }
      ],
      metrics: {
        duration: '2+ ans',
        projects: '8',
        average: '16/20'
      }
    },
    {
      id: 2,
      title: 'Développeur Web Full-Stack',
      company: 'Projets Personnels & Freelance',
      location: 'Remote / Paris',
      period: '2023 - Présent',
      startDate: '2023-01',
      endDate: 'present',
      type: 'Projet',
      status: 'Actif',
      description: 'Développement d\'applications web modernes avec focus sur la sécurité, l\'expérience utilisateur et les performances.',
      detailedDescription: 'Création d\'applications web complètes, de l\'analyse des besoins au déploiement. Utilisation des dernières technologies et bonnes pratiques de développement, avec une attention particulière à la sécurité et à l\'optimisation des performances.',
      achievements: [
        'Création de 6+ applications web responsives',
        'Implémentation de mesures de sécurité avancées',
        'Optimisation des performances (score Lighthouse 90+)',
        'Utilisation de frameworks modernes et architectures scalables',
        'Mise en place de pipelines CI/CD automatisés'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Docker'],
      skills: ['Architecture logicielle', 'UX/UI Design', 'DevOps', 'Optimisation performance'],
      projects: [
        { name: 'Portfolio interactif', description: 'Site portfolio avec animations 3D' },
        { name: 'Dashboard analytics', description: 'Tableau de bord temps réel' },
        { name: 'E-commerce sécurisé', description: 'Plateforme e-commerce avec paiement' }
      ],
      metrics: {
        duration: '1+ an',
        projects: '6',
        satisfaction: '98%'
      }
    },
    {
      id: 3,
      title: 'Analyste en Cybersécurité Junior',
      company: 'SecureIT Solutions',
      location: 'Paris, France',
      period: 'Été 2023',
      startDate: '2023-06',
      endDate: '2023-08',
      type: 'Stage',
      status: 'Terminé',
      description: 'Stage intensif en analyse de vulnérabilités et audit de sécurité pour des systèmes d\'entreprise.',
      detailedDescription: 'Stage de 3 mois dans une entreprise spécialisée en cybersécurité. Participation à des audits de sécurité pour des clients du secteur bancaire et industriel. Formation aux outils professionnels et méthodologies d\'audit.',
      achievements: [
        'Audit de sécurité de 15+ applications web critiques',
        'Identification et documentation de 45+ vulnérabilités',
        'Rédaction de rapports d\'audit détaillés',
        'Recommandations de sécurisation implémentées',
        'Formation aux outils d\'audit automatisé et manuels'
      ],
      technologies: ['Burp Suite', 'OWASP ZAP', 'Nmap', 'Wireshark', 'Metasploit', 'Kali Linux'],
      skills: ['Tests d\'intrusion', 'Analyse forensique', 'Rédaction rapports', 'Communication client'],
      projects: [
        { name: 'Audit bancaire', description: 'Audit application mobile bancaire' },
        { name: 'Pentest industriel', description: 'Test intrusion infrastructure critique' },
        { name: 'Formation équipe', description: 'Sensibilisation développeurs' }
      ],
      metrics: {
        duration: '3 mois',
        audits: '15',
        vulns: '45+'
      }
    },
    {
      id: 4,
      title: 'Développeur Junior Python',
      company: 'Stage d\'initiation',
      location: 'Paris, France',
      period: 'Été 2022',
      startDate: '2022-06',
      endDate: '2022-08',
      type: 'Stage',
      status: 'Terminé',
      description: 'Premier stage en développement, focus sur Python et automatisation de tâches.',
      detailedDescription: 'Stage de découverte du monde professionnel dans une PME. Développement de scripts d\'automatisation et contribution à des projets internes. Première expérience en équipe de développement.',
      achievements: [
        'Automatisation de processus manuels (gain 70% de temps)',
        'Développement d\'outils internes en Python',
        'Participation à la maintenance d\'applications existantes',
        'Apprentissage des bonnes pratiques de développement',
        'Collaboration avec équipe senior'
      ],
      technologies: ['Python', 'SQL', 'Git', 'Linux', 'Bash', 'API REST'],
      skills: ['Scripting', 'Automatisation', 'Bases de données', 'Travail équipe'],
      projects: [
        { name: 'Script backup', description: 'Automatisation sauvegardes' },
        { name: 'API monitoring', description: 'Surveillance services web' },
        { name: 'Data migration', description: 'Migration données legacy' }
      ],
      metrics: {
        duration: '2 mois',
        scripts: '12',
        efficiency: '70%'
      }
    },
    {
      id: 5,
      title: 'Baccalauréat Scientifique',
      company: 'Lycée Technique',
      location: 'France',
      period: '2019 - 2022',
      startDate: '2019-09',
      endDate: '2022-06',
      type: 'Formation',
      status: 'Terminé',
      description: 'Formation scientifique avec spécialisation en mathématiques et sciences numériques.',
      detailedDescription: 'Formation au lycée avec spécialités Mathématiques et Numérique et Sciences Informatiques (NSI). Découverte de la programmation et des mathématiques appliquées à l\'informatique.',
      achievements: [
        'Baccalauréat obtenu avec Mention Bien (15.5/20)',
        'Spécialité Mathématiques (17/20) et NSI (16/20)',
        'Projets en programmation Python et JavaScript',
        'Participation aux Olympiades de Mathématiques',
        'Prix d\'excellence en informatique'
      ],
      technologies: ['Python', 'JavaScript', 'HTML/CSS', 'Scratch', 'Mathématiques'],
      skills: ['Logique algorithmique', 'Résolution problèmes', 'Mathématiques appliquées'],
      projects: [
        { name: 'Jeu Snake', description: 'Premier jeu en Python/Pygame' },
        { name: 'Site web lycée', description: 'Site vitrine avec HTML/CSS/JS' },
        { name: 'Calculatrice scientifique', description: 'Application avec interface graphique' }
      ],
      metrics: {
        duration: '3 ans',
        mention: 'Bien',
        rank: 'Top 5%'
      }
    }
  ];

  const timelineYears = ['2019', '2020', '2021', '2022', '2023', '2024', '2025'];

  // Animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.expIndex);
            setTimeout(() => {
              setVisibleItems(prev => new Set(prev).add(index));
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    const expItems = document.querySelectorAll('[data-exp-item]');
    expItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const getTypeColor = (type) => {
    switch (type) {
      case 'Formation': return 'from-blue-500 to-cyan-500';
      case 'Stage': return 'from-green-500 to-emerald-500';
      case 'Projet': return 'from-purple-500 to-pink-500';
      default: return 'from-primary to-secondary';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'En cours': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Actif': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Terminé': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default: return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  const toggleExpanded = (index) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-6 neon-text">
            Mon Parcours Professionnel
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une timeline interactive de mon évolution académique et professionnelle dans le domaine de la cybersécurité
          </p>
        </div>

        {/* Timeline Years Header */}
        <div className="hidden lg:flex justify-center mb-8">
          <div className="flex space-x-8 px-8 py-4 glass rounded-2xl">
            {timelineYears.map((year, index) => (
              <div key={year} className="text-center">
                <div className="text-lg font-bold text-primary">{year}</div>
                <div className="w-2 h-2 bg-primary rounded-full mx-auto mt-2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-30"></div>

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isVisible = visibleItems.has(index);
              const isExpanded = expandedItems.has(index);
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={exp.id} 
                  data-exp-item
                  data-exp-index={index}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-background shadow-lg z-20 transition-all duration-500 ${
                    isVisible ? 'bg-primary scale-125' : 'bg-muted scale-100'
                  }`}>
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'} transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <Card className={`glass border-primary/20 hover-glow overflow-hidden transform transition-all duration-500 hover:scale-102 bg-gradient-to-br ${getTypeColor(exp.type)}/5`}>
                      <CardContent className="p-0">
                        {/* Header */}
                        <div className="p-6 border-b border-primary/10">
                          <div className="flex flex-wrap items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                              <div className="flex items-center space-x-2 mb-2">
                                <Building size={16} className="text-primary" />
                                <p className="text-primary font-semibold">{exp.company}</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                              <Badge className={`${getTypeColor(exp.type)} text-white border-0`}>
                                {exp.type}
                              </Badge>
                              <Badge className={`${getStatusColor(exp.status)} border`}>
                                {exp.status}
                              </Badge>
                            </div>
                          </div>

                          {/* Meta Info */}
                          <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <Calendar size={16} />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock size={16} />
                              <span>{exp.metrics.duration}</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Expand Button */}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpanded(index)}
                            className="w-full justify-center hover:bg-primary/20"
                          >
                            {isExpanded ? (
                              <>
                                <ChevronDown size={16} className="mr-2" />
                                Voir moins
                              </>
                            ) : (
                              <>
                                <ChevronRight size={16} className="mr-2" />
                                Voir plus de détails
                              </>
                            )}
                          </Button>
                        </div>

                        {/* Expanded Content */}
                        {isExpanded && (
                          <div className="p-6 space-y-6 animate-in slide-in-from-top duration-500">
                            {/* Detailed Description */}
                            <div>
                              <h4 className="font-semibold mb-3 text-primary flex items-center">
                                <User size={16} className="mr-2" />
                                Description détaillée
                              </h4>
                              <p className="text-muted-foreground leading-relaxed text-sm">
                                {exp.detailedDescription}
                              </p>
                            </div>

                            {/* Achievements */}
                            <div>
                              <h4 className="font-semibold mb-3 text-primary flex items-center">
                                <TrendingUp size={16} className="mr-2" />
                                Réalisations clés
                              </h4>
                              <div className="grid md:grid-cols-2 gap-2">
                                {exp.achievements.map((achievement, idx) => (
                                  <div key={idx} className="text-sm text-muted-foreground flex items-start">
                                    <span className="text-primary mr-2 mt-1">•</span>
                                    <span>{achievement}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Projects */}
                            {exp.projects && (
                              <div>
                                <h4 className="font-semibold mb-3 text-primary">Projets marquants</h4>
                                <div className="grid gap-3">
                                  {exp.projects.map((project, idx) => (
                                    <div key={idx} className="glass p-3 rounded-lg">
                                      <div className="font-medium text-sm">{project.name}</div>
                                      <div className="text-xs text-muted-foreground">{project.description}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                              {/* Technologies */}
                              <div>
                                <h4 className="font-semibold mb-3 text-primary">Technologies utilisées</h4>
                                <div className="flex flex-wrap gap-2">
                                  {exp.technologies.map((tech, idx) => (
                                    <Badge key={idx} variant="secondary" className="text-xs">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Skills */}
                              <div>
                                <h4 className="font-semibold mb-3 text-primary">Compétences développées</h4>
                                <div className="flex flex-wrap gap-2">
                                  {exp.skills.map((skill, idx) => (
                                    <Badge key={idx} className="text-xs bg-primary/20 text-primary border-primary/30">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Metrics */}
                            <div>
                              <h4 className="font-semibold mb-3 text-primary">Métriques</h4>
                              <div className="grid grid-cols-3 gap-4">
                                {Object.entries(exp.metrics).map(([key, value], idx) => (
                                  <div key={idx} className="text-center glass p-3 rounded-lg">
                                    <div className="text-lg font-bold text-primary">{value}</div>
                                    <div className="text-xs text-muted-foreground capitalize">{key}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {[
            { 
              icon: Clock, 
              value: '5+', 
              label: 'Années d\'expérience combinées',
              color: 'text-blue-500'
            },
            { 
              icon: Building, 
              value: '4', 
              label: 'Entreprises/Organisations',
              color: 'text-green-500'
            },
            { 
              icon: Award, 
              value: '15+', 
              label: 'Projets réalisés',
              color: 'text-purple-500'
            },
            { 
              icon: TrendingUp, 
              value: '10+', 
              label: 'Technologies maîtrisées',
              color: 'text-orange-500'
            }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="glass border-primary/20 text-center p-6 hover-glow transform transition-all duration-500 hover:scale-105">
                <Icon size={40} className={`${stat.color} mx-auto mb-4`} />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm leading-tight">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Mon parcours vous intéresse ? Discutons de vos projets !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold hover-glow">
              <Calendar size={20} className="mr-2" />
              Télécharger mon CV complet
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ExternalLink size={20} className="mr-2" />
              Voir mon profil LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEnhanced;