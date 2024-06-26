import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Montserrat, Montserrat_Alternates, Space_Mono } from 'next/font/google';
import Link from 'next/link';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';

import { Logo } from '@/components/logo';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/utils/cn';
import { Analytics } from '@vercel/analytics/react';

import { Navigation } from './navigation';

import '@/styles/globals.css';

export const dynamic = 'force-dynamic';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: PropsWithChildren) {
  const siteHidden = true;
  return (
    <html className='scroll-smooth' lang='en'>
      <body className={cn('text-dark font-sans antialiased', montserrat.variable, spaceMono.variable)}>
        {!siteHidden && (
          <div>
            <div className='bg-[#F5F5F5]'>
              <AppBar />
              <main className='relative flex-1'>
                <div className='relative h-full'>{children}</div>
              </main>
              <div className='bg-[#1A2B3B]'>
                <Footer />
              </div>
            </div>
            <Toaster />
            <Analytics />
          </div>
        )}
        {siteHidden && (
          <div className='flex h-full flex-col items-center justify-center'>
            <Logo />
            <h1>Coming Soon</h1>
          </div>
        )}
      </body>
    </html>
  );
}

async function AppBar() {
  return (
    <div className='bg-white'>
      <header className='m-auto flex max-w-[1080px] items-center justify-between px-4 pb-8 pt-8 md:justify-normal'>
        <Logo />
        <Navigation />
      </header>
    </div>
  );
}

function Footer() {
  return (
    <footer className='mx-auto mt-8 flex max-w-[1080px] flex-col gap-4 p-4 pb-0 text-neutral-400 lg:mt-32'>
      <div className='flex items-center justify-between'>
        <div>
          <Link href='/' className='mr-6 flex w-fit items-center gap-2'>
            <span className='text-3xl font-black text-white'>GENESIFY</span>
            <div className='-ml-2 h-9 w-1 -rotate-12 bg-[#D5FF3F]'></div>
          </Link>
        </div>
        <div className='hidden gap-4 sm:flex'>
          <Link
            className={`rounded-sm px-2 py-1 font-semibold text-white hover:bg-[#E4E4E4] hover:text-[#1A2B3B]`}
            href='/reports'
          >
            Business Ideas
          </Link>
          <Link
            className={`rounded-sm px-2 py-1 font-semibold text-white hover:bg-[#E4E4E4] hover:text-[#1A2B3B]`}
            href='/reports'
          >
            Contact
          </Link>
        </div>
      </div>
      <div className='flex items-center justify-between border-t border-neutral-600 py-6'>
        <span className='text-xs text-white'>Copyright {new Date().getFullYear()} © Genesis</span>
        <div className='flex gap-4 text-white'>
          <Link href='#'>
            <span className='flex items-center gap-2'>
              <IoLogoTwitter size={22} />
            </span>
          </Link>
          <Link href='#'>
            <span className='flex items-center gap-2'>
              <IoLogoFacebook size={22} />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
