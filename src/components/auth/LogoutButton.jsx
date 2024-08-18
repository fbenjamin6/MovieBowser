'use client'
import React from 'react'
import { signOut } from 'next-auth/react'

export function LogOutButton () {
  function handleSignOut () {
    signOut()
  }
  return (
    <button onClick={() => handleSignOut()} className='flex items-center bg-slate-50 text-lg text-black font-medium gap-6 px-7 py-3 rounded'>
      Log out
    </button>
  )
}
