import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';
import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import { WhatsAppButton } from '@/components/client/WhatsAppButton';
import { FirebaseClientProvider } from '@/firebase/client-provider';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Volo — Elegant. Budget. Luxury Lifts.',
  description: 'A house with an elegant modern lift & elevator that is perfect for you & your family, now comes at an affordable price.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", montserrat.variable)}>
        <FirebaseClientProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
