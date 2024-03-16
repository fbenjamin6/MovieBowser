import React, { useMemo, useContext } from 'react'
import { HeroMovie } from './HeroMovie'
import { HeroSliderLi } from './HeroSliderLi'
import { useHero } from '../hooks/useHero'
import { MovieIndexContext } from '../context/movieIndexContext'

export function HeroSlider ({ movies }) {
  const { handleClick } = useHero()
  const { movieIndex } = useContext(MovieIndexContext)

  const mappedMovies = useMemo(() => {
    return movies.map(movie => {
      return (
        <HeroMovie bigPoster={movie.bigPoster} title={movie.title} overview={movie.overview} id={movie.id} rate={movie.rate} key={movie.id}></HeroMovie>
      )
    })
  }, [movies])

  return (
    <>
      <ul className='hero-slider-ul absolute z-10 top-2/4 -translate-y-1/2 flex flex-col gap-1 w-15 bg-gray-900 bg-opacity-80 rounded items-center px-2 py-2 w-[46px]'>
        {movies.map((movie, index) => {
          return (
            <HeroSliderLi key={index} index={index} handleClick={handleClick}></HeroSliderLi>
          )
        })}
      </ul>

      <div className='h-full transition-transform duration-300' style={{ transform: `translateY(${movieIndex * -100}%)` }}>
        {mappedMovies}
      </div>
    </>
  )
}
