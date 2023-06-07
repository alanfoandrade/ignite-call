import '../styles/globals.css';

import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google';
import { ReactNode } from 'react';

import { NextAuthProvider, ReactQueryProvider } from './providers';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
});

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  variable: '--font-bai-jamjuree',
  weight: '700',
});

export const metadata = {
  description:
    'Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre',
  title: {
    default: 'Descomplique sua agenda | Ignite Call',
    template: '%s | Ignite Call',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans leading-relaxed text-gray-100`}
      >
        <main className="h-screen w-full">
          <ReactQueryProvider>
            <NextAuthProvider>{children}</NextAuthProvider>
          </ReactQueryProvider>
        </main>
      </body>
    </html>
  );
}
