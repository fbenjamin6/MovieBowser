'use client'
import React from 'react'
import Link from 'next/link'
import { StarRateIcon } from '../ui/Icons'
import { useLang } from '../../lib/hooks/useLang'
import { useParams } from 'next/navigation'

export function MediaCard ({ media, mediaType, lastMovieRef, newClasses }) {
  const getMediaType = useParams()?.mediaType
  const lang = useLang()
  const { id, title, date, rate, poster } = media
  const imgSrc = `https://image.tmdb.org/t/p/w342${poster}`
  const classes = newClasses + ' MovieCard  relative aspect-[2/3]  rounded bg-contain bg-center bg-no-repeat flex flex-col gap-2 rounded-b-md justify-end before:content-[""] before:top-0 before:w-full before:h-full before:absolute before:bg-gradient-to-t hover:opacity-90 transition from-black via-black/20 to-transparent '

  return (
    <Link href={`/${lang}/${mediaType || getMediaType}/title?id=${id}`} ref={lastMovieRef} className={classes} >
        <img src={imgSrc} alt={`Poster of ${title}`} className='w-full h-full' />
        <div className='py-1.5 px-2.5 z-20 absolute w-full' >
          <h3 className=' font-medium'>{title}</h3>
          <div className='flex justify-between text-sm sm:text-base items-center'>
            <span className='flex gap-1 sm:gap-2 items-center text-gray-400'> <StarRateIcon/> {rate ? rate.toFixed(1) : 0} / 10</span>
            <span className='text-gray-400'>{date?.slice(0, 4)}</span>
          </div>
        </div>
    </Link>
  )
}
