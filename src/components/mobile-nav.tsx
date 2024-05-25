import Link from 'next/link';

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';

const MobileNav = () => {
  return (
    <Menu>
      <MenuButton
        className={
          'inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
        }
      >
        <Bars3Icon className='h-6 w-6' />
      </MenuButton>
      <Transition
        enter='duration-200 ease-out'
        enterFrom='scale-95 opacity-0'
        enterTo='scale-100 opacity-100'
        leave='duration-300 ease-out'
        leaveFrom='scale-100 opacity-100'
        leaveTo='scale-95 opacity-0'
      >
        <MenuItems className='absolute right-0 top-10 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <MenuItem>
            <Link
              className={`block border-b rounded-sm px-4 py-2 text-sm font-semibold text-[#747474] hover:bg-[#E4E4E4] hover:text-[#1A2B3B]`}
              href='/reports'
            >
              Business Ideas
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className={`block rounded-sm px-4 py-2 text-sm font-semibold text-[#747474] hover:bg-[#E4E4E4] hover:text-[#1A2B3B]`}
              href='/reports'
            >
              Contact
            </Link>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default MobileNav;
