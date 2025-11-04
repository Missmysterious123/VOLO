import { AnimatedSection } from "@/components/client/AnimatedSection";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Target, Eye, Building, Users, Star, Shield, Zap } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: 'About Us | Volo Lifts & Elevators',
  description: 'Learn about our mission, vision, values, and the dedicated team at Volo Lifts & Elevators.',
};

export default function AboutPage() {

    const missionImage = PlaceHolderImages.find(p => p.id === 'about-mission');
    const visionImage = PlaceHolderImages.find(p => p.id === 'about-vision');
    const team = [
        { name: 'Swaroop', role: 'Founder & CEO', avatar: 'S' },
        { name: 'Haroon', role: 'Head of Engineering', avatar: 'H' },
        { name: 'Faizan', role: 'Lead Technician', avatar: 'F' },
        { name: 'Zabi', role: 'Operations Manager', avatar: 'Z' }
    ];
     const values = [
        { icon: <Shield className="h-8 w-8 text-primary" />, title: 'Safety First', description: 'Our foremost priority is the safety and well-being of our customers and employees.' },
        { icon: <Star className="h-8 w-8 text-primary" />, title: 'Quality & Excellence', description: 'We are committed to the highest standards of quality in our products and services.' },
        { icon: <Zap className="h-8 w-8 text-primary" />, title: 'Innovation', description: 'We embrace innovation to drive progress and deliver cutting-edge solutions.' },
    ];

  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:py-20">
      <AnimatedSection>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Volo Lifts & Elevators</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
            At Volo, we are more than just an elevator company. We are a team of passionate engineers, designers, and technicians dedicated to transforming urban mobility with precision-engineered vertical transport solutions that blend safety, elegance, and reliability.
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
                To deliver precision-engineered, safe, and elegant vertical mobility solutions that enhance the way people live and work, setting new standards for quality and customer satisfaction in every project we undertake.
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
                To become Bangalore’s most trusted and innovative elevator company, recognized for our unwavering commitment to quality, safety, and creating exceptional vertical transportation experiences.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      <AnimatedSection className="mt-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            The principles that guide our work and define our character.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="shadow-lg rounded-2xl text-center">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="mt-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Meet the Team</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            The dedicated professionals powering Volo's success.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarFallback className="text-4xl">{member.avatar}</AvatarFallback>
              </Avatar>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

       <AnimatedSection className="mt-20 text-center">
            <Card className="shadow-lg rounded-2xl inline-block bg-primary text-primary-foreground">
                <CardHeader>
                    <div className="flex items-center gap-4 justify-center">
                        <Building className="h-8 w-8" />
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
