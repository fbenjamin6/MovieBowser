'use client'
import React from 'react'
import { useCarousel } from '../../lib/hooks/useCarousel'
import { CarouselArrow } from './CarouselArrow'
import { MediaVideo } from '../media/MediaVideo'
import { useLang } from '../../lib/hooks/useLang'

export function CarouselOfVideos ({ videos }) {
  const { carouselRef, itemsToShow, isFirst, handleSlide, isScrollNeeded, handleScrollNeeded } = useCarousel({ type: 'video' })
  const lang = useLang()

  return (
    <>
      { videos?.length > 0 &&
      (<div className={'w-full relative group '}>
        <CarouselArrow direction={'prev'} isFirst={isFirst} handleSlide={handleSlide}/>
        <CarouselArrow direction={'next'} isScrollNeeded={isScrollNeeded} handleSlide={handleSlide}/>
        <div className='w-full overflow-x-scroll scroll-smooth snap-x snap-mandatory gap-[0.7rem] flex transition-transform duration-500' style={{ scrollbarWidth: 'none' }} ref={carouselRef}>
        {videos?.map((video, index) => {
          return (
            <MediaVideo key={index} video={video} itemsToShow={itemsToShow} handleScrollNeeded={handleScrollNeeded}/>
          )
        })}
        </div>
      </div>)
      }
      {
        videos?.length === 0 &&
        <h3 className='w-full text-center mx-auto mt-20 text-lg'>{
          lang === 'en'
            ? 'No videos found'
            : 'No se han encontrado videos'}</h3>
      }
    </>
  )
}
