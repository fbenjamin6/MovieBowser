import React, { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'
import { Link } from 'wouter'
import { useMovies } from '../hooks/useMovies'

export function Carousel ({ type, children }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [itemsToShow, setItemsToShow] = useState()
  const [itemsPerScreen, setItemsPerScreen] = useState()
  const { movies } = useMovies({ type, quantity: 18 })

  console.log((100 / itemsToShow).toFixed(0))
  function calculateItemsToShow () {
    if (screenWidth > 1600) return setItemsToShow(7)
    if (screenWidth > 1300) return setItemsToShow(5)
    if (screenWidth > 1100) return setItemsToShow(4)
  }

  useEffect(() => {
    calculateItemsToShow()
  }, [screenWidth])

  useEffect(() => {
    setItemsPerScreen(screenWidth / itemsToShow)
  }, [itemsToShow])

  return (
    <section className='px-12 py-20 bg-gray-950  w-full'>
      <Link href={'/list/movies/popular'}>
        <a className={`RowOfMovies relative text-3xl inline-block mb-7
        before:content-chevronRight before:grayscale before:hover:grayscale-0 before:transition-all before:duration-500 before:absolute before:-right-11 before:scale-90 before:-top-1 before:hover:-right-12`}>
          {children}
          <div className='RowOfMovies-border mt-1 w-1/3 h-[4px] bg-cyan-500 rounded transition-all duration-500'></div>
        </a>
      </Link>

      <div className={`w-full flex gap-8 justify-between transition-transform overflow-hidden ${''}`}>
        {movies?.map(movie => {
          return (
            <MovieCard key={movie.id} movie={movie} newClasses={`flex-shrink-0 flex-[0_0_${(100 / itemsToShow).toFixed(0)}%]`}></MovieCard>
          )
        })}
      </div>
    </section>
  )
}
