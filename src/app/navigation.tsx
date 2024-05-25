import Link from 'next/link';
import { IoLogoTwitter } from 'react-icons/io5';

// import { usePathname, useRouter } from 'next/navigation';
// import { IoMenu } from 'react-icons/io5';
// import { AccountMenu } from '@/components/account-menu';
// import { Logo } from '@/components/logo';
import MobileNav from '@/components/mobile-nav';
import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { getSession } from '@/features/account/controllers/get-session';
// import { signOut } from './(auth)/auth-actions';

export async function Navigation() {
  const session = await getSession();

  return (
    <div className='flex md:flex-1 items-center justify-between'>
      <div className='hidden gap-4 md:flex'>
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
      <div className='flex gap-4'>
          <Link className='flex items-center' href='/signup'>
            <span className='font-alt font-bold mr-2 hidden md:inline'>Follow us:</span> <IoLogoTwitter size={24} />
          </Link>
        <div className='relative flex md:hidden'>
          <MobileNav />
        </div>
      </div>
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
