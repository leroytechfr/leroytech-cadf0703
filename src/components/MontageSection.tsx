import { Gamepad2, Briefcase, Monitor, Check, Cpu, HardDrive, Wrench, PlayCircle, CheckCircle, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MontageSection = () => {
  const pcTypes = [
    {
      icon: Gamepad2,
      title: "PC Gaming",
      description: "Des configurations puissantes pour jouer à vos jeux préférés en haute qualité, avec des FPS élevés et stables.",
    },
    {
      icon: Monitor,
      title: "PC Bureautique",
      description: "Fiable et efficace pour le travail quotidien, la navigation web et les tâches de productivité.",
    },
    {
      icon: Briefcase,
      title: "PC Professionnel",
      description: "Stations de travail optimisées pour la création de contenu, le montage vidéo ou les applications exigeantes.",
    },
  ];

  const process = [
    {
      icon: Cpu,
      title: "Analyse des besoins",
      description: "Nous échangeons sur votre utilisation et votre budget pour définir la meilleure configuration.",
    },
    {
      icon: HardDrive,
      title: "Sélection des composants",
      description: "Choix minutieux des pièces pour un équilibre parfait entre performance et fiabilité.",
    },
    {
      icon: Wrench,
      title: "Montage complet",
      description: "Assemblage soigné par nos experts avec une gestion optimale des câbles et du refroidissement.",
    },
    {
      icon: PlayCircle,
      title: "Installation système",
      description: "Windows installé et configuré, pilotes à jour, PC prêt à être utilisé immédiatement.",
    },
    {
      icon: CheckCircle,
      title: "Tests rigoureux",
      description: "Batterie de tests de performance et de stabilité pour garantir un fonctionnement optimal.",
    },
    {
      icon: Package,
      title: "Livraison",
      description: "Votre PC est livré prêt à l'emploi, avec toutes les explications nécessaires.",
    },
  ];

  const benefits = [
    "Configuration 100% adaptée à vos besoins",
    "Composants de qualité sélectionnés avec soin",
    "Gain de temps : on s'occupe de tout",
    "PC testé et garanti fonctionnel",
    "Support et conseils personnalisés",
  ];

  return (
    <section id="montage" className="section-padding bg-card/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Montage PC sur mesure
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Un PC conçu <span className="gradient-text">spécialement pour vous</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oubliez les configurations standardisées. Nous créons le PC qui correspond exactement 
            à vos besoins, votre budget et vos ambitions.
          </p>
        </div>

        {/* PC Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {pcTypes.map((type, index) => (
            <Card key={index} className="bg-background border-border card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Notre processus de montage
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Pourquoi choisir le sur-mesure ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Un PC monté sur mesure vous garantit exactement les performances dont vous avez besoin, 
                sans payer pour des fonctionnalités inutiles.
              </p>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MontageSection;
