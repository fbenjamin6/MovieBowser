import React from 'react'
import { useCarousel } from '../hooks/useCarousel'
import { CarouselArrow } from './CarouselArrow'
import { useVideos } from '../hooks/useVideos'
import { MovieVideo } from './MovieVideo'

export function CarouselOfVideos ({ id, children }) {
  const { carouselRef, itemsToShow, isFirst, handleSlide, isScrollNeeded, handleScrollNeeded } = useCarousel({ type: 'video' })
  const { videos } = useVideos({ id })

  return (
    <section className='px-16 py-20 w-full'>
      <h2 className=' text-2xl mb-3'>Videos</h2>
      <div className='w-full relative group'>
        <CarouselArrow direction={'prev'} isFirst={isFirst} handleSlide={handleSlide}/>
        <CarouselArrow direction={'next'} isScrollNeeded={isScrollNeeded} handleSlide={handleSlide}/>
        <div className='w-full overflow-x-scroll scroll-smooth snap-x snap-mandatory gap-[0.7rem] flex transition-transform duration-500' style={{ scrollbarWidth: 'none' }} ref={carouselRef}>
        {videos?.map((video, index) => {
          return (
            <MovieVideo key={index} video={video} itemsToShow={itemsToShow} handleScrollNeeded={handleScrollNeeded}/>
          )
        })}
        </div>
      </div>
    </section>
  )
}
