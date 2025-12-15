import { Wrench, Brain, Shield, Timer, HeadphonesIcon, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Wrench,
      title: "100% Sur mesure",
      description: "Chaque PC est monté et optimisé selon vos besoins spécifiques. Pas de solution générique, que du personnalisé.",
    },
    {
      icon: Brain,
      title: "Expertise technique",
      description: "Des années d'expérience dans le montage et l'optimisation de PC de toutes configurations, du gaming au professionnel.",
    },
    {
      icon: Shield,
      title: "Méthodes sécurisées",
      description: "Techniques éprouvées et sécurisées. Aucun risque pour vos données ou votre matériel. Garantie de résultat.",
    },
    {
      icon: Timer,
      title: "PC durables",
      description: "Des configurations pensées pour durer, avec des composants de qualité sélectionnés pour leur fiabilité.",
    },
    {
      icon: HeadphonesIcon,
      title: "Accompagnement complet",
      description: "Conseils personnalisés avant, pendant et après. Support réactif et disponible pour toutes vos questions.",
    },
    {
      icon: Award,
      title: "Satisfaction garantie",
      description: "98% de clients satisfaits. Si le résultat ne vous convient pas, nous intervenons à nouveau gratuitement.",
    },
  ];

  return (
    <section id="avantages" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Pourquoi nous choisir
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Des avantages qui font{" "}
            <span className="gradient-text">la différence</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Notre engagement : vous offrir un service de qualité, transparent et adapté à vos besoins réels.
          </p>
        </AnimatedSection>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust Banner */}
        <AnimatedSection delay={600} className="mt-20">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20" />
            <div className="relative px-8 py-12 md:py-16 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Des PC montés sur mesure et optimisés intelligemment
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pour des performances maximales, une stabilité totale et une expérience fluide au quotidien.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AdvantagesSection;
