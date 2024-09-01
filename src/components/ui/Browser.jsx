'use client'
import React from 'react'
import { LoupeIcon } from './Icons'
import { useBrowser } from '../../lib/hooks/useBrowser'
import Link from 'next/link'

export function Browser () {
  const { handleSubmit, handleValue, handleFocus, handleVisible, value, isFocus, isVisible, lang, media } = useBrowser()

  return (
    <div className='relative'>
      <form onSubmit={(e) => handleSubmit(e)} action="" className={`flex rounded-md border px-2.5 py-1.5 h-9 transition-all ease-out duration-200 group  hover:w-[280px]  ${isFocus ? 'border-cyan-500 w-[280px]' : 'border-transparent hover:border-white w-[36px]'}`}>
        <label htmlFor='browserSearch'></label>
        <input id='browserSearch' type="text" aria-label='menuClickable' value={value}
        onChange={(e) => handleValue(e.target.value)}
        onFocus={() => {
          value?.length > 3 ? handleVisible(true) : handleVisible(false)
          handleFocus(true)
        }}
        onBlur={(e) => {
          if (e.relatedTarget?.className.includes('browserItem')) return
          handleVisible(false)
          handleFocus(false)
        }}

        className={'w-full bg-transparent focus-visible:outline-none transition-colors text-white'}/>
        <button type="submit" ><LoupeIcon/></button>
      </form>

      <ul className={`${isVisible ? 'opacity-100 ' : ' opacity-0 pointer-events-none'} transition-opacity flex flex-col rounded absolute bg-gray-900/60 backdrop-blur w-full max-h-[400px] overflow-auto scroll` } >
        {media?.map((media, index) => {
          return (
            <li key={index} className='hover:bg-gray-950/70 backdrop-blur'>
              <Link href={`/${lang}/${media.mediaType}/title?id=${media.id}`} className='browserItem flex gap-3 items-center p-3'
              onClick={() => {
                handleFocus(false)
                handleVisible(false)
              }}>
                <img src={`https://image.tmdb.org/t/p/w200/${media.poster}`} alt={`Poster of ${media.title}`} className='w-[50px]'/>
                <div>
                  <h4 className='font-semibold'>{media.title}</h4>
                  <span className='text-gray-400'>{media.date?.slice(0, 4)}</span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
