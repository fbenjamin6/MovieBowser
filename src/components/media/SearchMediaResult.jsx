import React from 'react'
import { MediaCard } from './MediaCard'
import { searchMedia } from '@/lib/services/searchMedia'
import { MediaInfinityScroll } from './MediaInfinityScroll'
import { NotResultsFound } from '../ui/NotResultsFound'

export async function SearchMediaResult ({ lang, searchType, query, genre, mediaType }) {
  const { media, totalPages } = await searchMedia({ searchType, mediaType, lang, page: 1, query, genre })

  return (
    <section className='GroupOfMovies gap-2 sm:gap-4 md:gap-5 pt-5 sm:pt-7 md:pt-12 px-4 md:px-16 mb-24 md:mb-36'>
      {media?.map(media => {
        return (
          <MediaCard key={media.id} media={media}></MediaCard>
        )
      })}
      <MediaInfinityScroll lang={lang} totalPages={totalPages} searchType={searchType} query={query} genre={genre} mediaType={mediaType} />
      {media.length === 0 && <NotResultsFound lang={lang}/>}
    </section>
  )
}
