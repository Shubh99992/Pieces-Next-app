import Link from 'next/link';
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from './theme-btn';

const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0  backdrop-blur border-b">
      <div className="container mx-auto flex justify-between  items-center">
        <Link href="/">
          <div className="text-lg font-bold">
            Pieces-Next
          </div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">

          <Link href="/" className='hover:scale-105 hover:font-semibold transition-transform duration-300'>
            Home
          </Link>
          <Link href="/about" className='hover:scale-105 hover:font-semibold transition-transform duration-300'>
            About
          </Link>
          <Link href="/contact" className='hover:scale-105 hover:font-semibold transition-transform duration-300'>
            Contact
          </Link>

          <div className="flex items-center">
            <Button className='mx-1' variant="outline">Login</Button>
            <Button className='mx-1' variant="outline">SignUp</Button>
            <ModeToggle />

          </div>
        </div>
        <div className='md:hidden'>
          <span className="mx-2">
            <ModeToggle />
          </span>
          <Sheet>
            <SheetTrigger>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className='font-bold my-4'>Pieces-Next</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6">

                    <Link href="/">
                      Home
                    </Link>
                    <Link href="/about">
                      About
                    </Link>
                    <Link href="/contact">
                      Contact
                    </Link>

                    <div className="">
                      <Button className='mx-1 sm-xs' variant="outline">Login</Button>
                      <Button className='mx-1 sm-xs' variant="outline">SignUp</Button>

                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>


        </div>


      </div>
    </nav>
  );
};

export default Navbar;