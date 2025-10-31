export type Product = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: string;
  features: string[];
  specs: { label: string; value: string }[];
  imageId: string;
};

export const products: Product[] = [
  {
    id: 'alto',
    name: 'Alto Series',
    slug: 'alto',
    tagline: 'Innovative design meets superior performance.',
    description: 'The Alto series is the epitome of modern engineering, blending sleek aesthetics with cutting-edge technology. Designed for residential and low-rise commercial buildings, it offers a smooth, quiet, and energy-efficient ride.',
    price: 'Starting from $25,000',
    features: [
      'Eco-efficient gearless motor',
      'Customizable cabin interiors',
      'Advanced safety features',
      'Smart destination control system',
      'Vibration-free operation',
    ],
    specs: [
      { label: 'Capacity', value: '4-8 Persons' },
      { label: 'Speed', value: 'Up to 1.5 m/s' },
      { label: 'Max Travel', value: '45m' },
      { label: 'Door Type', value: 'Automatic Sliding' },
    ],
    imageId: 'alto',
  },
  {
    id: 'relux',
    name: 'Relux Series',
    slug: 'relux',
    tagline: 'The pinnacle of luxury and comfort.',
    description: 'Experience unparalleled luxury with the Relux series. Crafted with the finest materials and exquisite attention to detail, this elevator is designed for high-end residences, hotels, and exclusive corporate offices. Every journey is a first-class experience.',
    price: 'Starting from $50,000',
    features: [
      'Premium cabin finishes (wood, leather, stone)',
      'Integrated ambient lighting and sound system',
      'Biometric access control',
      'Silent and seamless ride quality',
      'Personalized touch-screen interface',
    ],
    specs: [
      { label: 'Capacity', value: '6-12 Persons' },
      { label: 'Speed', value: 'Up to 2.5 m/s' },
      { label: 'Max Travel', value: '100m' },
      { label: 'Door Type', value: 'Automatic, Center Opening' },
    ],
    imageId: 'relux',
  },
  {
    id: 'austre',
    name: 'Austre Series',
    slug: 'austre',
    tagline: 'Robust solutions for every need.',
    description: 'The Austre series is our workhorse, built for durability and reliability. Ideal for high-traffic commercial buildings, hospitals, and public spaces, it delivers consistent performance under demanding conditions without compromising on safety or comfort.',
    price: 'Starting from $35,000',
    features: [
      'Heavy-duty construction',
      'Vandal-resistant cabin and fixtures',
      'Spacious and accessible design',
      'High-performance motor for constant use',
      'Easy maintenance and serviceability',
    ],
    specs: [
      { label: 'Capacity', value: '10-20 Persons' },
      { label: 'Speed', value: 'Up to 2.0 m/s' },
      { label: 'Max Travel', value: '75m' },
      { label: 'Door Type', value: 'Wide, Automatic Sliding' },
    ],
    imageId: 'austre',
  },
];
