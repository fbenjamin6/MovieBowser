import React from 'react'
import { Browser } from './Browser'
import { LanguageSwitcher } from './LanguageSwitcher'
import { NavigationDropdown } from './NavigationDropdown'
import { useGenres } from '../hooks/useGenres'
import { Link } from 'wouter'

export function Menu () {
  const { genres } = useGenres()
  return (
    <div className='flex items-center gap-3 justify-between w-full ' >
          <div className='pl-32 h-full flex gap-8'>
            <NavigationDropdown title={'Genres'} >
              {genres.map(genre => {
                return (
                <li key={genre.id} >
                  <Link href={`/search/genre=${genre.id}`}>
                    <a className='hover:text-cyan-500'> {genre.name}</a>
                  </Link>
                </li>
                )
              })}
            </NavigationDropdown>
            <NavigationDropdown title={'Movies'}>
              <li>
                <Link href={'/list/movies/popular'}>
                  <a className='hover:text-cyan-500' >Most Popular Movies</a>
                </Link>
              </li>
              <li>
                <Link href={'/list/movies/top_rated'}>
                  <a className='hover:text-cyan-500' >Top Rated Movies</a>
                </Link>
              </li>
              <li>
                <Link href={'/list/movies/trending'}>
                  <a className='hover:text-cyan-500' >Trending Movies</a>
                </Link>
              </li>
            </NavigationDropdown>
          </div>
          <div className='flex gap-3 items-center' >
          <Browser/>
          <LanguageSwitcher/>
          </div>
        </div>
  )
}
