import { Gamepad2, Briefcase, Monitor, Check, Cpu, HardDrive, Wrench, PlayCircle, CheckCircle, Package, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const MontageSection = () => {
  const pcTypes = [
    {
      icon: Gamepad2,
      title: "PC Gaming",
      description: "Des configurations puissantes pour jouer à vos jeux préférés en haute qualité, avec des FPS élevés et stables.",
      badge: "Le plus demandé",
    },
    {
      icon: Monitor,
      title: "PC Bureautique",
      description: "Fiable et efficace pour le travail quotidien, la navigation web et les tâches de productivité.",
      badge: null,
    },
    {
      icon: Briefcase,
      title: "PC Professionnel",
      description: "Stations de travail optimisées pour la création de contenu, le montage vidéo ou les applications exigeantes.",
      badge: "Haute performance",
    },
  ];

  const process = [
    {
      icon: Cpu,
      step: "01",
      title: "Analyse des besoins",
      description: "Nous échangeons sur votre utilisation et votre budget pour vous conseiller la meilleure configuration.",
    },
    {
      icon: HardDrive,
      step: "02",
      title: "Vous commandez vos pièces",
      description: "Vous achetez les composants de votre choix. Nous vous guidons si besoin dans la sélection.",
    },
    {
      icon: Wrench,
      step: "03",
      title: "Montage complet",
      description: "Assemblage soigné avec une gestion optimale des câbles et du refroidissement.",
    },
    {
      icon: PlayCircle,
      step: "04",
      title: "Installation système",
      description: "Windows installé et configuré, pilotes à jour, PC prêt à être utilisé immédiatement.",
    },
    {
      icon: CheckCircle,
      step: "05",
      title: "Tests rigoureux",
      description: "Batterie de tests de performance et de stabilité pour garantir un fonctionnement optimal.",
    },
    {
      icon: Package,
      step: "06",
      title: "Récupération",
      description: "Votre PC est prêt à l'emploi, avec toutes les explications nécessaires.",
    },
  ];

  const benefits = [
    "Conseils personnalisés pour vos composants",
    "Vous choisissez et commandez vos pièces",
    "Montage professionnel et soigné",
    "PC testé et garanti fonctionnel",
    "Support et accompagnement",
    "Tarif montage transparent",
  ];

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="montage" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Montage PC sur mesure
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Un PC conçu <span className="gradient-text">spécialement pour vous</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Vous choisissez et commandez vos composants, nous nous occupons du montage. 
            Un PC parfaitement adapté à vos besoins et votre budget.
          </p>
        </AnimatedSection>

        {/* PC Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {pcTypes.map((type, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="bg-background border-border h-full card-hover relative overflow-hidden group">
                {type.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                    <span className="text-xs font-semibold text-primary">{type.badge}</span>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <type.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{type.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Process */}
        <AnimatedSection className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-16">
            Notre processus de montage
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="flex gap-5 p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 group h-full">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-lg font-bold text-primary">{step.step}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2 text-lg">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Benefits CTA */}
        <AnimatedSection>
          <div className="bg-gradient-to-br from-primary/10 via-card to-accent/5 rounded-3xl p-8 md:p-12 lg:p-16 border border-primary/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Pourquoi choisir le sur-mesure ?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Vous gardez le contrôle sur le choix et l'achat de vos composants, tout en bénéficiant 
                  d'un montage professionnel et de conseils experts pour votre configuration.
                </p>
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg glow-effect group"
                >
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border/50">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MontageSection;
