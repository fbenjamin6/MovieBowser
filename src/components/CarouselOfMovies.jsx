import React from 'react'
import { MovieCard } from './MovieCard'
import { Link } from 'wouter'
import { useMovies } from '../hooks/useMovies'
import { useCarousel } from '../hooks/useCarousel'
import { CarouselArrow } from './CarouselArrow'

export function CarouselOfMovies ({ type, children }) {
  const { carouselRef, itemsToShow, isFirst, handleSlide } = useCarousel({ type: 'movie' })
  const { movies } = useMovies({ type, quantity: 20 })

  return (
    <section className='px-16 py-20 bg-gray-950  w-full'>
      <Link href={'/list/movies/popular'}>
        <a className={`RowOfMovies relative text-3xl inline-block mb-7
        before:content-chevronRight before:grayscale before:hover:grayscale-0 before:transition-all before:duration-500 before:absolute before:-right-11 before:scale-90 before:-top-1 before:hover:-right-12`}>
          {children}
          <div className='RowOfMovies-border mt-1 w-1/3 h-[4px] bg-cyan-500 rounded transition-all duration-500'></div>
        </a>
      </Link>

      <div className='w-full relative group'>
        <CarouselArrow direction={'prev'} isFirst={isFirst} handleSlide={handleSlide}/>
        <CarouselArrow direction={'next'} isScrollNeeded={true} handleSlide={handleSlide}/>
        <div className='w-full overflow-x-scroll scroll-smooth snap-x snap-mandatory gap-[0.7rem] flex justify-between transition-transform duration-500' style={{ scrollbarWidth: 'none' }} ref={carouselRef}>
            {movies?.map(movie => {
              return (
                <MovieCard key={movie.id} movie={movie}
                newClasses={'basis-auto grow-0 shrink-0 snap-start '} setWidth={`calc((100% - ${itemsToShow - 0.1} * 0.7rem) / ${itemsToShow})`}/>
              )
            })}
        </div>
      </div>
    </section>
  )
}
