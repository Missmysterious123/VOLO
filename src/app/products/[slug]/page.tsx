import { notFound } from 'next/navigation';
import Image from 'next/image';

import { products, type Product } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { AnimatedSection } from '@/components/client/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    const product = getProductFromSlug(params.slug)
    if (!product) {
        return {
            title: 'Product Not Found'
        }
    }
    return {
        title: `${product.name} | Volo Elevate`,
        description: product.tagline,
    }
}


export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductFromSlug(params.slug);

  if (!product) {
    notFound();
  }

  const productImage = PlaceHolderImages.find((img) => img.id === product.imageId);

  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:py-20">
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="sticky top-24">
            {productImage && (
              <Image
                src={productImage.imageUrl}
                alt={product.name}
                width={800}
                height={600}
                className="rounded-xl shadow-lg w-full"
                data-ai-hint={productImage.imageHint}
              />
            )}
          </div>
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">{product.name}</h1>
                <p className="text-xl text-muted-foreground">{product.tagline}</p>
                <p className="pt-2">{product.description}</p>
            </div>
            
            <Card>
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

            <Card>
                <CardHeader>
                    <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="divide-y">
                        {product.specs.map((spec) => (
                            <div key={spec.label} className="py-3 grid grid-cols-2">
                                <span className="font-medium">{spec.label}</span>
                                <span className="text-muted-foreground">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="bg-primary/10 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-lg font-semibold text-primary">{product.price}</p>
                <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/contact">Request a Consultation</Link>
                </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
