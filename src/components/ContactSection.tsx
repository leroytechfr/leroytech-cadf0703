import { useState } from "react";
import { Send, Mail, MessageSquare, User, CheckCircle, Phone, MapPin, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    formule: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé avec succès !",
      description: "Nous vous répondrons dans les 24 à 48 heures.",
    });

    setFormData({ name: "", email: "", phone: "", formule: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const benefits = [
    "Réponse garantie sous 24-48h",
    "Devis personnalisé et gratuit",
    "Aucun engagement de votre part",
    "Conseils d'expert inclus",
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Prêt à passer à <span className="gradient-text">l'action</span> ?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Décrivez-nous votre projet ou vos besoins. Nous vous répondons rapidement 
              avec une solution adaptée et un devis personnalisé.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Benefits Sidebar */}
            <AnimatedSection className="lg:col-span-2" delay={100}>
              <div className="bg-gradient-to-br from-primary/10 via-card to-accent/5 rounded-2xl p-8 border border-primary/20 h-full">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Ce que vous obtenez
                </h3>
                <ul className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-8 border-t border-border/50">
                  <h4 className="font-semibold text-foreground mb-4">Autres moyens de contact</h4>
                  <div className="space-y-4">
                    <a href="mailto:contact@leroytech.fr" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>contact@leroytech.fr</span>
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5" />
                      <span>France métropolitaine</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-3" delay={200}>
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Nom *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-primary h-12"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-primary h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        Téléphone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="06 XX XX XX XX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary h-12"
                      />
                    </div>

                    {/* Formule */}
                    <div className="space-y-2">
                      <label htmlFor="formule" className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Package className="w-4 h-4 text-primary" />
                        Formule *
                      </label>
                      <Select
                        value={formData.formule}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, formule: value }))}
                        required
                      >
                        <SelectTrigger className="bg-background border-border focus:border-primary h-12">
                          <SelectValue placeholder="Choisissez une formule" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="montage-basique">Montage Basique – 100€</SelectItem>
                          <SelectItem value="montage-premium">Montage Premium – 150€</SelectItem>
                          <SelectItem value="optimisation">Optimisation PC – 70€</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Sujet *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Ex: Montage PC Gaming, Optimisation laptop..."
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary h-12"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez votre projet, vos besoins, votre budget approximatif..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-7 text-lg font-semibold glow-effect"
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        Envoyer ma demande
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  {/* Privacy note */}
                  <p className="text-center text-sm text-muted-foreground">
                    Vos données sont protégées et ne seront jamais partagées.
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
