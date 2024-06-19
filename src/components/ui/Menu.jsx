import React, { Suspense } from 'react'
import { Browser } from './Browser'
import { LanguageSwitcher } from './LanguageSwitcher'
import { NavigationDropdown } from './NavigationDropdown'
import Link from 'next/link'
import { getDictionary } from '../../dictionaries/dictionary'
import { searchGenres } from '../../services/searchGenres'
import { MenuMobile } from './MenuMobile'

export async function Menu ({ lang }) {
  const { menu } = await getDictionary(lang)
  const genres = await searchGenres({ lang, mediaType: 'movie' })

  const moviesList = [
    {
      type: 'popular',
      text: menu.popular
    },
    {
      type: 'top_rated',
      text: menu.top_rated
    },
    {
      type: 'trending',
      text: menu.trending
    }]

  const tvList = [
    {
      type: 'popular',
      text: menu.popular
    },
    {
      type: 'top_rated',
      text: menu.top_rated
    },
    {
      type: 'trending',
      text: menu.trending
    }]

  return (
    <>
      <div className='items-center gap-3 justify-between w-full hidden lg:flex' >
        <div className='xl:pl-16 h-full flex gap-10'>
          <NavigationDropdown title={menu.genres} >
            {genres?.map(genre => {
              return (
              <li key={genre.id} >
                <Link href={`/${lang}/${'movie'}/search?genre=${genre.id}`} className='hover:text-cyan-500'>
                  {genre.name}
                </Link>
              </li>
              )
            })}
          </NavigationDropdown>
          <NavigationDropdown title={menu.movies}>
            {moviesList?.map(({ type, text }) => {
              return (
                <li key={type}>
                  <Link href={`/${lang}/movie/list?type=${type}`} className='hover:text-cyan-500'>
                    {text}
                  </Link>
                </li>
              )
            })}
          </NavigationDropdown>

          <NavigationDropdown title={menu.tv}>
            {tvList?.map(({ type, text }) => {
              return (
                <li key={type}>
                  <Link href={`/${lang}/tv/list?type=${type}`} className='hover:text-cyan-500'>
                    {text}
                  </Link>
                </li>
              )
            })}
          </NavigationDropdown>

          <Link href={'/'} className='text-lg'>{menu.favorites}</Link>
        </div>

        <div className='flex gap-3 items-center' >
          <Browser/>
          <Suspense fallback={<></>}>
            <LanguageSwitcher/>
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<></>}>
        <MenuMobile menu={menu} genres={genres} lang={lang} movieList={moviesList} tvList={tvList}/>
      </Suspense>
    </>
  )
}
