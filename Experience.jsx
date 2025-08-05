import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Étudiant Ingénieur en Cybersécurité',
      company: 'École d\'Ingénierie',
      location: 'France',
      period: '2022 - Présent',
      type: 'Formation',
      description: 'Formation approfondie en cybersécurité, développement logiciel et gestion de projets techniques.',
      achievements: [
        'Spécialisation en sécurité des systèmes d\'information',
        'Projets pratiques en développement sécurisé',
        'Participation à des CTF (Capture The Flag)',
        'Certification en langages de programmation'
      ],
      technologies: ['Python', 'Java', 'JavaScript', 'Cryptographie', 'Réseaux', 'Linux']
    },
    {
      id: 2,
      title: 'Développeur Web Junior',
      company: 'Projet Personnel',
      location: 'Remote',
      period: '2023 - Présent',
      type: 'Projet',
      description: 'Développement d\'applications web modernes avec focus sur la sécurité et l\'expérience utilisateur.',
      achievements: [
        'Création de plusieurs applications web responsives',
        'Implémentation de mesures de sécurité avancées',
        'Optimisation des performances et de l\'accessibilité',
        'Utilisation de frameworks modernes'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Docker']
    },
    {
      id: 3,
      title: 'Analyste en Cybersécurité',
      company: 'Stage d\'été',
      location: 'France',
      period: 'Été 2023',
      type: 'Stage',
      description: 'Stage intensif en analyse de vulnérabilités et audit de sécurité pour des systèmes d\'entreprise.',
      achievements: [
        'Audit de sécurité de 15+ applications web',
        'Identification et documentation de vulnérabilités',
        'Recommandations de sécurisation',
        'Formation aux outils d\'audit automatisé'
      ],
      technologies: ['Burp Suite', 'OWASP ZAP', 'Nmap', 'Wireshark', 'Metasploit', 'Kali Linux']
    },
    {
      id: 4,
      title: 'Baccalauréat Scientifique',
      company: 'Lycée',
      location: 'France',
      period: '2019 - 2022',
      type: 'Formation',
      description: 'Formation scientifique avec spécialisation en mathématiques et sciences de l\'ingénieur.',
      achievements: [
        'Mention Bien au Baccalauréat',
        'Spécialité Mathématiques et NSI',
        'Projets en programmation Python',
        'Participation aux Olympiades de Mathématiques'
      ],
      technologies: ['Python', 'Mathématiques', 'Physique', 'Sciences de l\'Ingénieur']
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Formation': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Stage': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Projet': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-6 neon-text">
            Expérience & Formation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mon parcours académique et professionnel dans le domaine de la cybersécurité et du développement
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-30"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <Card className="glass border-primary/20 hover-glow">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                          <p className="text-primary font-semibold mb-2">{exp.company}</p>
                        </div>
                        <Badge className={`${getTypeColor(exp.type)} border`}>
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-primary">Réalisations clés :</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Technologies utilisées :</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Intéressé par mon parcours ? Téléchargez mon CV complet pour plus de détails.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-glow transition-all duration-300">
              Télécharger CV (PDF)
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <ExternalLink size={20} className="inline mr-2" />
              Voir profil LinkedIn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

