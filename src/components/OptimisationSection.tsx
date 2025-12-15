import { Settings, Trash2, Rocket, Gamepad2, RefreshCw, Bug, Check, Shield, Clock, Wifi, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const OptimisationSection = () => {
  const optimisations = [
    {
      icon: Settings,
      title: "Optimisation Windows",
      description: "Configuration fine du système pour des performances maximales et une meilleure réactivité.",
    },
    {
      icon: Trash2,
      title: "Nettoyage logiciel",
      description: "Suppression des programmes inutiles, bloatwares et fichiers temporaires qui ralentissent votre PC.",
    },
    {
      icon: Rocket,
      title: "Démarrage accéléré",
      description: "Réduction drastique du temps de démarrage grâce à l'optimisation des programmes au lancement.",
    },
    {
      icon: Gamepad2,
      title: "Optimisation gaming",
      description: "Paramètres optimisés pour de meilleures performances en jeu : plus de FPS, moins de latence.",
    },
    {
      icon: RefreshCw,
      title: "Mise à jour pilotes",
      description: "Installation et configuration des derniers pilotes stables pour tous vos composants.",
    },
    {
      icon: Bug,
      title: "Correction des bugs",
      description: "Résolution des ralentissements, freezes, crashs et autres problèmes de stabilité.",
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Aucun risque",
      description: "Méthodes sûres, aucune perte de données garantie.",
      stat: "100%",
    },
    {
      icon: Clock,
      title: "Intervention rapide",
      description: "Optimisation complète en 2 à 4 heures maximum.",
      stat: "2-4h",
    },
    {
      icon: Wifi,
      title: "À distance possible",
      description: "Intervention sécurisée à distance ou sur place selon votre préférence.",
      stat: "24/7",
    },
  ];

  const results = [
    { label: "Démarrage plus rapide", before: "2-3 min", after: "30 sec" },
    { label: "Ouverture des apps", before: "Lent", after: "Instantané" },
    { label: "FPS en jeu", before: "Instable", after: "Stable" },
    { label: "Freezes & bugs", before: "Fréquents", after: "Éliminés" },
  ];

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="optimisation" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Optimisation PC
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Boostez les performances de{" "}
            <span className="gradient-text">votre PC actuel</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Pas besoin de changer de machine. Notre service d'optimisation 100% logiciel 
            redonne vie à votre ordinateur et améliore significativement ses performances.
          </p>
        </AnimatedSection>

        {/* Advantages with Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {advantages.map((item, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                <h4 className="font-bold text-foreground mb-2 text-lg">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Optimisation Services */}
        <AnimatedSection className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Ce que nous optimisons
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optimisations.map((item, index) => (
              <AnimatedSection key={index} delay={index * 80}>
                <Card className="bg-card border-border card-hover h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Results Comparison */}
        <AnimatedSection>
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Résultats concrets
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Après notre intervention, votre PC retrouve des performances optimales. 
                Voici les améliorations typiques constatées :
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {results.map((result, index) => (
                <div key={index} className="p-6 rounded-2xl bg-background border border-border text-center">
                  <p className="text-foreground font-semibold mb-4">{result.label}</p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground block mb-1">Avant</span>
                      <span className="text-destructive font-medium">{result.before}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary" />
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground block mb-1">Après</span>
                      <span className="text-primary font-bold">{result.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg glow-effect group"
              >
                Optimiser mon PC maintenant
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OptimisationSection;
