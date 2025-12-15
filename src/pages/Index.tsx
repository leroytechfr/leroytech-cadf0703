import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import MontageSection from "@/components/MontageSection";
import OptimisationSection from "@/components/OptimisationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://leroytech.fr/#organization",
    name: "LeroyTech",
    description: "Spécialiste du montage de PC sur mesure (gaming, bureautique, professionnel) et de l'optimisation de performances PC. Devis gratuit et personnalisé.",
    url: "https://leroytech.fr",
    logo: "https://leroytech.fr/logo.png",
    image: "https://leroytech.fr/og-image.jpg",
    telephone: "+33600000000",
    email: "contact@leroytech.fr",
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
      addressRegion: "France",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8566,
      longitude: 2.3522,
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    serviceType: [
      "Montage PC sur mesure",
      "Montage PC Gaming",
      "Montage PC Bureautique", 
      "Montage PC Professionnel",
      "Optimisation PC",
      "Optimisation Windows",
      "Optimisation performances gaming",
    ],
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte un PC sur mesure ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le prix varie selon vos besoins et votre budget. Nous proposons des configurations à partir de 600€ pour un PC bureautique, 900€ pour un PC gaming entrée de gamme, et jusqu'à plusieurs milliers d'euros pour des stations de travail professionnelles. Chaque devis est personnalisé et gratuit.",
        },
      },
      {
        "@type": "Question",
        name: "Quel est le délai de montage d'un PC ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Une fois les composants reçus, le montage complet (assemblage, installation système, tests) prend généralement 2 à 5 jours ouvrés. Le délai total dépend de la disponibilité des pièces sélectionnées.",
        },
      },
      {
        "@type": "Question",
        name: "L'optimisation PC efface-t-elle mes données ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non, absolument pas. Notre service d'optimisation est 100% logiciel et préserve toutes vos données personnelles, documents, photos et programmes. Nous optimisons Windows et les paramètres système sans toucher à vos fichiers.",
        },
      },
      {
        "@type": "Question",
        name: "Proposez-vous l'intervention à distance ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, l'optimisation PC peut être réalisée à distance via une connexion sécurisée. C'est pratique, rapide, et vous pouvez suivre l'intervention en temps réel.",
        },
      },
      {
        "@type": "Question",
        name: "Offrez-vous une garantie sur vos services ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Les PC montés bénéficient de la garantie constructeur sur chaque composant (généralement 2 à 5 ans). Pour l'optimisation, nous garantissons le résultat : si vous n'êtes pas satisfait, nous intervenons à nouveau gratuitement.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>LeroyTech | Montage PC sur mesure & Optimisation de performances | France</title>
        <meta
          name="description"
          content="LeroyTech, expert en montage de PC sur mesure (gaming, bureautique, professionnel) et optimisation de performances. Devis gratuit sous 48h. +500 PC montés, 98% clients satisfaits."
        />
        <meta
          name="keywords"
          content="montage PC sur mesure, PC gaming, PC bureautique, PC professionnel, optimisation PC, optimisation Windows, performances PC, montage ordinateur, assemblage PC, LeroyTech, France"
        />
        <meta name="author" content="LeroyTech" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://leroytech.fr" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leroytech.fr" />
        <meta property="og:title" content="LeroyTech | Montage PC sur mesure & Optimisation" />
        <meta
          property="og:description"
          content="Expert en montage de PC sur mesure et optimisation système. Des machines taillées pour vos besoins, des performances à la hauteur de vos ambitions. Devis gratuit."
        />
        <meta property="og:image" content="https://leroytech.fr/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="LeroyTech" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://leroytech.fr" />
        <meta name="twitter:title" content="LeroyTech | Montage PC sur mesure & Optimisation" />
        <meta
          name="twitter:description"
          content="Expert en montage de PC sur mesure et optimisation système. Devis gratuit sous 48h."
        />
        <meta name="twitter:image" content="https://leroytech.fr/og-image.jpg" />

        {/* Additional Meta */}
        <meta name="theme-color" content="#0066FF" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        
        {/* Structured Data - LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Structured Data - FAQ */}
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ServicesOverview />
          <MontageSection />
          <OptimisationSection />
          <TestimonialsSection />
          <AdvantagesSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
