import { Check, ArrowRight, Monitor, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const PricingSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const pricingPlans = [
    {
      icon: Settings,
      title: "Optimisation PC",
      price: "70",
      description: "Boostez les performances de votre PC actuel",
      features: [
        "Nettoyage logiciel complet",
        "Optimisation Windows",
        "Mise à jour des pilotes",
        "Amélioration du démarrage",
        "Intervention à distance possible",
      ],
      popular: true,
    },
    {
      icon: Monitor,
      title: "Montage Basique",
      price: "100",
      description: "Assemblage professionnel de votre PC",
      features: [
        "Montage complet des composants",
        "Installation Windows",
        "Installation des pilotes",
        "Tests de stabilité",
      ],
      popular: false,
    },
    {
      icon: Monitor,
      title: "Montage Premium",
      price: "150",
      description: "Le montage complet avec finitions haut de gamme",
      features: [
        "Tout le montage basique",
        "Cable management soigné",
        "Optimisation BIOS avancée",
        "Tests de performance étendus",
        "Configuration personnalisée",
      ],
      popular: false,
    },
  ];

  return (
    <section id="tarifs" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(210_100%_50%_/_0.05)_0%,_transparent_60%)]" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Tarifs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Des prix <span className="gradient-text">transparents</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choisissez la formule adaptée à vos besoins. Pas de frais cachés, pas de surprises.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card 
                className={`bg-card border-border h-full relative overflow-hidden transition-all duration-300 hover:border-primary/40 ${
                  plan.popular ? 'border-primary ring-2 ring-primary/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-bl-lg">
                    Populaire
                  </div>
                )}
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <plan.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-foreground">{plan.price}€</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    onClick={scrollToContact}
                    className={`w-full py-6 group ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'bg-secondary hover:bg-secondary/80 text-foreground'
                    }`}
                  >
                    Choisir cette formule
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
