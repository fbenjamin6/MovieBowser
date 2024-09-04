'use client'
import React from 'react'
import { MediaCard } from './MediaCard'
import { Loader } from '../ui/Loader'
import { useInfinityScroll } from '../../lib/hooks/useInfinityScroll'

export function MediaInfinityScroll ({ totalPages, searchType, mediaType, lang, query, genre }) {
  const { media, loaderRef, page } = useInfinityScroll({ searchType, mediaType, query, genre, lang, page: 2, totalPages })

  return (
    <>
      {media?.map((media) => {
        return (
          <MediaCard key={media.id} media={media}/>
        )
      })}
      {(totalPages >= 2 && page < totalPages && page < 30) && <Loader loaderRef={loaderRef}/>}
    </>
  )
}
