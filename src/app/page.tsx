import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { products } from '@/lib/products';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '@/components/client/AnimatedSection';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
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
        <div className="absolute inset-0 bg-black/50" />
        <AnimatedSection className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            Elevating Your World
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-200">
            Experience the pinnacle of vertical transportation with Volo Elevate. Luxury, performance, and reliability combined.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="font-bold">
              <Link href="#products">Explore Our Series</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary font-bold">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>

      {/* Products Section */}
      <AnimatedSection id="products" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Signature Series</h2>
            <p className="mt-4 text-muted-foreground">
              Discover the perfect blend of style and function with our three distinct elevator series, each engineered to perfection.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {products.map((product) => {
              const productImage = PlaceHolderImages.find(p => p.id === product.imageId);
              return (
                <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                  {productImage && (
                     <Image
                      src={productImage.imageUrl}
                      alt={product.name}
                      width={800}
                      height={600}
                      className="w-full h-48 object-cover"
                      data-ai-hint={productImage.imageHint}
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{product.tagline}</p>
                    <Button asChild variant="link" className="p-0 h-auto font-bold text-primary">
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

      {/* Why Choose Us Section */}
      <AnimatedSection className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold">The Volo Advantage</h2>
              <p className="mt-4 text-muted-foreground">
                We are committed to delivering excellence from consultation to installation and beyond. Your satisfaction is our highest priority.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Unmatched Quality</h3>
                    <p className="text-muted-foreground">Using only the finest materials and state-of-the-art technology for lasting performance.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Bespoke Design</h3>
                    <p className="text-muted-foreground">Tailor-made solutions that reflect your unique style and architectural vision.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Dedicated Support</h3>
                    <p className="text-muted-foreground">Our team of experts provides round-the-clock support and maintenance services.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/seed/advantage/800/600"
                  alt="Volo Elevate technician at work"
                  fill
                  className="object-cover"
                  data-ai-hint="technician working"
                />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
