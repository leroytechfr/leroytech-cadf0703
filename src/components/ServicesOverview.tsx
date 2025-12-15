import { Monitor, Settings, ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const ServicesOverview = () => {
  const services = [
    {
      icon: Monitor,
      title: "Montage de PC sur mesure",
      description: "Vous commandez vos composants, nous nous occupons du montage. Gaming, bureautique ou professionnel, bénéficiez d'un assemblage professionnel.",
      href: "#montage",
      features: [
        "Conseils pour vos composants",
        "Vous achetez vos pièces",
        "Montage professionnel",
        "Tests complets inclus",
      ],
      cta: "En savoir plus",
    },
    {
      icon: Settings,
      title: "Optimisation de PC",
      description: "Redonnez vie à votre ordinateur. Nos optimisations logicielles améliorent significativement les performances sans toucher au matériel.",
      href: "#optimisation",
      features: [
        "Gain de performance immédiat",
        "Aucune perte de données",
        "Intervention à distance possible",
        "Résultats garantis",
      ],
      cta: "Booster mon PC",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(210_100%_50%_/_0.05)_0%,_transparent_50%)]" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Nos services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Deux expertises, un objectif :{" "}
            <span className="gradient-text">votre performance</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Que vous souhaitiez un PC neuf parfaitement adapté ou optimiser votre machine actuelle, 
            nous avons la solution qui vous correspond.
          </p>
        </AnimatedSection>

        {/* Services Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <Card className="bg-card border-border h-full group hover:border-primary/40 transition-all duration-500 overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    onClick={() => scrollToSection(service.href)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold group/btn"
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
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

export default ServicesOverview;
