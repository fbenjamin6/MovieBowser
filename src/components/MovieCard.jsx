import React from 'react'
import { Link } from 'wouter'
import { StarRateIcon } from './Icons'

export function MovieCard ({ movie, lastMovieRef, newClasses, setWidth }) {
  const { id, title, date, rate, poster } = movie
  const imgSrc = `https://image.tmdb.org/t/p/original${poster}`
  const classes = newClasses + ' w-full MovieCard  relative min-h-[180px]  rounded bg-contain bg-center bg-no-repeat flex flex-col gap-2 rounded-b-md justify-end before:content-[""] before:top-0 before:w-full before:h-full before:absolute before:bg-gradient-to-t hover:opacity-90 transition from-black/90 via-black/10 to-transparent '
  // agregarle width a un article padre
  return (
    <Link href={`/movie/${id}`} ref={lastMovieRef}>
      <a className={classes} style={ { width: setWidth } }>
        <img src={imgSrc} alt="" className='h-full' />
        <div className='py-1.5 px-3 z-20 absolute w-full' >
          <h3>{title}</h3>
          <div className='flex justify-between mt-1'>
            <span className='flex gap-2 items-center text-gray-400'> <StarRateIcon/> {rate ? rate.toFixed(1) : 0} / 10</span>
            <span className='text-gray-400'>{date?.slice(0, 4)}</span>
          </div>
        </div>
      </a>
    </Link>
  )
}
// style={{ backgroundImage: `url(${imgSrc})` }}
