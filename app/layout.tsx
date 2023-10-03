import './globals.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Steakhouse Society',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <main className='herosection'>
      <Navbar />
        <div className='max-w-contentContainer mx-auto bg-white'>
        <HeroSection />
        </div>
      </main>
    </html>
    </>
  )
}
