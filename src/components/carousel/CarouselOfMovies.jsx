'use client'
import React from 'react'
import { MediaCard } from '../media/MediaCard'
import { useCarousel } from '../../hooks/useCarousel'
import { CarouselArrow } from './CarouselArrow'

export function CarouselOfMovies ({ movies, mediaType }) {
  const { carouselRef, isFirst, handleSlide } = useCarousel({ type: 'movie' })

  return (
    <>
      <div className='w-full relative group '>
        <CarouselArrow direction={'prev'} isFirst={isFirst} handleSlide={handleSlide}/>
        <CarouselArrow direction={'next'} isScrollNeeded={true} handleSlide={handleSlide}/>
        <div className='w-full overflow-x-scroll scroll-smooth snap-x snap-mandatory gap-[0.7rem] flex justify-between transition-transform duration-500' style={{ scrollbarWidth: 'none' }} ref={carouselRef}>
          { movies?.map(movie => {
            return (
              <MediaCard mediaType={mediaType} key={movie.id} media={movie}
              newClasses={`basis-auto grow-0 shrink-0 snap-start 
                w-[calc((100%-2*0.6rem)/2)]
                sm:w-[calc((100%-3*0.6rem)/3)]
                md:w-[calc((100%-3*0.6rem)/3)]
                lg:w-[calc((100%-5*0.6rem)/5)]
                xl:w-[calc((100%-6*0.6rem)/6)]
                2xl:w-[calc((100%-7*0.6rem)/7)]
              `} />
            )
          })}
        </div>
      </div>
    </>
  )
}
