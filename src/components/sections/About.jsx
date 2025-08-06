/**
 * About Section - Portfolio Euloge Mabiala
 * Auteur: MABIALA EULOGE JUNIOR
 * Email: mabiala@et.esiea.fr
 */

import { GraduationCap, Shield, Code, Brain } from 'lucide-react';
import { Card, CardContent } from '../../ui/card';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formation",
      description: "Étudiant en ingénierie avec spécialisation en cybersécurité"
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Expertise en sécurité des systèmes et protection des données"
    },
    {
      icon: Code,
      title: "Développement",
      description: "Maîtrise de multiples langages et frameworks modernes"
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "Approche créative pour résoudre des problèmes complexes"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-6 neon-text">
            À Propos de Moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez mon parcours, mes passions et ce qui me motive dans le domaine de la technologie
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Mon Parcours</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Actuellement étudiant ingénieur, je me spécialise dans la cybersécurité et le développement logiciel. 
                Ma passion pour la technologie m'a conduit à explorer diverses facettes de l'informatique, 
                de la programmation à la sécurité des systèmes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                J'ai acquis une solide expérience dans le développement d'applications web et mobiles, 
                tout en développant une expertise approfondie en cybersécurité. Cette double compétence 
                me permet d'aborder les projets avec une vision holistique de la sécurité.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mon objectif est de contribuer à créer un monde numérique plus sûr en développant 
                des solutions innovantes qui allient performance et sécurité.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Ma Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Je crois fermement que la technologie doit être accessible, sécurisée et au service de l'humanité. 
                Chaque ligne de code que j'écris, chaque système que je sécurise contribue à bâtir un avenir 
                numérique plus fiable et plus inclusif.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="glass border-primary/20 hover-glow group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "3+", label: "Années d'études" },
            { number: "10+", label: "Projets réalisés" },
            { number: "5+", label: "Technologies maîtrisées" },
            { number: "100%", label: "Passion" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

