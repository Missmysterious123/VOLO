import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-accent text-accent-foreground">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-2">VOLO</h3>
            <p className="text-sm text-muted-foreground">Rising beyond limits, with safety & style.</p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-2">Contact Us</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
                <li className='flex items-center gap-2'><MapPin className="h-4 w-4 text-primary" />123 Elegance Tower, Bengaluru, KA, India</li>
                <li className='flex items-center gap-2'><Mail className="h-4 w-4 text-primary" /><a href="mailto:teamvolo@outlook.com" className="hover:text-primary">teamvolo@outlook.com</a></li>
                <li className='flex items-center gap-2'><Phone className="h-4 w-4 text-primary" /><a href="tel:+917019661105" className="hover:text-primary">+91 7019661105</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Volo Lifts & Elevators. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
