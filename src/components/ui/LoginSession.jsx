'use client'
import { useDropdown } from '@/hooks/useDropdown'
import React from 'react'
import { ChevronDownIcon, LogOutIcon } from './Icons'
import { signOut } from 'next-auth/react'

export function LoginSession ({ session }) {
  const { isOpen, blurHandler, openHandler } = useDropdown()
  const { name, image } = session?.user

  function handleSignOut () {
    signOut()
  }

  return (
    <div className={'  relative '} >
      <button className={`flex items-center gap-1 px-2 py-1.5 transition-all relative ${isOpen ? 'bg-slate-800/80 rounded-t' : 'hover:bg-slate-800/40 rounded'}`} onClick={openHandler} onBlur={blurHandler} aria-label='menuClickable'>
        <img src={image} alt="" className='rounded-full w-6'/>
        <span>{name}</span>
        <ChevronDownIcon isEnabled={isOpen}/>
      </button>
      <button onClick={handleSignOut} className={`absolute top-full flex justify-between px-2 py-1.5 bg-slate-800/80 w-full transition-all rounded-b ${isOpen ? 'opacity-100' : '-translate-y-3 opacity-0'}`}>
        <span>Log out</span>
        <LogOutIcon/>
      </button>
    </div>
  )
}
