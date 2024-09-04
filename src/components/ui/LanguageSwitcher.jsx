'use client'
import React from 'react'
import { FlagENIcon, FlagESIcon } from './Icons'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useLang } from '../../lib/hooks/useLang'
import { useDropdown } from '@/lib/hooks/useDropdown'

export function LanguageSwitcher () {
  const lang = useLang()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const { isOpen, blurHandler, openHandler } = useDropdown()

  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    const newPathname = segments.join('/')
    if (searchParams !== 0) {
      return newPathname + '?' + searchParams.toString()
    }
    return newPathname
  }

  return (
    <div className={'relative font-semibold w-min max-xl:mt-3.5 '} >
      <button onClick={openHandler} onBlur={blurHandler} aria-label='menuClickable' className={`relative w-20 flex items-center gap-2  justify-center rounded border transition-colors duration-200 ${isOpen ? 'border-cyan-500 bg-slate-800' : 'border-slate-600 bg-slate-800/20 xl:hover:bg-slate-800/50'} text-white bg-opacity-90 py-0.5 z-50`}>
        {lang.toLocaleUpperCase()} {lang === 'en' ? <FlagENIcon /> : <FlagESIcon />}
      </button>
      <div className={`absolute w-full bg-slate-800 bg-opacity-90 rounded-b transition-all duration-200 
        ${isOpen ? 'opacity-100 translate-y-0' : ' opacity-0 -translate-y-2 pointer-events-none'}`}>
        <ul>
          <li>
          <Link href={redirectedPathName('en')} scroll={false} onClick={openHandler} className='flex items-center justify-center gap-2 py-1 cursor-pointer hover:bg-slate-700/20'>
            EN <FlagENIcon />
          </Link>
          </li>
          <li>
            <Link href={redirectedPathName('es')} scroll={false} onClick={openHandler} className='flex items-center justify-center gap-2.5 py-1 cursor-pointer hover:bg-slate-700/20'>
              ES <FlagESIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
