import React, { Suspense } from 'react'
import { Hero } from '../../components/hero/Hero'
import { VideoModal } from '../../components/ui/VideoModal'
import { HeroSkeleton } from '../../components/Skeletons'
import { getDictionary } from '../../lib/dictionaries/dictionary'
import { CarouselWrapper } from '../../components/carousel/CarouselWrapper'
import { TrendingSeries } from '@/components/ui/TrendingSeries'

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

      <CarouselWrapper areMovies={true} searchType={'popular'} mediaType={'movie'} href={`${lang}/movie/list?type=popular`} lang={lang} classes={'mt-6'}>
        {home.movies.popular}
      </CarouselWrapper>

      <CarouselWrapper areMovies={true} searchType={'top_rated'} mediaType={'movie'} href={`${lang}/movie/list?type=top_rated`} lang={lang}>
        {home.movies.top_rated}
      </CarouselWrapper>

      <TrendingSeries lang={lang} dict={home}/>

      <CarouselWrapper areMovies={true} searchType={'popular'} mediaType={'tv'} href={`${lang}/tv/list?type=popular`} lang={lang}>
        {home.tv.top_rated}
      </CarouselWrapper>

      <CarouselWrapper areMovies={true} searchType={'top_rated'} mediaType={'tv'} href={`${lang}/tv/list?type=top_rated`} lang={lang} classes={'mb-24 md:mb-36'}>
        {home.tv.top_rated}
      </CarouselWrapper>
    </>
  )
}
