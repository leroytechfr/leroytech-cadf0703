import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import MontageSection from "@/components/MontageSection";
import OptimisationSection from "@/components/OptimisationSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LeroyTech | Montage PC sur mesure & Optimisation de performances</title>
        <meta
          name="description"
          content="LeroyTech : spécialiste du montage de PC sur mesure (gaming, bureautique, professionnel) et de l'optimisation de performances. Devis gratuit et personnalisé."
        />
        <meta
          name="keywords"
          content="montage PC, PC sur mesure, PC gaming, optimisation PC, optimisation Windows, performances PC, LeroyTech"
        />
        <link rel="canonical" href="https://leroytech.fr" />
        
        {/* Open Graph */}
        <meta property="og:title" content="LeroyTech | Montage PC sur mesure & Optimisation" />
        <meta
          property="og:description"
          content="Des PC montés sur mesure et optimisés pour des performances maximales. Devis gratuit."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "LeroyTech",
            description:
              "Spécialiste du montage de PC sur mesure et de l'optimisation de performances PC.",
            url: "https://leroytech.fr",
            serviceType: ["Montage PC sur mesure", "Optimisation PC"],
            areaServed: "France",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ServicesOverview />
          <MontageSection />
          <OptimisationSection />
          <AdvantagesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
