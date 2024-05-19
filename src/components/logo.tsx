import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href='/' className='flex w-fit items-center gap-2 mr-6'>
      <span className='text-3xl font-black text-dark'>GENESIFY</span>
      <div className='bg-[#D5FF3F] w-1 h-9 -rotate-12 -ml-2'></div>
    </Link>
  );
}
