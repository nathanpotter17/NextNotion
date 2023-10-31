'use client'

import { useConvexAuth } from 'convex/react'
import { SignInButton, UserButton } from '@clerk/clerk-react'

import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/spinner';
import Link from 'next/link';

export const Navbar = () => {

  const {isAuthenticated,isLoading} = useConvexAuth()
  const scrolled = useScrollTop();

  return(
    <div className={cn("z-50 bg-background fixed top-0 dark:bg-[#1F1F1F] flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && (
          <Spinner />
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton>
              <Button variant='ghost' size='sm'>
                Log In
              </Button>
            </SignInButton>
            <SignInButton>
              <Button size='sm'>
                Get NextNotion Free
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant='ghost' size='sm' asChild>
              <Link href='/documents'>
                Enter NextNotion
              </Link>
            </Button>
            <UserButton afterSignOutUrl='/'/>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
}