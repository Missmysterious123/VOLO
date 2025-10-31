export type Product = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  headline: string;
  shortDescription: string;
  description: string;
  priceRange: string;
  design: string;
  features: string[];
  imageId: string;
};

export const products: Product[] = [
  {
    id: 'alto',
    name: 'Volo Alto Series',
    slug: 'alto',
    tagline: 'Budget Lifts',
    headline: 'Volo Alto Series — Budget Lifts',
    shortDescription: 'Smooth performance with a geared/gearless traction system, perfect for residential use.',
    description: 'The Volo Alto Series offers smooth performance with its efficient geared/gearless traction system. It supports up to 4 stops and a capacity of 408kg, making it a versatile choice for both indoor and outdoor installations.',
    priceRange: '₹5.95L – ₹8.6L',
    design: 'Features powder-coated solid color doors and a stainless steel cabin without a mirror, focusing on functionality and durability.',
    features: [
      'Efficient Performance',
      'Counterweight System',
      'Guided Safety Features',
      'Up to 4 stops',
      '408kg capacity',
      'Indoor/Outdoor compatible',
    ],
    imageId: 'alto',
  },
  {
    id: 'relux',
    name: 'Volo Relux Series',
    slug: 'relux',
    tagline: 'Premium Lifts',
    headline: 'Volo Relux Series — Premium Lifts',
    shortDescription: 'A blend of superior design and reliable operation for a premium experience.',
    description: 'The Volo Relux Series provides a premium experience with its gearless traction, stainless steel frame and doors, ensuring smooth and reliable operation. It accommodates up to 6 stops with a 544kg capacity.',
    priceRange: '₹7.5L – ₹9.5L',
    design: 'The cabin is designed with mirror interiors, elegant touch buttons, and a handrail, creating a sophisticated ambiance.',
    features: [
      'Uninterrupted Performance',
      'Superior Design',
      'Regulatory Compliance',
      'Up to 6 stops',
      '544kg capacity',
      'Gearless traction',
    ],
    imageId: 'relux',
  },
  {
    id: 'austre',
    name: 'Volo Austre Series',
    slug: 'austre',
    tagline: 'Luxury Lifts',
    headline: 'Volo Austre Series — Luxury Lifts',
    shortDescription: 'The pinnacle of luxury with cutting-edge technology and exquisite design.',
    description: 'The Volo Austre Series is the apex of luxury, constructed with premium materials for frictionless motion. It is equipped with advanced safety systems like speed governors and ARD/ERD. This series can serve up to 12 stops with a capacity of 1788kg.',
    priceRange: '₹8.2L – ₹14.7L',
    design: 'Exudes luxury with glass doors, sophisticated LED lighting, and high-end cabin finishes for a truly opulent experience.',
    features: [
      'Cutting-edge Technology',
      'Advanced Control System',
      'Luxury Design',
      'Up to 12 stops',
      '1788kg capacity',
      'Frictionless motion',
    ],
    imageId: 'austre',
  },
];
