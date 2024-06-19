import React, { Suspense } from 'react'
import { SearchMediaSkeleton } from '../../../../components/Skeletons'
import { SearchMediaResult } from '../../../../components/media/SearchMediaResult'
import { MediaTypeSwitcher } from '../../../../components/ui/MediaTypeSwitcher'
import { getDictionary } from '../../../../dictionaries/dictionary'
import { ListSelector } from '../../../../components/ui/ListSelector'

export async function generateMetadata ({ params, searchParams }) {
  const { lang } = params
  const { type } = searchParams
  const { menu } = await getDictionary(lang)
  return {
    title: menu[type]
  }
}

export default async function ListPage ({ params, searchParams }) {
  const { lang, mediaType } = params
  const { list } = await getDictionary(lang)
  const searchType = searchParams.type
  return (
    <>
      <section className='pt-20 sm:pt-24 md:pt-26 px-4 md:px-16 flex gap-4  relative items-center justify-between'>
        <ListSelector dict={list}/>
        <MediaTypeSwitcher/>
      </section>
      <Suspense key={searchType} fallback={<SearchMediaSkeleton/>}>
        <SearchMediaResult searchType={searchType} mediaType={mediaType} lang={lang}/>

      </Suspense>
    </>
  )
}
