import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function TrendingSeries ({ lang, dict }) {
  return (
    <section className='mt-16 mb-12 max-w-none w-full py-4 md:py-6 xl:py-14 relative flex items-center'>
        <Image className='trendingSeries' src={'/ui/trendingSeries.png'} alt='Collage of multiple TV Shows posters in the background' priority={true} fill={true} quality={20} style={{ objectFit: 'cover', objectPosition: 'center', zIndex: '-1' }}/>
        <div className='max-w-[1600px] m-auto px-4 md:px-16 py-8 md:py-16 w-full'>
          <div className='flex flex-col w-full  lg:w-2/3 xl:w-1/2 gap-2 sm:gap-4 items-center m-auto text-center'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold'>{dict.tv.trending.title}</h2>
            <p className='text-sm md:text-base font-medium '>{dict.tv.trending.text}</p>
            <Link href={`/${lang}/tv/list?type=trending`}>
              <button className='text-sm md:text-base px-4 md:px-5 py-2 md:py-3 mt-2 border border-cyan-500 rounded-md font-semibold bg-gray-950/60 hover:scale-105 transition duration-300'>
                {dict.tv.trending.button}
              </button>
            </Link>
          </div>
        </div>
      </section>
  )
}
