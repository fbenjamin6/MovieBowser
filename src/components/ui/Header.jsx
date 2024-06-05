import React from 'react'
import Link from 'next/link'
import { BowserIcon } from './Icons'
import { Menu } from './Menu'

export function Header ({ lang }) {
  return (
    <header className='fixed w-full bg-gray-900 bg-opacity-70 backdrop-blur z-30 border-b-[1px] border-cyan-500/50'>
      <nav className='m-auto flex items-center justify-between max-w-[1600px] h-16 px-16 '>
        <Link href={`/${lang}/`} className='flex items-center w-[250px]'>
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
