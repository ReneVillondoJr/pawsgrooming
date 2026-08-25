import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PawsGrooming - Professional Dog Grooming Services',
  description:
    'Premier dog grooming services for your beloved pets. Professional grooming, spa treatments, and more.',
  keywords: 'dog grooming, pet grooming, dog spa, professional grooming',
  openGraph: {
    title: 'PawsGrooming - Professional Dog Grooming',
    description: 'Premier dog grooming services for your beloved pets',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className='flex flex-col min-h-screen bg-white'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
