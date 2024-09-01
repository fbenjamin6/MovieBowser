import React from 'react'
import Image from 'next/image'
import { getDictionary } from '@/lib/dictionaries/dictionary'

export async function NotResultsFound ({ lang }) {
  const dict = await getDictionary(lang)
  return (
    <div className='flex justify-center flex-col items-center text-2xl font-medium col-span-full pt-20 text-center'>
      <span>{dict.notFound}</span>
      <Image className='stitch' alt='Stitch from Lilo & Stitch being sad because they are no results' src={'/ui/stitchSad.png'} width={250} height={250} />
    </div>
  )
}
