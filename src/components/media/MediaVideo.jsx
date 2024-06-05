import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export function MediaVideo ({ video, handleScrollNeeded }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const handleVideoKey = ({ videoKey }) => {
    const newParams = new URLSearchParams(searchParams)
    if (videoKey) {
      newParams.set('videokey', videoKey)
    }
    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false })
  }

  return (
    <>
      <article onClick={() => handleVideoKey({ videoKey: video.key })}
      className={`w-[calc((100%-1*0.7rem)/1)] md:w-[calc((100%-2*0.7rem)/2)] lg:w-[calc((100%-3*0.7rem)/3)] 2xl:w-[calc((100%-4*0.7rem)/4)]
      snap-start flex relative basis-auto grow-0 shrink-0 aspect-[5/3] h-full cursor-pointer bg-cover bg-center bg-no-repeat transition-opacity hover:opacity-80 from-black via-transparent to-transparent
       before:top-0 before:w-full before:h-full before:absolute before:bg-gradient-to-t
      after:content-playVideoIcon after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:opacity-0 after:transition after:duration-300 after:hover:opacity-100
      `}>
        <img onLoad={handleScrollNeeded} className='w-full h-full object-cover' src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`} alt="" />
        <header className='absolute self-end z-10 p-2 text-lg'>
          <h3 >{video.name}</h3>
        </header>
      </article>
    </>
  )
}
