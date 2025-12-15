import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Thomas D.",
      role: "Gamer passionné",
      content: "Mon PC gaming tourne comme une horloge. LeroyTech a parfaitement compris mes besoins et mon budget. Je recommande à 100% !",
      rating: 5,
    },
    {
      name: "Marie L.",
      role: "Entrepreneuse",
      content: "L'optimisation de mon PC a été bluffante. Démarrage ultra rapide, plus de freezes. C'est comme avoir un nouvel ordinateur.",
      rating: 5,
    },
    {
      name: "Alexandre P.",
      role: "Créateur de contenu",
      content: "Station de travail montée sur mesure pour le montage vidéo. Performances excellentes, travail propre et professionnel.",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(210_100%_50%_/_0.05)_0%,_transparent_60%)]" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ils nous ont fait <span className="gradient-text">confiance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez les retours de nos clients satisfaits par nos services de montage PC et d'optimisation.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <Card className="bg-card border-border h-full hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Quote icon */}
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-primary/30 group-hover:text-primary/50 transition-colors" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="pt-6 border-t border-border">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust indicators */}
        <AnimatedSection delay={500} className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Clients satisfaits</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-border" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">PC montés</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-border" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5★</div>
              <p className="text-sm text-muted-foreground">Note moyenne</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
