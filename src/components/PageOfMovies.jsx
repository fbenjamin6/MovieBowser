import React from 'react'
import { MovieCard } from './MovieCard'

export function PageOfMovies ({ movies }) {
  return (
    <section className='grid grid-cols-5 grid-rows-5 gap-4 pt-12 px-12'>
        {movies?.map(movie => {
          return (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} date={movie.date} rate={movie.rate} poster={movie.poster}></MovieCard>
          )
        })}
      </section>
  )
}
