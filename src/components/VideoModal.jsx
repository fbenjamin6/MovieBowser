import React from 'react'
import { useVideoModal } from '../hooks/useVideoModal'

export function VideoModal () {
  const { videoModal, setVideoModal, opacity, display } = useVideoModal()
  return (
    <div className={`${display} ${opacity} fixed bg-gray-950/50 w-full h-full z-50 transition duration-500`} onClick={() => setVideoModal(null)}>
      <div className={'absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  '}>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoModal}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
  )
}
