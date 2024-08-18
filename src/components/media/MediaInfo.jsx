import React from 'react'
import { StarRateIcon } from '../ui/Icons'
import { ButtonWatchTrailer } from '../ui/ButtonWatchTrailer'
import Link from 'next/link'
import { searchMedia } from '@/lib/services/searchMedia'
import { searchCredits } from '@/lib/services/searchCredits'
import { BigFavoriteButton } from '../ui/BigFavoriteButton'
import { getUserSession } from '@/lib/db/getUserSession'
import { isAlreadyFavorite } from '@/lib/db/isAlreadyFavorite'

export async function MediaInfo ({ id, lang, mediaType, dict }) {
  const { media } = await searchMedia({ searchType: 'byId', mediaType, id, lang })
  const { Acting, Writing, Directing } = await searchCredits({ id, lang, mediaType })
  const { title, overview, date, rate, voteCount, poster, duration, genres } = media[0]
  const { session } = await getUserSession()
  const initialIsFavorite = await isAlreadyFavorite({ id, currentMediaType: mediaType, session })

  return (
    <section className='pt-16 px-4 md:px-16 relative mb-6'>

      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="" className='absolute w-full left-0 right-0 m-auto blur-3xl opacity-40 -z-10  h-full'/>
      <article className='w-full grid grid-cols-[40%_60%] lg:grid-cols-[auto_6fr] gap-x-3 lg:gap-x-8 grid-rows-[auto_6fr] pt-4'>
        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="" className=' w-[400px] shrink-0 aspect-[2/3] row-span-2'/>
        <header className='flex justify-between items-start lg:mt-1 mb-1 max-lg:flex-col gap-3'>
          <div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl  font-semibold'>{title}</h1>
            <div className='max-sm:text-sm'>
              {mediaType === 'movie' && (
                <span className='text-gray-400 font-normal'>{date?.slice(0, 4)}
                <span className='mx-2 sm:mx-4'>-</span>
                {Math.trunc(duration / 60)}h {duration % 60}min</span>
              )}
              {mediaType === 'tv' && (
                <span className='text-gray-400 font-normal'>{duration.seasons} {lang === 'en' ? 'Seasons' : 'Temporadas'}
                <span className='mx-2 sm:mx-3'>-</span>
                {duration.episodes} {lang === 'en' ? 'Episodes' : 'Episodios'}</span>
              )}
            </div>
          </div>
          <div className='flex items-center gap-2 shrink-0'>
          <BigFavoriteButton session={session} id={id} mediaType={mediaType} initialIsFavorite={initialIsFavorite} key={media}/>
            <StarRateIcon classes={'w-[28px] md:w-[38px]'}/>
            <div>
              <span className='flex gap-2 items-center font-semibold text-sm md:text-lg -mb-2'>  {rate?.toFixed(1)} / 10 </span>
              <span className='text-gray-400 text-xs sm:text-sm'>{voteCount}</span>
            </div>
          </div>

      </header>
      <div className='flex flex-col gap-5 md:gap-7 mt-3 md:mt-6 max-lg:col-span-full '>
        <p className='max-sm:text-sm'>{overview}</p>
        <div className='flex flex-wrap gap-3'>
          {genres?.map(({ id, name }) => {
            return (
              <Link href={`/${lang}/${mediaType}/search?genre=${id}`} key={id} className='rounded-3xl font-semibold border-gray-100 border-solid border px-3   md:px-4 py-1 max-md:text-sm text-gray-100 bg-gray-950 bg-opacity-60 transition duration-300 hover:border-gray-300 hover:bg-gray-300 hover:text-black'>
                {name}
             </Link>
            )
          })}
        </div>
        <h4 className='max-md:text-sm text-gray-400 flex flex-wrap gap-3'>{dict.directing} {Directing?.map((director, index) => {
          if (Directing[index - 1] === director) return []
          return (<span className='text-white' key={index}> {director?.name}</span>)
        })}</h4>

        <h4 className='max-md:text-sm text-gray-400 flex flex-wrap gap-3'>{dict.writters} {Writing?.map((writer, index) => {
          if (Writing[index - 1] === writer) return []
          return (<span className='text-white' key={index}> {writer?.name}</span>)
        })}</h4>

        <h4 className='max-md:text-sm text-gray-400 flex flex-wrap gap-3'>{dict.stars} {Acting?.map((star, index) => {
          if (Acting[index - 1] === star) return []
          if (index >= 3) return []
          return (<span className='text-white' key={index}> {star?.name}</span>)
        })}</h4>
        <ButtonWatchTrailer id={id} classes={'gap-3 rounded-3xl  w-max '} imgWidth={'w-[18px] '}/>
      </div>
    </article>
  </section>
  )
}
