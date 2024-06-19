import React, { Suspense } from 'react'
import { SearchMediaResult } from '../../../../components/media/SearchMediaResult'
import { SearchMediaSkeleton } from '../../../../components/Skeletons'
import { searchGenres } from '../../../../services/searchGenres'
import { MediaTypeSwitcher } from '../../../../components/ui/MediaTypeSwitcher'
import { SearchPageBrowser } from '../../../../components/ui/SearchBrowser'

export async function generateMetadata ({ params }) {
  const { lang } = params
  return {
    title: lang === 'en' ? 'Search' : 'Buscar'
  }
}

export default async function SearchPage ({ params, searchParams }) {
  const { lang, mediaType } = params
  const query = searchParams.query
  const genre = searchParams.genre
  const searchType = query ? 'byName' : 'byGenre'

  const genreList = await searchGenres({ lang, mediaType })
  const genreName = genreList.find(genreItem => genreItem.id === Number(genre))?.name
  return (
    <>
      <section className='pt-20 sm:pt-24 md:pt-26 px-4 md:px-16 flex gap-1 items-center justify-between'>
        {query && <SearchPageBrowser mediaType={mediaType}/>}
        {genre && <h2 className='text-xl md:text-2xl'>{lang === 'en' ? 'Search for genre ' : 'Buscaste por el género '} <span className='font-semibold'>{genreName}</span></h2>}
        <MediaTypeSwitcher/>
      </section>
      <Suspense key={[query, genre]} fallback={<SearchMediaSkeleton/>}>
        <SearchMediaResult searchType={searchType} mediaType={mediaType} query={query} genre={genre} lang={lang}/>
      </Suspense>
    </>
  )
}
