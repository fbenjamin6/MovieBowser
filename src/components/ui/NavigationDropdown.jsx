'use client'
import { useDropdown } from '@/lib/hooks/useDropdown'
import React from 'react'

export function NavigationDropdown ({ children, title }) {
  const { isOpen, blurHandler, openHandler } = useDropdown()

  return (
    <div className='group' >
      <button aria-label='menuClickable' className={`flex items-center gap-2 text-lg transition-colors ${isOpen ? 'text-white' : ' text-slate-300 hover:text-white'}` } onClick={openHandler}
      onBlur={blurHandler}>{title}</button>
      <div className={`absolute bg-neutral-900/90 rounded-b-md transition-all   ${isOpen ? 'opacity-100 top-full border-t-2 border-cyan-500 pointer-events-auto' : ' opacity-0 top-3/4 pointer-events-none'}`}>
        <div className='w-0 h-0 absolute bottom-full left-4 '
        style={{ borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: '8px solid rgb(6 182 212)' }}></div>
        <ul className={`${isOpen} ${children?.length > 6 ? 'grid-cols-2' : 'grid-cols-1'} grid gap-y-3 gap-x-8 p-4 `} onClick={blurHandler}>
          {children}
        </ul>
      </div>
    </div>
  )
}
