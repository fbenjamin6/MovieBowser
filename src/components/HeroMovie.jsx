import React from 'react'
import { useVideos } from '../hooks/useVideos'
import star from '../assets/star2.png'
import { ButtonWatchTrailer } from './ButtonWatchTrailer'

export function HeroMovie ({ bigPoster, title, overview, id, rate }) {
  const { trailer } = useVideos({ type: 'trailer', id })

  return (
    <div className=' relative w-full h-full flex items-center justify-center'>
        <div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${bigPoster}')` }} className='absolute w-full h-full blur bg-cover bg-no-repeat'></div>
          {/* <img src={`https://image.tmdb.org/t/p/original${bigPoster}`} alt="" className='absolute w-max-[1600px]'/> */}
          <article style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${bigPoster}')` }} className={'relative bg-cover bg-no-repeat  bg-top w-[1600px] h-full z-10 flex items-center px-16'}>
          <div className='flex flex-col max-w-max gap-4 w-96 px-6 py-6 rounded-lg bg-gray-900 bg-opacity-80 z-20'>
            <h1 className='text-5xl'>{title}</h1>
            <span className='flex gap-3 items-end'> <img src={star} alt="" className='w-[26px] inline'/> {rate.toFixed(1)} / 10 </span>
            <p className='text-sm'>{overview}</p>
            <ButtonWatchTrailer trailer={trailer} classes={'self-start font-semibold rounded-md gap-2'} />
          </div>
        </article>
      </div>
  )
}

{ /* <article style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${bigPoster}')` }} className={'relative bg-cover bg-no-repeat  bg-top w-[1600px] h-full z-10 flex items-center px-12'}></article> */ }
