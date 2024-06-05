'use client'
import React, { useState } from 'react'
import { CloseIcon, HamburgerIcon, LoupeIcon, GenreMenuIcon, MovieMenuIcon, TVMenuIcon } from './Icons'
import Link from 'next/link'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useBrowser } from '../../hooks/useBrowser'
import { Accordion } from './Accordion'

export function MenuMobile ({ menu, genres, lang, movieList, tvList }) {
  const [isOpen, setIsOpen] = useState(false)
  const [accordion, setAccordion] = useState('')
  const [value, setValue] = useState('')
  const { handleSubmit } = useBrowser({ value, lang })

  // children count y calcular heigth? tambien si tiene mas de 5 children agregar grid,

  const handleAccordion = (name) => {
    if (accordion === name) return setAccordion('')
    setAccordion(name)
  }

  return (
    <>
    <div className='flex lg:hidden'>
      <button onClick={() => setIsOpen(true)} className={`${isOpen ? 'invisible' : 'visible'} transition-all`}>
        <HamburgerIcon/>
      </button>
      <aside className={`${isOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'} w-72 bg-slate-950/90 border-l border-cyan-500/50 fixed h-screen right-0 top-0 transition-all duration-300`} >
        <button onClick={() => setIsOpen(false)} className='p-4 ml-auto flex' > <CloseIcon/> </button>
        <div className='flex flex-col gap-2'>
          <Accordion isEnabled={accordion === 'genres'} height={'250'}
          title={<span className='flex items-center gap-2'><GenreMenuIcon isEnabled={accordion === 'genres'}/>{menu.genres}</span>}
          handleAccordion={() => handleAccordion('genres')} >
            {genres.map(genre => {
              return (
                <li key={genre.id} >
                  <Link href={`/${lang}/${'movie'}/search?genre=${genre.id}`} className='hover:text-cyan-500'>
                    {genre.name}
                  </Link>
                </li>
              )
            })}
          </Accordion>

          <Accordion isEnabled={accordion === 'movies'} height={95}
          title={<span className='flex items-center gap-2'><MovieMenuIcon isEnabled={accordion === 'movies'}/>{menu.movies}</span>}
          handleAccordion={() => handleAccordion('movies')}>
            {movieList?.map(({ type, text }) => {
              return (
                <li key={type} >
                  <Link href={`/${lang}/movie/list?type=${type}`} className='hover:text-cyan-500'>
                    {text}
                  </Link>
                </li>
              )
            })}
          </Accordion>

          <Accordion isEnabled={accordion === 'tv'}
          title={<span className='flex items-center gap-2'><TVMenuIcon isEnabled={accordion === 'tv'}/>{menu.tv}</span>}
          handleAccordion={() => handleAccordion('tv')}>
            {tvList?.map(({ type, text }) => {
              return (
                <li key={type} >
                  <Link href={`/${lang}/tv/list?type=${type}`} className='hover:text-cyan-500'>
                    {text}
                  </Link>
                </li>
              )
            })}
          </Accordion>

          <Link href={'/'} className='text-lg px-4'>{menu.favorites}</Link>
        </div>

        <form onSubmit={(e) => handleSubmit(e)} action="" className={'flex rounded-md border px-2.5 py-1.5 h-9 transition duration-200 group mx-4'}>
          <input type="text" value={value}
          onChange={(e) => setValue(e.target.value)}
          className={'w-full bg-transparent focus-visible:outline-none transition-colors text-white'}/>
          <button type="submit" ><LoupeIcon/></button>
        </form>

        <LanguageSwitcher/>
      </aside>
    </div>
    </>
  )
}
