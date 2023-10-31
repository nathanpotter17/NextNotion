'use client'

import { useConvexAuth } from 'convex/react'
import { SignInButton } from '@clerk/clerk-react'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { ArrowBigRight } from "lucide-react"
import { Spinner } from '@/components/spinner'


export const Heading = () => {
  const {isAuthenticated,isLoading} = useConvexAuth();

  return(
    <div className="mx-auto max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Notes, & Plans Come To Life, Welcome to <span className="underline">NextNotion.</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion is the connected workspace where better, faster work happens.
      </h3>
      {isLoading && (
        <>
          <div className='w-full flex items-center justify-center'>
            <Spinner size='lg'/>
          </div>
        </>
      )}
      {isAuthenticated && !isLoading && (
        <>
          <Button asChild>
              <Link href='/documents'>
                Enter NextNotion <ArrowBigRight className='h-4 w-4 ml-2'/>
              </Link>
            </Button>
        </>
      )}
      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode='modal'>
            <Button>Get NextNotion Free<ArrowBigRight className='h-4 w-4 ml-2'/></Button>
          </SignInButton>
        </>
      )}
    </div>
  )
}