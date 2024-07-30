import React, { Suspense } from 'react'
import { ButtonWatchTrailer } from '../ui/ButtonWatchTrailer'
import { StarRateIcon } from '../ui/Icons'

export function HeroMovie ({ movie }) {
  const { bigPoster, title, overview, id, rate } = movie
  return (
    <div className=' relative w-full h-full flex items-center justify-center overflow-hidden'>
        <div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${bigPoster}')` }} className='absolute w-full h-full blur bg-cover bg-no-repeat'></div>
          {/* <img src={`https://image.tmdb.org/t/p/original${bigPoster}`} alt="" className='absolute w-max-[1600px]'/> */}
          <article style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${bigPoster}')` }} className={'relative bg-cover bg-no-repeat  bg-top w-full md:w-[1600px] h-full z-10 flex items-center md:px-16'}>
            <div className='flex flex-col max-w-max gap-1 md:gap-4 max-md:mt-auto max-md:min-w-full md:w-96 px-4 md:px-6 py-6 md:rounded-lg bg-gray-900 bg-opacity-80 z-20'>
              <h1 className='text-3xl md:text-5xl'>{title}</h1>
              <span className='flex gap-3 items-end'> <StarRateIcon classes={'w-[26px]'}/> {rate.toFixed(1)} / 10 </span>
              <p className='text-sm max-md:mb-2 md:block'>{overview}</p>
              <Suspense fallback={<></>}>
                <ButtonWatchTrailer id={id} classes={'self-start rounded-md gap-2'} />
              </Suspense>
            </div>
        </article>
      </div>
  )
}
