'use client'
import React, { useState } from 'react'
import { LoupeIcon } from './Icons'
import { useBrowser } from '../../hooks/useBrowser'
import Link from 'next/link'
import { useMovies } from '../../hooks/useMovies'
import { useLang } from '../../hooks/useLang'

export function Browser () {
  const lang = useLang()
  const [value, setValue] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const { handleSubmit, isVisible, setIsVisible } = useBrowser({ value, lang })
  const { movies } = useMovies({ searchType: 'byName', mediaType: 'movie', lang, query: value, quantity: 10 })

  return (
    <div className='relative'>
      <form onSubmit={(e) => handleSubmit(e)} action="" className={`flex rounded-md border px-2.5 py-1.5 h-9 transition-all ease-out duration-200 group w-[36px] hover:w-[280px] focus-within:w-[280px] ${isFocus ? 'border-cyan-500' : 'border-transparent hover:border-white'}`}>
        <input type="text" value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => {
          value?.length > 3 ? setIsVisible(true) : setIsVisible(false)
          setIsFocus(true)
        }}
        onBlur={(e) => {
          if (e.relatedTarget?.className.includes('browserItem')) return
          setIsVisible(false)
          setIsFocus(false)
        }}

        className={'w-full bg-transparent focus-visible:outline-none transition-colors text-white'}/>
        <button type="submit" ><LoupeIcon/></button>
      </form>

      <ul className={`${isVisible ? 'opacity-100 ' : ' opacity-0 pointer-events-none'} transition-opacity flex flex-col rounded absolute bg-gray-900/60 backdrop-blur w-full max-h-[400px] overflow-auto scroll` } >
        {movies?.map((movie, index) => {
          return (
            <li key={index} className='hover:bg-gray-950/70 backdrop-blur' onClick={() => setIsVisible(false)}>
              <Link href={`/movie/${movie.id}`} className='browserItem flex gap-3 items-center p-3'>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster}`} alt="" className='w-[50px]'/>
                <div>
                  <h4 className='font-semibold'>{movie.title}</h4>
                  <span className='text-gray-400'>{movie.date?.slice(0, 4)}</span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
