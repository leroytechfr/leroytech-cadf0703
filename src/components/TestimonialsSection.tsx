import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const TestimonialsSection = () => {
  const googleMapsUrl = "https://www.google.com/maps/place/LeroyTech/@43.4049,3.5117,15z/data=!4m8!3m7!1s0x12b6b4a9e0f5f5f5:0x12345!8m2!3d43.4049!4d3.5117!9m1!1b1!16s";

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(210_100%_50%_/_0.05)_0%,_transparent_60%)]" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Avis clients
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Ils nous ont fait <span className="gradient-text">confiance</span>
          </h2>
          
          {/* Google Rating Card */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 max-w-lg mx-auto">
            {/* Google Logo */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-xl font-semibold text-foreground">Google</span>
            </div>
            
            {/* Rating */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-5xl md:text-6xl font-bold text-foreground">4.8</span>
              <span className="text-2xl text-muted-foreground">/5</span>
            </div>
            
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-7 h-7 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted'}`} 
                />
              ))}
            </div>
            
            {/* Reviews count */}
            <p className="text-muted-foreground mb-8">
              Basé sur <span className="font-semibold text-foreground">50 avis</span> vérifiés
            </p>
            
            {/* CTA Button */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group"
            >
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Voir tous les avis
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
