import { AnimatedSection } from "@/components/client/AnimatedSection";
import ContactForm from "@/components/client/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Mail, Phone, MapPin, Handshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: 'Contact Us | Volo Lifts & Elevators',
    description: 'Get in touch with the Volo team. We are here to answer your questions and help you with your next project.',
};

export default function ContactPage() {
    const contactImage1 = PlaceHolderImages.find(p => p.id === 'contact-1');
    const contactImage2 = PlaceHolderImages.find(p => p.id === 'contact-2');

    const partners = [
        { name: 'TorinDrive', category: 'Technology Partner' },
        { name: 'Wittur', category: 'Component Supplier' },
        { name: 'Monarch', category: 'Control Systems' },
        { name: 'Fermator', category: 'Door Systems' },
        { name: 'Montanari Group', category: 'Traction Machines' },
        { name: 'Monadrive', category: 'Drive Systems' },
        { name: 'Arkel', category: 'Electronics' },
        { name: 'Sicor', category: 'Component Supplier' },
        { name: 'Bharat Bijlee', category: 'Motors & Drives' },
        { name: 'Genesis', category: 'Technology Partner' },
        { name: 'Usha Martin', category: 'Wire Ropes' },
        { name: 'GMV', category: 'Hydraulic Systems' },
    ];

  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:py-20">
      <AnimatedSection>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We're here to help. Whether you have a question about our products or want to start a project, our team is ready to answer all your questions.
          </p>
        </div>
      </AnimatedSection>
      
      <div className="mt-12 grid md:grid-cols-2 gap-12">
        <AnimatedSection>
          <div className="bg-card p-8 rounded-2xl shadow-lg h-full">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <ContactForm />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Our Office</h3>
                <div className="space-y-4 text-muted-foreground">
                    <p className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" /> 123 Elegance Tower, Bengaluru, KA, India</p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <Button asChild variant="outline" className="w-full">
                        <a href="mailto:teamvolo@outlook.com"><Mail className="mr-2" /> Email Us</a>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <a href="tel:+917019661105"><Phone className="mr-2" /> Call Us</a>
                      </Button>
                    </div>
                </div>
            </div>
             <div className="grid grid-cols-2 gap-4">
                {contactImage1 && (
                    <Image
                        src={contactImage1.imageUrl}
                        alt={contactImage1.description}
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-lg w-full"
                        data-ai-hint={contactImage1.imageHint}
                    />
                )}
                {contactImage2 && (
                    <Image
                        src={contactImage2.imageUrl}
                        alt={contactImage2.description}
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-lg w-full"
                        data-ai-hint={contactImage2.imageHint}
                    />
                )}
            </div>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection id="partner-with-us" className="py-16 md:py-24 text-center">
        <Card className="shadow-lg rounded-2xl inline-block bg-primary/10">
          <CardHeader>
            <div className="flex items-center gap-4 justify-center">
              <Handshake className="h-8 w-8 text-primary" />
              <CardTitle className="text-3xl">Partner With Us</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are always looking to collaborate with architects, builders, and suppliers who share our commitment to quality and innovation. If you're interested in becoming a partner, please get in touch with us using the contact form above.
            </p>
          </CardContent>
        </Card>
      </AnimatedSection>
      
       <AnimatedSection id="partners" className="pb-16 md:pb-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Our Trusted Partners</h2>
            <p className="mt-4 text-muted-foreground">
              We collaborate with industry leaders to deliver excellence in every project.
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {partners.map((partner, index) => (
              <Card key={index} className="shadow-lg rounded-2xl text-center">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <h3 className="font-bold text-lg mb-2">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">{partner.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
