import React from 'react'
import { MediaCard } from './MediaCard'
import { searchMedia } from '../../services/searchMedia'
import { MediaInfinityScroll } from './MediaInfinityScroll'

export async function SearchMediaResult ({ lang, searchType, query, genre, mediaType }) {
  await searchType
  const { media, totalPages } = await searchMedia({ searchType, mediaType, lang, page: 1, query, genre })

  return (
    <section className='GroupOfMovies gap-8 pt-12 px-16'>
      {media?.map(media => {
        return (
          <MediaCard key={media.id} media={media}></MediaCard>
        )
      })}
      <MediaInfinityScroll lang={lang} totalPages={totalPages} searchType={searchType} query={query} mediaType={mediaType} />
    </section>
  )
}
