import React, { Suspense } from 'react'
import { CarouselOfMediaSkeleton, CarouselOfVideosSkeleton } from '../Skeletons'
import { Carousel } from './Carousel'
import { CarouselTitleLink } from './CarouselTitleLink'

export async function CarouselWrapper ({ searchType, mediaType, href, children, areMovies, lang, id }) {
  return (
    <section className='px-4 md:px-16 py-8 md:py-20  w-full'>
      {href &&
      <CarouselTitleLink href={ href }>
        {children}
      </CarouselTitleLink>}
      {!href && <h2 className=' text-2xl mb-3 md:mb-4'>{children}</h2>}
      <Suspense key={lang} fallback={areMovies ? <CarouselOfMediaSkeleton/> : <CarouselOfVideosSkeleton/>}>
        <Carousel searchType={searchType} mediaType={mediaType} lang={lang} areMovies={areMovies} id={id}/>
      </Suspense>
    </section>

  )
}
