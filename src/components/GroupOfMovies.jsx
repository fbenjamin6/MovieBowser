import React from 'react'
import { MovieCard } from './MovieCard'

export function GroupOfMovies ({ movies, lastMovieRef }) {
  // crear un estado que vaya amacenando la cantidad de peliculas que hubo antes de cambiarlas y para las nuevas agregar animacion?
  return (
    <section className='grid grid-cols-5 grid-rows-4 gap-4 pt-12 px-12'>
      {movies?.map((movie, index) => {
        if (movies.length === index + 1) {
          return (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} date={movie.date} rate={movie.rate} poster={movie.poster} lastMovieRef={lastMovieRef}></MovieCard>
          )
        }

        return (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} date={movie.date} rate={movie.rate} poster={movie.poster}></MovieCard>
        )
      })}
    </section>
  )
}
