import { Settings, Trash2, Rocket, Gamepad2, RefreshCw, Bug, Check, Zap, Shield, Clock, Wifi } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const OptimisationSection = () => {
  const optimisations = [
    {
      icon: Settings,
      title: "Optimisation Windows",
      description: "Configuration fine du système pour des performances maximales.",
    },
    {
      icon: Trash2,
      title: "Nettoyage logiciel",
      description: "Suppression des programmes inutiles et des fichiers temporaires.",
    },
    {
      icon: Rocket,
      title: "Démarrage accéléré",
      description: "Réduction drastique du temps de démarrage de votre PC.",
    },
    {
      icon: Gamepad2,
      title: "Optimisation gaming",
      description: "Paramètres optimisés pour de meilleures performances en jeu.",
    },
    {
      icon: RefreshCw,
      title: "Mise à jour pilotes",
      description: "Installation et configuration des derniers pilotes stables.",
    },
    {
      icon: Bug,
      title: "Correction des bugs",
      description: "Résolution des ralentissements, freezes et crashs.",
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Gain immédiat",
      description: "Des performances améliorées dès la fin de l'intervention.",
    },
    {
      icon: Shield,
      title: "Aucun risque",
      description: "Méthodes sûres, aucune perte de données.",
    },
    {
      icon: Clock,
      title: "Intervention rapide",
      description: "Optimisation complète en quelques heures.",
    },
    {
      icon: Wifi,
      title: "À distance ou sur place",
      description: "Intervention selon votre préférence.",
    },
  ];

  const results = [
    "Démarrage plus rapide",
    "Applications plus réactives",
    "Meilleurs FPS en jeu",
    "Moins de bugs et freezes",
    "Système plus stable",
    "Expérience fluide",
  ];

  return (
    <section id="optimisation" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Optimisation PC
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Boostez les performances de{" "}
            <span className="gradient-text">votre PC actuel</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pas besoin de changer de machine. Notre service d'optimisation 100% logiciel 
            redonne vie à votre ordinateur et améliore significativement ses performances.
          </p>
        </div>

        {/* Optimisation Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {optimisations.map((item, index) => (
            <Card key={index} className="bg-card border-border card-hover">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {advantages.map((item, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Résultats concrets
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Après notre intervention, votre PC retrouve des performances optimales. 
              Voici ce que vous pouvez attendre :
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {results.map((result, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimisationSection;
