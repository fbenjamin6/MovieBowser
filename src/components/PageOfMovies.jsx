import React, { useEffect } from 'react'
import { useMovies } from '../hooks/useMovies'
import { MovieCard } from './MovieCard'

export function PageOfMovies ({ type }) {
  const { movies, getPageMovies } = useMovies()

  useEffect(() => {
    if (type === 'popular' || type === 'top_rated' || type === 'trending') {
      getPageMovies({ type })
    }
  }, [type])

  return (
    <>
        {movies?.map(movie => {
          return (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} date={movie.date} rate={movie.rate} poster={movie.poster}></MovieCard>
          )
        })}
      </>
  )
}
