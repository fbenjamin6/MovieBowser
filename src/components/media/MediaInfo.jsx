import React from 'react'
import { StarRateIcon } from '../ui/Icons'
import { ButtonWatchTrailer } from '../ui/ButtonWatchTrailer'
import Link from 'next/link'
import { searchMedia } from '../../services/searchMedia'
import { searchCredits } from '../../services/searchCredits'

export async function MediaInfo ({ id, lang, mediaType, dict }) {
  const { media } = await searchMedia({ searchType: 'byId', mediaType, id, lang })
  const { Acting, Writing, Directing } = await searchCredits({ id, lang, mediaType })
  const { title, overview, date, rate, voteCount, poster, duration, genres } = media[0]

  return (
    <section className='pt-16 px-16 gap-8 relative flex'>
      <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt="" className='absolute w-full left-0 right-0 m-auto blur-3xl opacity-40 -z-10 pt-16 h-full'/>
      <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt="" className='mt-4 w-[400px] shrink-0 aspect-[2/3]'/>
      <article className='w-full'>
        <header className='flex justify-between mt-10 mb-1  '>
          <div>
            <h1 className='text-4xl  font-semibold'>{title}</h1>
            <div>
              <span className='text-gray-400 font-normal'>{date?.slice(0, 4)}
              <span className='mx-4'>-</span>
              {Math.trunc(duration / 60)}h {duration % 60}min</span>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <StarRateIcon classes={'w-[38px]'}/>
            <div>
              <span className='flex gap-2 items-center font-semibold text-lg -mb-2'>  {rate?.toFixed(1)} / 10 </span>
              <span className='text-gray-400 text-sm'>{voteCount}</span>
            </div>
          </div>

      </header>
      <div className='flex flex-col gap-7 mt-6'>
        <p>{overview}</p>
        <div className='flex gap-3'>
          {genres?.map(({ id, name }) => {
            return (
              <Link href={`/${lang}/${mediaType}/search?genre=${id}`} key={id} className='rounded-3xl font-semibold border-gray-100 border-solid border px-4 py-1 text-gray-100 bg-gray-950 bg-opacity-60 transition duration-300 hover:border-gray-300 hover:bg-gray-300 hover:text-black'>
                {name}
             </Link>
            )
          })}
        </div>
        <h4 className='text-gray-400 flex flex-wrap gap-3'>{dict.directing} {Directing?.map((director, index) => {
          if (Directing[index - 1] === director) return []
          return (<span className='text-white' key={index}> {director?.name}</span>)
        })}</h4>

        <h4 className='text-gray-400 flex flex-wrap gap-3'>{dict.writters} {Writing?.map((writer, index) => {
          if (Writing[index - 1] === writer) return []
          return (<span className='text-white' key={index}> {writer?.name}</span>)
        })}</h4>

        <h4 className='text-gray-400 flex flex-wrap gap-3'>{dict.stars} {Acting?.map((star, index) => {
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