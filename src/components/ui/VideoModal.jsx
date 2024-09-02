'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export function VideoModal () {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const videoKey = searchParams.get('videokey')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (videoKey) setIsLoaded(true)
  }, [videoKey])

  const removeModalHandler = () => {
    const newParams = new URLSearchParams(searchParams)
    newParams.delete('videokey')
    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false })
  }

  return (
    <>
      {
        isLoaded &&
        <div>
          <div className={`${searchParams.has('videokey') ? 'opacity-100 z-50' : 'opacity-0 ease-out -z-50'}  fixed  bg-gray-950/50 w-full h-full transition duration-200`}
          onClick={() => removeModalHandler()} >
            <div className={'absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  w-full'}>
              <iframe src={`https://www.youtube-nocookie.com/embed/${videoKey}`} title="YouTube video player" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;web-share" allowFullScreen className='w-full md:w-3/5 aspect-[2/1] m-auto'></iframe>
            </div>
          </div>
        </div>
      }
    </>

  )
}
