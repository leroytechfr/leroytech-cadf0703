import { ArrowRight, Cpu, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(210_100%_50%_/_0.15)_0%,_transparent_50%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide">Montage & Optimisation PC</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Performance.{" "}
            <span className="gradient-text">Fiabilité.</span>
            <br />
            <span className="text-primary">Sur mesure.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Expert en montage PC sur mesure et optimisation système. 
            Des machines taillées pour vos besoins, des performances à la hauteur de vos ambitions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-semibold glow-effect group rounded-xl"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-border hover:bg-muted hover:border-primary/30 px-10 py-7 text-lg rounded-xl"
            >
              Découvrir nos services
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col items-center p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl md:text-3xl font-bold text-foreground">100%</span>
              <span className="text-sm text-muted-foreground">Sur mesure</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl md:text-3xl font-bold text-foreground">+40%</span>
              <span className="text-sm text-muted-foreground">Performances</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl md:text-3xl font-bold text-foreground">2 ans</span>
              <span className="text-sm text-muted-foreground">Garantie</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl md:text-3xl font-bold text-foreground">48h</span>
              <span className="text-sm text-muted-foreground">Réponse</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
