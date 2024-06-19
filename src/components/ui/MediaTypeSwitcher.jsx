'use client'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export function MediaTypeSwitcher () {
  const { mediaType, lang } = useParams()
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSwitcher = () => {
    const splitPathname = pathname.split('/')
    splitPathname[2] = mediaType === 'movie' ? 'tv' : 'movie'
    const newPathname = splitPathname.join('/')
    router.push(`${newPathname}?${searchParams.toString()}`, { scroll: false })
  }

  return (
    <div className='relative rounded-full outline bg-slate-800/60 outline-gray-800 outline-2 border-4 border-transparent w-44 sm:w-52 h-10 group ' >
      <input type="checkbox" className='mediaSwitcher absolute w-full h-full cursor-pointer appearance-none z-20 peer' defaultChecked={mediaType === 'tv'}/>
      <div className={'absolute w-1/2 h-full rounded-full border  border-cyan-500 bg-black transition-transform duration-100 peer-checked:translate-x-full'}
      onTransitionEnd={() => handleSwitcher()} ></div>
      <div className='relative flex  items-center py-1 z-10 font-semibold h-full text-sm sm:text-base '>
        <span className='mediaMovie transition-colors duration-150 w-1/2 text-center' >{lang === 'en' ? 'Movies' : 'Películas'}</span>
        <span className='mediaTV text-gray-400 group-has-[peer-:checked]:text-white transition-colors duration-100 w-1/2 text-center' >{lang === 'en' ? 'TV Shows' : 'Series'}</span>
      </div>

    </div>
  )
}
