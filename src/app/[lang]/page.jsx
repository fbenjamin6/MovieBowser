import React, { Suspense } from 'react'
import { Hero } from '../../components/hero/Hero'
import { VideoModal } from '../../components/ui/VideoModal'
import { HeroSkeleton } from '../../components/Skeletons'
import { getDictionary } from '../../lib/dictionaries/dictionary'
import { CarouselWrapper } from '../../components/carousel/CarouselWrapper'

export default async function HomePage ({ params }) {
  const { lang } = params
  const { home } = await getDictionary(lang)

  return (
    <>
      <Suspense fallback={<></>}>
        <VideoModal/>
      </Suspense>
      <Suspense fallback={<HeroSkeleton/>}>
        <Hero lang={lang}/>
      </Suspense>

      <CarouselWrapper areMovies={true} searchType={'popular'} mediaType={'movie'} href={`${lang}/movie/list?type=popular`} lang={lang}>
        {home.popular}
      </CarouselWrapper>

      <CarouselWrapper areMovies={true} searchType={'top_rated'} mediaType={'movie'} href={`${lang}/movie/list?type=top_rated`} lang={lang}>
        {home.top_rated}
      </CarouselWrapper>
    </>
  )
}
