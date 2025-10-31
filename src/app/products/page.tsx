import { AnimatedSection } from "@/components/client/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { products } from "@/lib/products";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: 'Our Products | Volo Lifts & Elevators',
    description: 'Explore our range of budget, premium, and luxury elevators: the Volo Alto, Volo Relux, and Volo Austre series.',
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:py-20">
      <AnimatedSection>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Elevator Series</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            From budget-friendly solutions to the pinnacle of luxury, our elevator series are designed to meet diverse needs while ensuring safety, reliability, and style.
          </p>
        </div>
      </AnimatedSection>
      
      <AnimatedSection id="products" className="py-16">
        <div className="grid gap-8 md:grid-cols-1">
          {products.map((product) => {
            const productImage = PlaceHolderImages.find(
              (p) => p.id === product.imageId
            );
            return (
              <Card
                key={product.id}
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl flex flex-col md:flex-row items-center"
              >
                {productImage && (
                  <div className="relative h-64 w-full md:w-1/3">
                    <Image
                      src={productImage.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover"
                      data-ai-hint={productImage.imageHint}
                    />
                  </div>
                )}
                <div className="flex flex-col p-6 md:w-2/3">
                    <CardHeader>
                        <CardTitle className="text-3xl">{product.name}</CardTitle>
                        <CardDescription className="text-lg">{product.tagline}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                        <p className="text-muted-foreground mb-6 flex-grow">{product.shortDescription}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-xl font-semibold text-primary mb-4 sm:mb-0">{product.priceRange}</p>
                            <Button
                                asChild
                                className="font-bold"
                            >
                                <Link href={`/products/${product.slug}`}>
                                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </AnimatedSection>
    </div>
  );
}
