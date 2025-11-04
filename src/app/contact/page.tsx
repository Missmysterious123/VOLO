import { AnimatedSection } from "@/components/client/AnimatedSection";
import ContactForm from "@/components/client/ContactForm";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: 'Contact Us | Volo Lifts & Elevators',
    description: 'Get in touch with the Volo team. We are here to answer your questions and help you with your next project.',
};

export default function ContactPage() {
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
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
