"use client";

import Link from 'next/link';
import { Menu, ChevronDown, Home, ShoppingCart, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { 
    href: '/products', 
    label: 'Products',
    icon: <ShoppingCart className="h-5 w-5" />,
    subLinks: [
      { href: '/products/alto', label: 'Volo Alto Series' },
      { href: '/products/relux', label: 'Volo Relux Series' },
      { href: '/products/austre', label: 'Volo Austre Series' },
    ]
  },
  { href: '/contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 mr-4">
          <span className="font-extrabold text-xl tracking-wider text-foreground">VOLO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            link.subLinks ? (
              <DropdownMenu key={link.href}>
                <DropdownMenuTrigger asChild>
                  <button className={cn(
                      "flex items-center gap-1 transition-colors hover:text-primary focus:outline-none",
                      pathname.startsWith(link.href) ? "text-primary" : "text-muted-foreground"
                    )}>
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.subLinks.map(subLink => (
                    <DropdownMenuItem key={subLink.href} asChild>
                      <Link href={subLink.href}>{subLink.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[320px] p-0">
               <div className="p-4 border-b">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-extrabold text-xl tracking-wider">VOLO</span>
                </Link>
              </div>
              <nav className="mt-4 p-2">
                <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  if (link.subLinks) {
                    return (
                     <li key={link.href}>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1" className="border-b-0">
                            <AccordionTrigger className={cn(
                              "text-base font-medium rounded-md px-3 py-2 transition-colors hover:bg-muted hover:no-underline [&[data-state=open]]:bg-muted",
                              pathname.startsWith(link.href) ? "text-primary" : "text-foreground"
                            )}>
                               <div className="flex items-center gap-3">
                                {link.icon}
                                {link.label}
                               </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-0">
                              <ul className="flex flex-col gap-1 pt-2 border-l ml-5 pl-5">
                                {link.subLinks.map(subLink => (
                                  <li key={subLink.href}>
                                    <Link
                                      href={subLink.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className={cn(
                                        "flex items-center justify-between text-base font-medium rounded-md px-3 py-2 transition-colors hover:bg-muted",
                                        pathname === subLink.href ? "text-primary" : "text-muted-foreground"
                                      )}
                                    >
                                      {subLink.label}
                                      <ArrowRight className="h-4 w-4" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </li>
                    )
                  }
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-3 text-base font-medium rounded-md px-3 py-2 transition-colors hover:bg-muted",
                          pathname === link.href ? "text-primary" : "text-foreground"
                        )}
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
