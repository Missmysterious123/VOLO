import { AnimatedSection } from "@/components/client/AnimatedSection";
import ContactForm from "@/components/client/ContactForm";
import Map from "@/components/client/Map";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
    title: 'Contact Us | Volo Elevate',
    description: 'Get in touch with the Volo Elevate team. We are here to answer your questions and help you with your next project.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:py-20">
      <AnimatedSection>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Get In Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We're here to help. Whether you have a question about our products or want to start a project, our team is ready to answer all your questions.
          </p>
        </div>
      </AnimatedSection>
      
      <div className="mt-12 grid md:grid-cols-2 gap-12">
        <AnimatedSection>
          <div className="bg-card p-8 rounded-xl shadow-lg h-full">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <ContactForm />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Our Office</h3>
                <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary flex-shrink-0" /> 123 Elegance Tower, Bengaluru, KA, India</p>
                    <p className="flex items-start gap-3"><Mail className="h-5 w-5 text-primary flex-shrink-0" /> contact@voloelevate.com</p>
                    <p className="flex items-start gap-3"><Phone className="h-5 w-5 text-primary flex-shrink-0" /> +91 80 1234 5678</p>
                </div>
            </div>
            <div className="h-80 rounded-xl overflow-hidden shadow-lg">
              <Map />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
