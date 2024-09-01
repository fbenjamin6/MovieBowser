'use client'
import { useFavorite } from '@/lib/hooks/useFavorite'
import { useLang } from '@/lib/hooks/useLang'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export function BigFavoriteButton ({ id, mediaType, session, initialIsFavorite }) {
  const router = useRouter()
  const lang = useLang()

  const { isFavorite, removeFavorite, addFavorite } = useFavorite({ id, currentMediaType: mediaType, session, initialIsFavorite })

  async function handleClick () {
    if (!session) {
      return router.push(`/${lang}/auth`)
    }
    isFavorite ? removeFavorite() : addFavorite()
  }
  return (
    <button onClick={handleClick} className='flex border md:border-2 border-slate-200 rounded-full  bg-gray-950/50 w-[40px] md:w-[50px] h-[40px] md:h-[50px] relative mr-4 max-xl:order-2 max-xl:ml-auto' >
      <Image alt='Filled heart' src={'/ui/filledHeart.png'} width={30} height={30} className={`${isFavorite ? 'scale-100' : ' scale-0'} w-[30px] md:w-[35px] h-[30px] md:h-[35px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute  transition-all`}/>
      <Image alt='Unfilled heart' src={'/ui/heart.png'} width={30} height={30} className={`${isFavorite ? ' scale-0' : 'scale-100'} w-[30px] md:w-[35px] h-[30px] md:h-[35px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute  transition-all`}/>
    </button>
  )
}
