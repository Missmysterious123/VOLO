"use client";

import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { 
    href: '/products', 
    label: 'Products',
    subLinks: [
      { href: '/products/alto', label: 'Volo Alto Series' },
      { href: '/products/relux', label: 'Volo Relux Series' },
      { href: '/products/austre', label: 'Volo Austre Series' },
    ]
  },
  { href: '/partner', label: 'Partner' },
  { href: '/contact', label: 'Contact' },
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
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-extrabold text-xl tracking-wider">VOLO</span>
                </Link>
              </div>
              <nav className="mt-6 flex flex-col gap-4 px-4">
                {navLinks.map((link) => {
                  if (link.subLinks) {
                    return (
                      <div key={link.href}>
                        <Link 
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                          "text-lg font-medium transition-colors hover:text-primary",
                          pathname.startsWith(link.href) ? "text-primary" : "text-foreground"
                        )}>
                          {link.label}
                        </Link>
                        <div className="pl-4 mt-2 flex flex-col gap-2">
                        {link.subLinks.map(subLink => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              "text-base font-medium transition-colors hover:text-primary",
                              pathname === subLink.href ? "text-primary" : "text-muted-foreground"
                            )}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                        </div>
                      </div>
                    )
                  }
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname === link.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
