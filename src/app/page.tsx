import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { products } from '@/lib/products';
import { ArrowRight, Star, Shield, Zap, Wrench, Settings } from 'lucide-react';
import { AnimatedSection } from '@/components/client/AnimatedSection';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const whyVoloImage = PlaceHolderImages.find((img) => img.id === 'why-volo');

  const whyVoloFeatures = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Uncompromising Safety',
      description: 'Our elevators are built with the highest safety standards, ensuring peace of mind for you and your family.',
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: 'Seamless Performance',
      description: 'Experience smooth, quiet, and reliable vertical transport with our cutting-edge technology.',
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: 'Expert Installation & Service',
      description: 'Our certified technicians ensure a flawless installation and provide prompt, hassle-free maintenance.',
    },
  ];

  const testimonials = [
    {
      name: 'Rohan Sharma',
      location: 'Bengaluru',
      avatar: 'RS',
      testimonial: 'The Volo Relux elevator is the centerpiece of our new home. The design is stunning, and the ride is incredibly smooth. The installation team was professional and efficient.',
    },
    {
      name: 'Priya Mehta',
      location: 'Bengaluru',
      avatar: 'PM',
      testimonial: "We chose the Volo Alto for its affordability and quality. It has been a fantastic addition to our multi-story residence, making it so much more accessible for my elderly parents.",
    },
    {
        name: 'Anjali Desai',
        location: 'Bengaluru',
        avatar: 'AD',
        testimonial: "Luxury and performance in one package. The Volo Austre series is simply breathtaking. It's more than just an elevator; it's a statement piece. Worth every penny.",
      },
  ];

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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <AnimatedSection className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Elegant. Budget. Luxury Lifts.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto">
            A house with an elegant modern lift & elevator that is perfect for you & your family, now comes at an affordable price.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="font-bold bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>

      {/* Why Volo Section */}
      <AnimatedSection id="why-volo" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Volo?</h2>
            <p className="mt-4 text-muted-foreground">
              We deliver more than just elevators. We provide vertical mobility solutions that blend safety, elegance, and reliability.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {whyVoloFeatures.map((feature, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {whyVoloImage && (
                <Image
                  src={whyVoloImage.imageUrl}
                  alt={whyVoloImage.description}
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-lg w-full"
                  data-ai-hint={whyVoloImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Products Section */}
      <AnimatedSection id="products" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Our Signature Series</h2>
            <p className="mt-4 text-muted-foreground">
              Discover the perfect blend of style and function with our three distinct elevator series, each engineered to perfection to meet your unique needs and budget.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {products.map((product) => {
              const productImage = PlaceHolderImages.find(
                (p) => p.id === product.imageId
              );
              return (
                <Card
                  key={product.id}
                  className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl flex flex-col"
                >
                  {productImage && (
                    <div className="relative h-56 w-full">
                      <Image
                        src={productImage.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover"
                        data-ai-hint={productImage.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-grow">{product.shortDescription}</p>
                    <Button
                      asChild
                      variant="link"
                      className="p-0 h-auto font-bold text-primary self-start"
                    >
                      <Link href={`/products/${product.slug}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection id="testimonials" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 text-muted-foreground">
              Hear from homeowners who have elevated their living spaces with Volo.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg rounded-2xl flex flex-col">
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <blockquote className="text-muted-foreground flex-grow">
                    “{testimonial.testimonial}”
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Partners Section */}
      <AnimatedSection id="partners" className="py-16 md:py-24 bg-background">
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
                    <div className="mb-4 text-primary">
                        <Settings className="h-8 w-8" />
                    </div>
                  <h3 className="font-bold text-lg">{partner.name}</h3>
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
