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
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/client/AnimatedSection';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

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
    </div>
  );
}
