import React, { Suspense } from 'react'
import { MediaInfo } from '../../../../components/media/MediaInfo'
import { MediaTopCast } from '../../../../components/media/MediaTopCast'
import { CarouselWrapper } from '../../../../components/carousel/CarouselWrapper'
import { MediaInfoSkeleton, MediaTopCastSkeleton } from '../../../../components/Skeletons'
import { VideoModal } from '../../../../components/ui/VideoModal'
import { getDictionary } from '../../../../dictionaries/dictionary'

export const dynamicParams = false

export async function generateStaticParams () {
  return [{ mediaType: 'movie' }, { mediaType: 'tv' }]
}

export default async function MediaPage ({ params, searchParams }) {
  const { lang, mediaType } = params
  const { id } = searchParams
  const { mediaPage } = await getDictionary(lang)

  return (
    <>
      <VideoModal/>
      <Suspense fallback={<MediaInfoSkeleton/>}>
        <MediaInfo id={id} lang={lang} mediaType={mediaType} dict={mediaPage}></MediaInfo>
      </Suspense>

      <CarouselWrapper areMovies={false} mediaType={mediaType} id={id} lang={lang}>
        Videos
      </CarouselWrapper>

      <section className=' px-16 mb-28 mt-20'>
        <h2 className='text-2xl mb-6'>{mediaPage.cast}</h2>
        <Suspense fallback={<MediaTopCastSkeleton/>}>
          <MediaTopCast id={id} lang={lang} mediaType={mediaType}/>
        </Suspense>
      </section>

      <CarouselWrapper areMovies={true} searchType={'byRecommendation'} mediaType={mediaType} id={id} lang={lang}>
        {mediaPage.recommendation}
      </CarouselWrapper>
    </>
  )
}
