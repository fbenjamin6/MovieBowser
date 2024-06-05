import React from 'react'
import { CarouselOfMovies } from './CarouselOfMovies'
import { searchMedia } from '../../services/searchMedia'
import { searchVideos } from '../../services/searchVideos'
import { CarouselOfVideos } from './CarouselOfVideos'

export async function Carousel ({ searchType, mediaType, areMovies, lang, id }) {
  const { media } = areMovies ? await searchMedia({ searchType, mediaType, page: 1, lang, id }) : { }
  const { videos } = !areMovies ? await searchVideos({ id, lang, mediaType }) : {}

  return (
    <>
      {areMovies && <CarouselOfMovies mediaType={mediaType} movies={media}/>}
      {!areMovies && <CarouselOfVideos videos={videos}/>}
    </>
  )
}
