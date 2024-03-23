import React from 'react'
import { MovieCard } from './MovieCard'
import { useMovies } from '../hooks/useMovies'
import { Link } from 'wouter'

export function RowOfMovies ({ rowTitle, type, href }) {
  const { movies } = useMovies({ type, quantity: 6 })

  return (
    <section className='px-12 py-20 bg-gray-950'>
      <Link href={href}>
        <a className={`RowOfMovies relative text-3xl inline-block mb-7
        before:content-chevronRight before:grayscale before:hover:grayscale-0 before:transition-all before:duration-500 before:absolute before:-right-11 before:scale-90 before:-top-1 before:hover:-right-12`}>
          {rowTitle}
          <div className='RowOfMovies-border mt-1 w-1/3 h-[4px] bg-cyan-500 rounded transition-all duration-500'></div>
        </a>
      </Link>
      <div className='flex justify-between gap-3'>
        {movies?.map(movie => {
          return (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          )
        })}
      </div>
    </section>
  )
}
