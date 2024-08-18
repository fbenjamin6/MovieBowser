'use client'
import { useFavorite } from '@/lib/hooks/useFavorite'
import Image from 'next/image'
import React from 'react'

export function BigFavoriteButton ({ id, mediaType, session, initialIsFavorite }) {
  const { isFavorite, removeFavorite, addFavorite } = useFavorite({ id, currentMediaType: mediaType, session, initialIsFavorite })
  async function handleClick () {
    isFavorite ? removeFavorite() : addFavorite()
  }
  return (
    <button onClick={handleClick} className='flex border-2 border-slate-200 rounded-full  bg-gray-950/50 w-[50px] h-[50px] relative mr-4' >
      <Image src={'/ui/filledHeart.png'} width={35} height={35} className={`${isFavorite ? 'scale-100' : ' scale-0'} left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute  transition-all`}/>
      <Image src={'/ui/heart.png'} width={35} height={35} className={`${isFavorite ? ' scale-0' : 'scale-100'} left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute  transition-all`}/>
    </button>
  )
}

// {
//   method: 'POST',
//   body: JSON.stringify({ username: 'example' }),
//   headers: {
//     'Content-Type': 'application/json'
//   }

// }
