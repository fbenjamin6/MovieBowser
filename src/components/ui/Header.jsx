import React from 'react'
import Link from 'next/link'
import { BowserIcon } from './Icons'
import { Menu } from './Menu'

export function Header ({ lang }) {
  return (
    <header className='fixed w-full from-cyan-950/40 to-gray-900/20 bg-gradient-to-t bg-opacity-70 backdrop-blur z-40 border-b-[1px] border-cyan-500/50'>
      <nav className='m-auto flex items-center justify-between max-w-[1600px] h-16 px-4 md:px-16 '>
        <Link href={`/${lang}/`} className='flex items-center w-[250px]' aria-label='menuClickable'>
          <BowserIcon/>
          <h3 className='flex flex-col '>
            <span className='-mb-2.5 text-base font-extralight tracking-widest' >The Movie</span>
            <span className='text-2xl tracking-wide'>Bowser</span>
          </h3>
        </Link>
        <Menu lang={lang} />
      </nav>
    </header>
  )
}
