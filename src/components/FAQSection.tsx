import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const FAQSection = () => {
  const faqs = [
    {
      question: "Combien coûte un PC sur mesure ?",
      answer: "Le prix varie selon vos besoins et votre budget. Nous proposons des configurations à partir de 600€ pour un PC bureautique, 900€ pour un PC gaming entrée de gamme, et jusqu'à plusieurs milliers d'euros pour des stations de travail professionnelles. Chaque devis est personnalisé et gratuit.",
    },
    {
      question: "Quel est le délai de montage d'un PC ?",
      answer: "Une fois les composants reçus, le montage complet (assemblage, installation système, tests) prend généralement 2 à 5 jours ouvrés. Le délai total dépend de la disponibilité des pièces sélectionnées.",
    },
    {
      question: "L'optimisation PC efface-t-elle mes données ?",
      answer: "Non, absolument pas. Notre service d'optimisation est 100% logiciel et préserve toutes vos données personnelles, documents, photos et programmes. Nous optimisons Windows et les paramètres système sans toucher à vos fichiers.",
    },
    {
      question: "Proposez-vous l'intervention à distance ?",
      answer: "Oui, l'optimisation PC peut être réalisée à distance via une connexion sécurisée. C'est pratique, rapide, et vous pouvez suivre l'intervention en temps réel. Le montage de PC nécessite évidemment une intervention physique.",
    },
    {
      question: "Offrez-vous une garantie sur vos services ?",
      answer: "Oui. Les PC montés bénéficient de la garantie constructeur de 2 ans sur chaque composant. Pour l'optimisation, nous garantissons le résultat : si vous n'êtes pas satisfait, nous intervenons à nouveau gratuitement.",
    },
    {
      question: "Quels types de PC montez-vous ?",
      answer: "Nous montons tous types de PC : gaming (du milieu de gamme au très haut de gamme), bureautique, stations de travail pour créateurs de contenu, montage vidéo, modélisation 3D, et configurations professionnelles spécifiques à vos logiciels métier.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-card/50">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Retrouvez les réponses aux questions les plus courantes sur nos services de montage PC et d'optimisation.
          </p>
        </AnimatedSection>

        <AnimatedSection className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-6 text-base md:text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
