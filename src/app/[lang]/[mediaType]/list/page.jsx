import React, { Suspense } from 'react'
import Link from 'next/link'
import { SearchMediaSkeleton } from '../../../../components/Skeletons'
import { SearchMediaResult } from '../../../../components/media/SearchMediaResult'
import { MediaTypeSwitcher } from '../../../../components/ui/MediaTypeSwitcher'
import { getDictionary } from '../../../../dictionaries/dictionary'

export default async function ListPage ({ params, searchParams }) {
  const { lang, mediaType } = params
  const { list } = await getDictionary(lang)
  const searchType = searchParams.type
  return (
    <>
      <section className='pt-32 px-16 flex gap-8 relative items-center'>
        <Link href={'?type=popular'} className={`movieList-link-popular text-2xl  ${searchType === 'popular' ? 'text-white active' : 'text-gray-400'} `}>{list.mostPopular}</Link>
        <Link href={'?type=top_rated'} className={`movieList-link-rated text-2xl  ${searchType === 'top_rated' ? 'text-white active' : 'text-gray-400'} `}>{list.topRated}</Link>
        <Link href={'?type=trending'} className={`movieList-link-trending text-2xl  ${searchType === 'trending' ? 'text-white active' : 'text-gray-400'}  `}>{list.trending}</Link>
        <div className='movieList-link-border absolute opacity-0 -bottom-2 w-[40px] mt-1 h-[4px] bg-cyan-500 rounded transition-all duration-500'></div>
      <MediaTypeSwitcher/>
        {/* <ListSelector listType={listType} lang={lang} /> */}
      </section>
      <Suspense key={searchType} fallback={<SearchMediaSkeleton/>}>
        <SearchMediaResult searchType={searchType} mediaType={mediaType} lang={lang}/>

      </Suspense>
    </>
  )
}
