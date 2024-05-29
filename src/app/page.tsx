import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { PricingSection } from '@/features/pricing/components/pricing-section';

export default async function HomePage() {
  return (
    <div className='flex flex-col gap-8 lg:gap-32'>
      <HeroSection />
      {/* <ExamplesSection /> */}
      {/* <PricingSection /> */}
    </div>
  );
}

function HeroSection() {
  return (
    <section className='bg-gradient-to-b from-white to-[#E1E5E9]'>
      <div className='m-auto flex max-w-[1080px] flex-wrap items-end gap-14 px-4 pt-12 lg:flex-nowrap '>
        <div className=''>
          <h1 className='text-5xl font-bold leading-[56px] tracking-tighter md:text-[56px]'>
            Discover Your Next Big Idea
          </h1>
          <h2>
            Whether youre an entrepreneur, a startup, an established business looking to innovate or just someone
            curious about new opportunities, Genesify is here to help you find your next big idea tailored to your
            niche.
          </h2>
        </div>
        <div>
          <Image
            src='/hero.png'
            width={867}
            height={790}
            alt='Example of a report provided by Genesify'
            className='rounded-tr-lg'
            priority
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}

function ExamplesSection() {
  return (
    <section className='flex flex-col gap-4 overflow-hidden rounded-lg bg-black py-8'>
      <div className='flex justify-center gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example1.png'
          width={600}
          height={200}
          alt='Example of a generated banner'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example2.png'
          width={600}
          height={200}
          alt='Example of a generated banner'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example3.png'
          width={600}
          height={200}
          alt='Example of a generated banner'
          quality={100}
        />
      </div>
      <div className='flex gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example4.png'
          width={600}
          height={200}
          alt='Example of a generated banner'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example5.png'
          width={600}
          height={200}
          alt='Example of a generated banner'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example6.png'
          width={600}
          height={200}
          alt='Example of a generated banner'
          quality={100}
        />
      </div>
      <div className='flex justify-center gap-4'>
        <Image
          className='flex-shrink-0'
          src='/example7.png'
          width={600}
          height={200}
          alt='Example of a generated banner'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example8.png'
          width={600}
          height={200}
          alt='Example of a generated banner'
          quality={100}
        />
        <Image
          className='flex-shrink-0'
          src='/example9.png'
          width={600}
          height={200}
          alt='Example of a generated banner'
          quality={100}
        />
      </div>
    </section>
  );
}
