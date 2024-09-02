'use client'
import { useDropdown } from '@/lib/hooks/useDropdown'
import React from 'react'
import { ChevronDownIcon, LogOutIcon } from './Icons'
import { signOut } from 'next-auth/react'

export function UserProfile ({ session }) {
  const { isOpen, blurHandler, openHandler } = useDropdown()
  const { name, image } = session?.user

  function handleSignOut () {
    signOut()
  }

  return (
    <div className={'  relative  '} >
      <button className={`flex items-center w-full xl:max-w-48 gap-2 px-2 py-1.5 transition-all relative ${isOpen ? 'xl:bg-slate-800/80 rounded-t' : 'xl:hover:bg-slate-800/40 rounded'}`} onClick={openHandler} onBlur={blurHandler} aria-label='menuClickable'>
        <img src={image} alt={`Profile picture of ${name}`} className='rounded-full w-6'/>
        <span className=' overflow-hidden text-ellipsis whitespace-nowrap'>{name}</span>
        <ChevronDownIcon isEnabled={isOpen} classes={'hidden xl:block'} />
      </button>
      <button onClick={handleSignOut} className={` xl:absolute top-full flex justify-between max-xl:mt-1 max-xl:mb-2 px-2 py-1.5  w-full transition-all rounded-b xl:bg-slate-800/80 ${isOpen ? 'xl:opacity-100' : 'xl:-translate-y-3 xl:opacity-0 xl:pointer-events-none'} group`}>
        <span>Log out</span>
        <LogOutIcon/>
      </button>
    </div>
  )
}
