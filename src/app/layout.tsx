import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google';
import { ReactNode } from 'react';

import '../styles/globals.css';
import { NextAuthProvider } from './providers';

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
  description: 'App Ignite Call',
  title: 'Ignite Call',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans leading-relaxed text-gray-100`}
      >
        <main className="h-screen w-full">
          <NextAuthProvider>{children}</NextAuthProvider>
        </main>
      </body>
    </html>
  );
}
