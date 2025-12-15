import { Wrench, Brain, Shield, Timer, HeadphonesIcon } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Wrench,
      title: "Sur mesure",
      description: "Chaque PC est monté et optimisé selon vos besoins spécifiques. Pas de solution générique.",
    },
    {
      icon: Brain,
      title: "Expertise technique",
      description: "Des années d'expérience dans le montage et l'optimisation de PC de toutes configurations.",
    },
    {
      icon: Shield,
      title: "Méthodes fiables",
      description: "Techniques éprouvées et sécurisées. Aucun risque pour vos données ou votre matériel.",
    },
    {
      icon: Timer,
      title: "PC durables",
      description: "Des configurations pensées pour durer, avec des composants de qualité et bien assemblés.",
    },
    {
      icon: HeadphonesIcon,
      title: "Accompagnement",
      description: "Conseils personnalisés et support après-vente. Nous restons disponibles pour vous aider.",
    },
  ];

  return (
    <section id="avantages" className="section-padding bg-card/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Pourquoi nous choisir
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Des avantages qui font{" "}
            <span className="gradient-text">la différence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Notre engagement : vous offrir un service de qualité, transparent et adapté à vos besoins.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <advantage.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">
              Des PC montés sur mesure et optimisés intelligemment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
