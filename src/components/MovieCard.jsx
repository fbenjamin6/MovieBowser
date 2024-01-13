import React from 'react'
import { Link } from 'wouter'
import { StarRateIcon } from './Icons'

export function MovieCard ({ id, title, date, rate, poster }) {
  const imgSrc = `https://image.tmdb.org/t/p/original/${poster}`
  return (
    <article className='w-[250px] flex flex-col gap-2 bg-gray-900 rounded-b-md '>
      <a href="">
        <img src={imgSrc} alt="" className='hover:opacity-90' />
      </a>
      <header className='px-3'>
        <Link href={`/movie/${id}`}>
          <a href='' className=' text-lg hover:opacity-80'>{title}</a>
        </Link>
      </header>
      <footer className='flex justify-between p-3 justify-self-end'>
        <span className='flex gap-2 items-center text-gray-400'> <StarRateIcon/> {rate.toFixed(1)} / 10</span>
        <span className='text-gray-400'>{date.slice(0, 4)}</span>
      </footer>
    </article>
  )
}
