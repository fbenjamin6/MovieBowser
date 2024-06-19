'use client'
import React, { useState } from 'react'
import { FlagENIcon, FlagESIcon } from './Icons'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useLang } from '../../hooks/useLang'

export function LanguageSwitcher () {
  const [isVisible, setIsVisible] = useState(false)
  const lang = useLang()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  function handleClick (e) {
    setIsVisible(!isVisible)
  }

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
    <div className='relative font-semibold w-min' onPointerLeave={() => setIsVisible(false)}>
      <button onClick={handleClick} className={`relative w-20 flex items-center gap-2  justify-center rounded border transition-colors duration-200 bg-slate-800/40 ${isVisible ? 'border-cyan-500' : 'border-slate-700'} text-white bg-opacity-90 py-0.5 z-50`}>{lang.toLocaleUpperCase()} {lang === 'en' ? <FlagENIcon/> : <FlagESIcon/>}</button>
      <div className={`absolute w-full bg-slate-800 bg-opacity-90 rounded-b transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : ' opacity-0 -translate-y-2 pointer-events-none'}`}>
        <ul>
          <Link href={redirectedPathName('en')} scroll={false} className='flex items-center justify-center gap-2 py-1 cursor-pointer hover:bg-slate-700/20'>EN <FlagENIcon/></Link>
          <Link href={redirectedPathName('es')} scroll={false} className='flex items-center justify-center gap-2.5 py-1 cursor-pointer hover:bg-slate-700/20'>ES <FlagESIcon/></Link>
        </ul>
      </div>
    </div>
  )
}
