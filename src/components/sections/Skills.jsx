import { useState } from 'react';
import { Code, Shield, Database, Globe, Server, Smartphone, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('development');

  const skillCategories = {
    development: {
      title: 'Développement',
      icon: Code,
      skills: [
        { name: 'JavaScript/TypeScript', level: 90, description: 'Développement web moderne avec React, Node.js' },
        { name: 'Python', level: 85, description: 'Scripts, automation, data science' },
        { name: 'Java', level: 80, description: 'Applications enterprise, Android' },
        { name: 'HTML/CSS', level: 95, description: 'Interfaces responsives, animations' },
        { name: 'React/Vue.js', level: 88, description: 'Applications web interactives' },
        { name: 'Node.js', level: 82, description: 'APIs REST, microservices' }
      ]
    },
    security: {
      title: 'Cybersécurité',
      icon: Shield,
      skills: [
        { name: 'Analyse de vulnérabilités', level: 85, description: 'Pentesting, audit sécurité' },
        { name: 'Cryptographie', level: 78, description: 'Chiffrement, signatures numériques' },
        { name: 'Sécurité réseau', level: 80, description: 'Firewalls, IDS/IPS, monitoring' },
        { name: 'Forensique numérique', level: 75, description: 'Investigation, analyse d\'incidents' },
        { name: 'Sécurité web', level: 88, description: 'OWASP, sécurisation applications' },
        { name: 'Gestion des risques', level: 82, description: 'Évaluation, mitigation des risques' }
      ]
    },
    tools: {
      title: 'Outils & Technologies',
      icon: Server,
      skills: [
        { name: 'Git/GitHub', level: 92, description: 'Versioning, collaboration' },
        { name: 'Docker', level: 85, description: 'Containerisation, déploiement' },
        { name: 'Linux/Unix', level: 88, description: 'Administration système' },
        { name: 'Bases de données', level: 80, description: 'MySQL, PostgreSQL, MongoDB' },
        { name: 'Cloud (AWS/Azure)', level: 75, description: 'Déploiement cloud, DevOps' },
        { name: 'Wireshark', level: 82, description: 'Analyse de trafic réseau' }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-6 neon-text">
            Compétences Techniques
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un aperçu de mes compétences techniques dans le développement logiciel et la cybersécurité
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const categoryData = skillCategories[category];
            const Icon = categoryData.icon;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'glass hover:bg-primary/20'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{categoryData.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <Card key={index} className="glass border-primary/20 hover-glow group">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-lg">{skill.name}</h4>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="mb-3 h-2"
                />
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Java Basic', provider: 'HackerRank', year: '2023' },
              { name: 'R Basic', provider: 'HackerRank', year: '2023' },
              { name: 'SQL Basic', provider: 'HackerRank', year: '2023' },
              { name: 'Baccalauréat', provider: 'Éducation Nationale', year: '2022' }
            ].map((cert, index) => (
              <Card key={index} className="glass border-primary/20 text-center hover-glow">
                <CardContent className="p-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="text-primary" size={24} />
                  </div>
                  <h4 className="font-bold mb-1">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{cert.provider}</p>
                  <p className="text-xs text-primary">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

