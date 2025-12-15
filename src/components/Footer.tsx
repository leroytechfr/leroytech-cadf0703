import { Cpu, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = {
    services: [
      { label: "Montage PC Gaming", href: "#montage" },
      { label: "Montage PC Bureautique", href: "#montage" },
      { label: "Montage PC Professionnel", href: "#montage" },
      { label: "Optimisation PC", href: "#optimisation" },
    ],
    navigation: [
      { label: "Accueil", href: "#" },
      { label: "Services", href: "#services" },
      { label: "Avantages", href: "#avantages" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-6" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
              <div className="p-2 rounded-xl bg-primary/10">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Leroy<span className="text-primary">Tech</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
              Spécialiste du montage de PC sur mesure et de l'optimisation de performances. 
              Des machines taillées pour vos besoins, des performances à la hauteur de vos ambitions.
            </p>
            <p className="text-sm text-muted-foreground">
              📍 France métropolitaine
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Nos services</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Navigation</h4>
            <ul className="space-y-3">
              {links.navigation.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => link.href === "#" ? scrollToTop() : scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} LeroyTech. Tous droits réservés. Montage PC sur mesure & Optimisation.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              aria-label="Retour en haut"
            >
              Retour en haut
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
