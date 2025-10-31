import { AnimatedSection } from "@/components/client/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Target, Eye, Building } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: 'About Us | Volo Lifts & Elevators',
  description: 'Learn about our mission, vision, and corporate values at Volo Lifts & Elevators.',
};

export default function AboutPage() {

    const missionImage = PlaceHolderImages.find(p => p.id === 'about-mission');
    const visionImage = PlaceHolderImages.find(p => p.id === 'about-vision');

  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:py-20">
      <AnimatedSection>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Volo Lifts & Elevators</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            Rising beyond limits, with safety & style. We are dedicated to transforming urban mobility with our precision-engineered vertical transport solutions.
          </p>
        </div>
      </AnimatedSection>
      
      <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
            {missionImage && (
                <Image 
                    src={missionImage.imageUrl}
                    alt={missionImage.description}
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-lg w-full"
                    data-ai-hint={missionImage.imageHint}
                />
            )}
        </AnimatedSection>
        <AnimatedSection>
          <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Target className="h-8 w-8 text-primary" />
                <CardTitle className="text-3xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Deliver precision-engineered, safe & elegant vertical mobility solutions that enhance the way people live and work.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection className="md:order-2">
            {visionImage && (
                <Image 
                    src={visionImage.imageUrl}
                    alt={visionImage.description}
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-lg w-full"
                    data-ai-hint={visionImage.imageHint}
                />
            )}
        </AnimatedSection>
        <AnimatedSection className="md:order-1">
          <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Eye className="h-8 w-8 text-primary" />
                <CardTitle className="text-3xl">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                To set new benchmarks in urban mobility and be Bangalore’s most trusted elevator company.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

       <AnimatedSection className="mt-16 text-center">
            <Card className="shadow-lg rounded-2xl inline-block">
                <CardHeader>
                    <div className="flex items-center gap-4 justify-center">
                        <Building className="h-8 w-8 text-primary" />
                        <CardTitle className="text-3xl">Corporate Statement</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-xl font-semibold italic">
                        “Rising beyond limits, with safety & style.”
                    </p>
                </CardContent>
            </Card>
       </AnimatedSection>

    </div>
  );
}
