import type { Metadata } from 'next';
import './global.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export const metadata: Metadata = {
  title: 'BzAnalytics - Transform Digitally',
  description: 'Global Technology and IT Consulting Company',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Header />
        <FloatingActions />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
