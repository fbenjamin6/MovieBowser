import { useLang } from '@/lib/hooks/useLang'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function SeeMoreButton ({ id }) {
  const lang = useLang()

  return (
    <Link href={`/${lang}/movie/title?id=${id}`} className='ml-auto'>
      <button className='flex items-center justify-center rounded-md gap-1 max-md:text-sm font-semibold hover:scale-105 transition duration-300  border border-cyan-600 bg-gray-950 text-white bg-opacity-60 px-4 py-1.5'>
        <span>{lang === 'en' ? 'SEE MORE' : 'VER MÁS'}</span>
        <Image alt='Arrow pointing right' src={'/ui/chevronRight.png'} width={25} height={25} className=' w-5 md:w-[25px]'></Image>
      </button>
    </Link>
  )
}
