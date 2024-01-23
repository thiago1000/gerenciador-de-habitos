import type { Metadata } from 'next';
import { Dosis, Inter } from 'next/font/google';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import './globals.css';

const dosis = Dosis({ subsets: ['latin'], variable: '--font-dosis' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Meta Diária - Gerenciador de Habitos',
  description: 'Gerencie seus hábitos de forma eficiente e eficaz.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          dosis.variable,
          inter.variable,
          'flex items-center flex-col mt-10 bg-neutral-900'
        )}
      >
        <Image src={'/images/logo.svg'} width={200} height={200} alt="Logo" />
        {children}
      </body>
    </html>
  );
}
