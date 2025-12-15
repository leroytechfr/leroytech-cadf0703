import { Monitor, Settings, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesOverview = () => {
  const services = [
    {
      icon: Monitor,
      title: "Montage de PC sur mesure",
      description: "Un PC conçu spécialement pour vous. Gaming, bureautique ou professionnel, nous assemblons la configuration idéale selon vos besoins et votre budget.",
      href: "#montage",
      features: ["PC Gaming", "PC Bureautique", "PC Professionnel"],
    },
    {
      icon: Settings,
      title: "Optimisation de PC",
      description: "Redonnez vie à votre ordinateur. Nos optimisations logicielles améliorent significativement les performances sans toucher au matériel.",
      href: "#optimisation",
      features: ["Windows optimisé", "Démarrage rapide", "Performances en jeu"],
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Nos services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Deux expertises, un objectif :{" "}
            <span className="gradient-text">votre satisfaction</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Que vous souhaitiez un PC neuf parfaitement adapté ou optimiser votre machine actuelle, 
            nous avons la solution.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border card-hover cursor-pointer group"
              onClick={() => scrollToSection(service.href)}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
