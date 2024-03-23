import React, { useState } from 'react'
import { Browser } from './Browser'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useGenres } from '../hooks/useGenres'
import { Link } from 'wouter'

export function Menu () {
  const [isVisible, setIsVisible] = useState(false)
  const { genres } = useGenres()

  return (
    <div className='flex items-center gap-3 justify-between w-full' >
          <div>
            <div className='relative' onMouseLeave={() => setIsVisible(false)} >
              <button className='flex items-center gap-2' onClick={() => isVisible ? setIsVisible(false) : setIsVisible(true)} >Genres <div className={`w-0 h-0 transition-all ${isVisible ? 'scale-100' : '-scale-100'}`} style={{ borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderBottom: '5px solid white' }}></div></button>
              <div className={`absolute bg-slate-800 bg-opacity-90 rounded-b w-52 ${isVisible ? 'opacity-100 ' : 'opacity-0 pointer-events-none'}`}>
                <ul className='grid grid-cols-2 gap-2 p-4'>
                  {genres.map(genre => {
                    return (
                      <li key={genre.id}>
                        <Link href={`/search/genre=${genre.id}`}>{genre.name}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className='flex gap-3 items-center' >
          <Browser/>
          <LanguageSwitcher/>
          </div>
        </div>
  )
}
