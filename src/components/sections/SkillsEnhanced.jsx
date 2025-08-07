import { useState, useEffect } from 'react';
import { Code, Shield, Database, Globe, Server, Smartphone, Award, TrendingUp, Zap, Target } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Progress } from '../ui/progress';

const SkillsEnhanced = () => {
  const [activeCategory, setActiveCategory] = useState('development');
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

  const skillCategories = {
    development: {
      title: 'Développement',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { 
          name: 'JavaScript/TypeScript', 
          level: 90, 
          description: 'Développement web moderne avec React, Node.js',
          trend: 'up',
          experience: '3+ ans',
          projects: 15
        },
        { 
          name: 'Python', 
          level: 85, 
          description: 'Scripts, automation, data science, cybersécurité',
          trend: 'up',
          experience: '2+ ans',
          projects: 12
        },
        { 
          name: 'Java', 
          level: 80, 
          description: 'Applications enterprise, Android',
          trend: 'stable',
          experience: '2 ans',
          projects: 8
        },
        { 
          name: 'HTML/CSS', 
          level: 95, 
          description: 'Interfaces responsives, animations, Tailwind CSS',
          trend: 'up',
          experience: '4+ ans',
          projects: 20
        },
        { 
          name: 'React/Vue.js', 
          level: 88, 
          description: 'Applications web interactives, SPA modernes',
          trend: 'up',
          experience: '2+ ans',
          projects: 10
        },
        { 
          name: 'Node.js', 
          level: 82, 
          description: 'APIs REST, microservices, temps réel',
          trend: 'up',
          experience: '2 ans',
          projects: 8
        }
      ]
    },
    security: {
      title: 'Cybersécurité',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      skills: [
        { 
          name: 'Analyse de vulnérabilités', 
          level: 85, 
          description: 'Pentesting, audit sécurité, OWASP Top 10',
          trend: 'up',
          experience: '1+ an',
          projects: 6
        },
        { 
          name: 'Cryptographie', 
          level: 78, 
          description: 'Chiffrement, signatures numériques, PKI',
          trend: 'stable',
          experience: '1+ an',
          projects: 4
        },
        { 
          name: 'Sécurité réseau', 
          level: 80, 
          description: 'Firewalls, IDS/IPS, monitoring, analyse trafic',
          trend: 'up',
          experience: '1+ an',
          projects: 5
        },
        { 
          name: 'Forensique numérique', 
          level: 75, 
          description: 'Investigation, analyse d\'incidents, preuves',
          trend: 'up',
          experience: '6 mois',
          projects: 3
        },
        { 
          name: 'Sécurité web', 
          level: 88, 
          description: 'OWASP, sécurisation applications, tests intrusion',
          trend: 'up',
          experience: '1+ an',
          projects: 8
        },
        { 
          name: 'Gestion des risques', 
          level: 82, 
          description: 'Évaluation, mitigation, conformité RGPD',
          trend: 'stable',
          experience: '1 an',
          projects: 4
        }
      ]
    },
    tools: {
      title: 'Outils & Technologies',
      icon: Server,
      color: 'from-green-500 to-teal-500',
      skills: [
        { 
          name: 'Git/GitHub', 
          level: 92, 
          description: 'Versioning, collaboration, CI/CD',
          trend: 'stable',
          experience: '3+ ans',
          projects: 25
        },
        { 
          name: 'Docker', 
          level: 85, 
          description: 'Containerisation, déploiement, orchestration',
          trend: 'up',
          experience: '1+ an',
          projects: 8
        },
        { 
          name: 'Linux/Unix', 
          level: 88, 
          description: 'Administration système, scripting bash',
          trend: 'up',
          experience: '2+ ans',
          projects: 15
        },
        { 
          name: 'Bases de données', 
          level: 80, 
          description: 'MySQL, PostgreSQL, MongoDB, Redis',
          trend: 'stable',
          experience: '2 ans',
          projects: 12
        },
        { 
          name: 'Cloud (AWS/Azure)', 
          level: 75, 
          description: 'Déploiement cloud, DevOps, surveillance',
          trend: 'up',
          experience: '6 mois',
          projects: 4
        },
        { 
          name: 'Wireshark/Burp Suite', 
          level: 82, 
          description: 'Analyse trafic, tests de sécurité',
          trend: 'up',
          experience: '1 an',
          projects: 6
        }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  // Animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = parseInt(entry.target.dataset.skillIndex);
            setTimeout(() => {
              setAnimatedSkills(prev => new Set(prev).add(skillIndex));
            }, skillIndex * 100);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillCards = document.querySelectorAll('[data-skill-card]');
    skillCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [activeCategory]);

  // Reset animations when category changes
  useEffect(() => {
    setAnimatedSkills(new Set());
  }, [activeCategory]);

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <TrendingUp size={16} className="text-green-500" />;
      case 'stable': return <Target size={16} className="text-blue-500" />;
      default: return null;
    }
  };

  const getSkillLevelColor = (level) => {
    if (level >= 90) return 'from-green-500 to-emerald-500';
    if (level >= 80) return 'from-blue-500 to-cyan-500';
    if (level >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-40 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-6 neon-text">
            Compétences Techniques
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un aperçu détaillé de mes compétences techniques avec progression et expérience pratique
          </p>
        </div>

        {/* Enhanced Category Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((category) => {
            const categoryData = skillCategories[category];
            const Icon = categoryData.icon;
            const skillCount = categoryData.skills.length;
            const averageLevel = Math.round(
              categoryData.skills.reduce((acc, skill) => acc + skill.level, 0) / skillCount
            );
            
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative group px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r ' + categoryData.color + ' text-white shadow-2xl scale-105'
                    : 'glass hover:bg-primary/20 border border-primary/20'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    activeCategory === category 
                      ? 'bg-white/20' 
                      : 'bg-primary/20'
                  }`}>
                    <Icon size={24} />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg">{categoryData.title}</div>
                    <div className="text-sm opacity-80">
                      {skillCount} compétences • {averageLevel}% moy.
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories[activeCategory].skills.map((skill, index) => {
            const isAnimated = animatedSkills.has(index);
            const skillLevelColor = getSkillLevelColor(skill.level);
            
            return (
              <Card 
                key={index} 
                data-skill-card
                data-skill-index={index}
                className={`glass border-primary/20 hover-glow group overflow-hidden transform transition-all duration-700 ${
                  isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-bold text-lg">{skill.name}</h4>
                        {getTrendIcon(skill.trend)}
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>{skill.experience}</span>
                        <span>•</span>
                        <span>{skill.projects} projets</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${skillLevelColor} bg-clip-text text-transparent`}>
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar Enhanced */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Niveau de maîtrise</span>
                      <span className="text-sm font-medium">
                        {skill.level >= 90 ? 'Expert' : 
                         skill.level >= 80 ? 'Avancé' : 
                         skill.level >= 70 ? 'Intermédiaire' : 'Débutant'}
                      </span>
                    </div>
                    <div className="relative">
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skillLevelColor} transition-all duration-1000 ease-out rounded-full relative`}
                          style={{ 
                            width: isAnimated ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 150 + 300}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                      <div className="absolute -top-1 right-0 w-2 h-5 bg-primary rounded-full opacity-80 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/20">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Zap size={16} className="text-primary mr-1" />
                        <span className="text-lg font-bold text-primary">{skill.projects}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Projets</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Globe size={16} className="text-primary mr-1" />
                        <span className="text-lg font-bold text-primary">{skill.experience}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Expérience</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Certifications */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            <Award className="inline mr-3 text-primary" size={32} />
            Certifications & Diplômes
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { 
                name: 'Java Basic', 
                provider: 'HackerRank', 
                year: '2023',
                level: 'Certification',
                color: 'from-orange-500 to-red-500'
              },
              { 
                name: 'R Basic', 
                provider: 'HackerRank', 
                year: '2023',
                level: 'Certification',
                color: 'from-blue-500 to-purple-500'
              },
              { 
                name: 'SQL Basic', 
                provider: 'HackerRank', 
                year: '2023',
                level: 'Certification',
                color: 'from-green-500 to-teal-500'
              },
              { 
                name: 'Cybersecurity', 
                provider: 'Formation spécialisée', 
                year: '2024',
                level: 'Certification',
                color: 'from-red-500 to-pink-500'
              }
            ].map((cert, index) => (
              <Card key={index} className="glass border-primary/20 text-center hover-glow group transform transition-all duration-500 hover:scale-105">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center group-hover:animate-pulse`}>
                    <Award className="text-white" size={32} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{cert.provider}</p>
                  <p className="text-xs text-primary font-semibold">{cert.year}</p>
                  <div className="mt-3">
                    <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full">
                      {cert.level}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="glass border-primary/20 text-center p-8 hover-glow">
              <Code size={48} className="text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">
                {skillCategories.development.skills.length}
              </div>
              <div className="text-muted-foreground">Technologies de développement maîtrisées</div>
            </Card>
            
            <Card className="glass border-primary/20 text-center p-8 hover-glow">
              <Shield size={48} className="text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">
                {skillCategories.security.skills.length}
              </div>
              <div className="text-muted-foreground">Compétences en cybersécurité</div>
            </Card>
            
            <Card className="glass border-primary/20 text-center p-8 hover-glow">
              <TrendingUp size={48} className="text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">
                85%
              </div>
              <div className="text-muted-foreground">Niveau moyen de maîtrise</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsEnhanced;