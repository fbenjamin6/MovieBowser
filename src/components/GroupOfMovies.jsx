import React from 'react'
import { MovieCard } from './MovieCard'

export function GroupOfMovies ({ movies, lastMovieRef }) {
  // crear un estado que vaya amacenando la cantidad de peliculas que hubo antes de cambiarlas y para las nuevas agregar animacion?
  return (
    <section className='GroupOfMovies gap-8 pt-12 px-16'>
      {movies?.map((movie, index) => {
        if (movies.length === index + 1) {
          return (
            <MovieCard key={movie.id} movie={movie} lastMovieRef={lastMovieRef}></MovieCard>
          )
        }

        return (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        )
      })}
    </section>
  )
}
