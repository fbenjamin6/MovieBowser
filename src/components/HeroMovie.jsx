import React, { useEffect } from 'react'
import { useVideos } from '../hooks/useVideos'
import star from '../assets/star2.png'
import playIcon from '../assets/playIcon.png'

export function HeroMovie ({ bigPoster, title, overview, id, rate }) {
  const { trailer, getTrailer } = useVideos()

  useEffect(() => {
    getTrailer(id)
  }, [])

  return (
    <div className=' w-full h-full flex items-center justify-center'>
        <div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${bigPoster}')` }} className='absolute w-full h-full blur bg-cover bg-no-repeat'></div>
        <article style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${bigPoster}')` }} className={'relative bg-cover bg-no-repeat  bg-top w-[1600px] h-full z-10 flex items-center px-12'}>
          <div className='flex flex-col max-w-max gap-4 w-96 px-6 py-6 rounded-lg bg-gray-900 bg-opacity-80'>
            <h1 className='text-5xl'>{title}</h1>
            <span className='flex gap-3 items-end'> <img src={star} alt="" className='w-[26px] inline'/> {rate.toFixed(1)} / 10 </span>
            <p className='text-sm'>{overview}</p>
            <a href={`https://www.youtube.com/watch?v=${trailer}`} target='_blank' className='self-start bg-red-800 py-1.5 px-4 font-semibold rounded-md flex items-center gap-2' rel="noreferrer">
              <img src={playIcon} alt="" className='inline'/>
              WATCH TRAILER
            </a>
          </div>
        </article>
      </div>
  )
}
