import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { IoMenu } from 'react-icons/io5';

import { AccountMenu } from '@/components/account-menu';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { getSession } from '@/features/account/controllers/get-session';

import { signOut } from './(auth)/auth-actions';

export async function Navigation() {
  const session = await getSession();

  return (
    <div className='flex flex-1 items-center justify-between'>
      <div className='flex gap-4'>
        <Link
          className={`rounded-sm px-2 py-1 font-semibold text-[#747474] hover:bg-[#E4E4E4] hover:text-[#1A2B3B]`}
          href='/reports'
        >
          Business Ideas
        </Link>
        <Link
          className={`rounded-sm px-2 py-1 font-semibold text-[#747474] hover:bg-[#E4E4E4] hover:text-[#1A2B3B]`}
          href='/reports'
        >
          Contact
        </Link>
      </div>
      <Button variant='default' className='flex-shrink-0 lg:flex' asChild>
        <Link href='/signup'>
          Follow us <strong className='ml-2'>#genesify</strong>
        </Link>
      </Button>
    </div>
    // <div className='relative flex items-center gap-6'>
    //   {session ? (
    //     <AccountMenu signOut={signOut} />
    //   ) : (
    //     <>
    //       <Button variant='sexy' className='hidden flex-shrink-0 lg:flex' asChild>
    //         <Link href='/signup'>Get started for free</Link>
    //       </Button>
    //       <Sheet>
    //         <SheetTrigger className='block lg:hidden'>
    //           <IoMenu size={28} />
    //         </SheetTrigger>
    //         <SheetContent className='w-full bg-black'>
    //           <SheetHeader>
    //             <Logo />
    //             <SheetDescription className='py-8'>
    //               <Button variant='sexy' className='flex-shrink-0' asChild>
    //                 <Link href='/signup'>Get started for free</Link>
    //               </Button>
    //             </SheetDescription>
    //           </SheetHeader>
    //         </SheetContent>
    //       </Sheet>
    //     </>
    //   )}
    // </div>
  );
}
