import React, { Suspense } from 'react'
import { ButtonWatchTrailer } from '../ui/ButtonWatchTrailer'
import { StarRateIcon } from '../ui/Icons'
import { SeeMoreButton } from '../ui/SeeMoreButton'
import Image from 'next/image'

export function HeroMovie ({ movie }) {
  // cambiar el fondo a Image
  const { bigPoster, title, overview, id, rate } = movie

  return (
    <div className=' relative w-full h-full flex items-center justify-center overflow-hidden'>
      <Image alt={`Background poster of ${title} blurred`} src={`https://image.tmdb.org/t/p/original${bigPoster}`} priority={true} fill={true} quality={10} style={{ objectFit: 'cover', objectPosition: 'top', filter: 'blur(8px)' }} className=''/>
      <article className={'relative bg-cover bg-no-repeat  bg-top w-full md:w-[1600px] h-full z-10 flex items-center md:px-16'}>
        <Image alt={`Big poster of the movie ${title}`} src={`https://image.tmdb.org/t/p/original${bigPoster}`} priority={true} fill={true} style={{ objectFit: 'cover', objectPosition: 'top' }} className=''/>
        <div className='flex flex-col max-w-max gap-1 md:gap-4 max-md:mt-auto max-md:min-w-full md:w-[400px] px-4 md:px-6 py-6 md:rounded-lg bg-gray-900 bg-opacity-80 z-20'>
          <h2 className='text-3xl md:text-5xl font-medium'>{title}</h2>
          <span className='flex gap-3 items-end font-medium'> <StarRateIcon classes={'w-[26px]'}/> {rate.toFixed(1)} / 10 </span>
          <p className='text-sm max-md:mb-2 md:block'>{overview}</p>
          <div className='flex w-full'>
            <Suspense fallback={<></>}>
              <ButtonWatchTrailer id={id} classes={'self-start rounded-md gap-2'} />
            </Suspense>
            <SeeMoreButton id={id} title={title}/>
          </div>
        </div>
      </article>
    </div>
  )
}

// style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${bigPoster}')` }}
