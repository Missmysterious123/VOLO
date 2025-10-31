import { AnimatedSection } from "@/components/client/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Partner With Us | Volo Lifts & Elevators',
  description: 'Calling Engineers & Architects — Unlocking growth and adding value to our customers through global strategic partnerships.',
};

export default function PartnerPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:py-24 text-center">
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-bold">Partner With Us</h1>
        <p className="mt-6 text-xl md:text-2xl text-muted-foreground">
          Calling Engineers & Architects
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Unlocking growth and adding value to our customers through global strategic partnerships.
        </p>
        <div className="mt-10 bg-card p-8 rounded-2xl shadow-lg inline-block">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild className="font-bold w-full sm:w-auto" variant="outline">
                    <a href="tel:+917019661105">
                        <Phone className="mr-2 h-5 w-5" />
                        +91 7019661105
                    </a>
                </Button>
                <Button asChild className="font-bold w-full sm:w-auto" variant="outline">
                    <a href="mailto:teamvolo@outlook.com">
                        <Mail className="mr-2 h-5 w-5" />
                        teamvolo@outlook.com
                    </a>
                </Button>
            </div>
        </div>
        <div className="mt-12">
            <Button asChild size="lg" className="font-bold">
                <Link href="/contact">Or Submit an Inquiry</Link>
            </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}
