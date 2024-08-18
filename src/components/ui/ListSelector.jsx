'use client'
import React from 'react'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import { ChevronDownIcon } from './Icons'
import { useLang } from '../../lib/hooks/useLang'

export function ListSelector ({ dict }) {
  const { mediaType } = useParams()
  const searchParams = useSearchParams()
  const searchType = searchParams.get('type')
  const lang = useLang()

  return (
    <>
      <div className='hidden md:grid gap-4 md:gap-8 items-center grid-cols-3 '>
        <Link href={'?type=popular'} className={` movieList-link-popular text-xl lg:text-2xl transition-all  ${searchType === 'popular' ? 'text-white active' : 'text-gray-400'} `}>{dict.popular}</Link>
        <Link href={'?type=top_rated'} className={` movieList-link-rated text-xl lg:text-2xl  ${searchType === 'top_rated' ? 'text-white active' : 'text-gray-400'} `}>{dict.top_rated}</Link>
        <Link href={'?type=trending'} className={` movieList-link-trending text-xl lg:text-2xl  ${searchType === 'trending' ? 'text-white active' : 'text-gray-400'}  `}>{dict.trending}</Link>
        <div className='movieList-link-border absolute opacity-0 -bottom-2 w-[40px] mt-1 h-[4px] bg-cyan-500 rounded transition-all duration-500'></div>
      </div>
      <div className='relative text-base sm:text-xl w-48 sm:w-52 group md:hidden '>
        <button className='flex relative items-center group peer justify-between transition-all w-full bg-slate-800/60 px-2 py-1 z-20 rounded  border-gray-800 border focus-within:border-cyan-500/80'> {dict[searchType]} <ChevronDownIcon classes={'group-focus-within:grayscale-0 group-focus-within:rotate-90 grayscale -rotate-90'}/></button>
        <div className='bg-slate-900/80 w-full flex flex-col absolute z-10 transition-all duration-300 invisible in-ease opacity-0 peer-focus-within:opacity-100 peer-focus-within:visible -translate-y-10 peer-focus-within:translate-y-0'>
          <Link href={`/${lang}/${mediaType}/list?type=popular`} className='px-2 py-1'>{dict.popular}</Link>
          <Link href={`/${lang}/${mediaType}/list?type=top_rated`} className='px-2 py-1'>{dict.top_rated}</Link>
          <Link href={`/${lang}/${mediaType}/list?type=trending`} className='px-2 py-1'>{dict.trending}</Link>
        </div>
      </div>
    </>
  )
}
