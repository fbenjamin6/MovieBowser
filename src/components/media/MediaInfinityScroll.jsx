'use client'
import React from 'react'
import { MediaCard } from './MediaCard'
import { Loader } from '../ui/Loader'
import { useInfinityScroll } from '../../hooks/useInfinityScroll'

export function MediaInfinityScroll ({ totalPages, searchType, mediaType, lang, query }) {
  const { media, loaderRef, page } = useInfinityScroll({ searchType, mediaType, query, lang, page: 2, totalPages })

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

// tag=popular
//
