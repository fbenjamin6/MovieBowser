import React, { Suspense } from 'react'
import { FavoritesResult } from '@/components/media/FavoritesResult'
import { SearchMediaSkeleton } from '@/components/Skeletons'

export default async function FavoritesPage ({ params }) {
  const { lang } = params
  return (

    <>
      <h2 className='pt-20 sm:pt-24 md:pt-26 px-4 md:px-16  text-2xl'>
        Favoritos
      </h2>
      <Suspense fallback={<SearchMediaSkeleton/>}>
        <FavoritesResult lang={lang}/>
      </Suspense>
    </>

  )
}
