import type { Metadata } from 'next';
import { mulish } from '@/components/ui/fonts';
import './globals.css';
import { Providers } from '@/provider/Provider';

export const metadata: Metadata = {
  title: 'Pear Shop',
  description: 'Renove seu guarda-roupas sua imagem',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body className={`${mulish.className} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
