import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

const baiJamjuree = BaiJamjuree({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Ignite Call',
  description: 'App Ignite Call',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="h-screen w-full">{children}</main>
      </body>
    </html>
  )
}
