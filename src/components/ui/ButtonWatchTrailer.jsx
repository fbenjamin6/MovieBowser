'use client'
import React from 'react'
import { PlayIcon } from './Icons'
import { useLang } from '../../hooks/useLang'
import { useTrailer } from '../../hooks/useTrailer'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function ButtonWatchTrailer ({ classes, id }) {
  const lang = useLang()
  const { trailerKey } = useTrailer({ id, lang })
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleVideoKey = () => {
    const newParams = new URLSearchParams(searchParams)
    if (trailerKey) {
      newParams.set('videokey', trailerKey)
    }
    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false })
  }

  const className = `${classes} hover:scale-105 transition duration-300 flex items-center border border-cyan-600 bg-gray-950 text-white bg-opacity-60 px-4 py-1.5`

  return (
    <>
      <button href='' target='_blank' className={className} rel="noreferrer" onClick={() => handleVideoKey()}>
        <PlayIcon/>
        {lang === 'en' ? 'WATCH TRAILER' : 'VER TRÁILER'}
      </button>
    </>
  )
}
