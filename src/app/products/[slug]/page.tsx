import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { products, type Product } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { AnimatedSection } from '@/components/client/AnimatedSection';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

const getProductFromSlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProductFromSlug(params.slug);
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }
  return {
    title: `${product.name} | Volo Lifts & Elevators`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductFromSlug(params.slug);

  if (!product) {
    notFound();
  }

  const productImage = PlaceHolderImages.find((img) => img.id === product.imageId);

  return (
    <div className="container mx-auto max-w-7xl py-12 px-4 md:py-20">
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="sticky top-24 space-y-4">
            {productImage && (
              <Image
                src={productImage.imageUrl}
                alt={product.name}
                width={800}
                height={600}
                className="rounded-2xl shadow-lg w-full"
                data-ai-hint={productImage.imageHint}
              />
            )}
             <h1 className="text-4xl md:text-5xl font-bold">{product.headline}</h1>
          </div>

          <div className="flex flex-col gap-8">
             <Card className="shadow-lg rounded-2xl">
                <CardHeader>
                    <CardTitle>Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
            </Card>

            <Card className="shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle>Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.design}</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg rounded-2xl">
                <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                        </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <div className="bg-primary/10 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xl font-semibold text-primary">{product.priceRange}</p>
                <Button asChild size="lg" className="w-full sm:w-auto font-bold">
                    <Link href="/contact">Request a Consultation</Link>
                </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
