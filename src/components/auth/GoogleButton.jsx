'use client'
import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

export function GoogleButton ({ children }) {
  const handleClick = () => {
    signIn('google')
  }
  return (
    <button onClick={() => handleClick()} className='flex items-center bg-slate-50 text-base md:text-lg text-black font-medium gap-6 px-5 md:px-7 py-2 md:py-3 rounded'>
      <Image src={'/ui/googleIcon.svg'} width={24} height={24} className='max-md:w-5' alt='Google icon'/>
      {children}
    </button>
  )
}
