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
      <button className={`flex items-center w-full lg:w-48 gap-1.5 px-2 py-1.5 transition-all relative ${isOpen ? 'lg:bg-slate-800/80 rounded-t' : 'lg:hover:bg-slate-800/40 rounded'}`} onClick={openHandler} onBlur={blurHandler} aria-label='menuClickable'>
        <img src={image} alt="" className='rounded-full w-6'/>
        <span className=' overflow-hidden text-ellipsis whitespace-nowrap'>{name}</span>
        <ChevronDownIcon isEnabled={isOpen} classes={'hidden lg:block'} />
      </button>
      <button onClick={handleSignOut} className={` lg:absolute top-full flex justify-between max-lg:mt-1 max-lg:mb-2 px-2 py-1.5  w-full transition-all rounded-b lg:bg-slate-800/80 ${isOpen ? 'lg:opacity-100' : 'lg:-translate-y-3 lg:opacity-0 lg:pointer-events-none'} group`}>
        <span>Log out</span>
        <LogOutIcon/>
      </button>
    </div>
  )
}
