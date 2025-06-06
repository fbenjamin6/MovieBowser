'use client'
import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

export function GithubButton ({ children }) {
  const handleClick = () => {
    signIn('github')
  }
  return (
    <button onClick={() => handleClick()} className='flex items-center bg-gray-800 text-base md:text-lg text-white font-medium gap-6 px-5 md:px-7 py-2 md:py-3 rounded '>
      <Image src={'/ui/githubIcon.svg'} width={24} height={24} className=' invert max-md:w-5' alt='GitHub icon'/>
      {children}
    </button>
  )
}
