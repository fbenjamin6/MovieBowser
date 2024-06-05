'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

export function VideoModal () {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const videoKey = searchParams.get('videokey')

  const removeModalHandler = () => {
    const newParams = new URLSearchParams(searchParams)
    newParams.delete('videokey')
    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false })
  }

  return (
    <Suspense fallback={<></>}>
      <div className={`${searchParams.has('videokey') ? 'opacity-100 z-50' : 'opacity-0 ease-out -z-50'}  fixed  bg-gray-950/50 w-full h-full transition duration-200`}
      onClick={() => removeModalHandler()} >
        <div className={'absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  '}>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoKey}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </Suspense>
  )
}
