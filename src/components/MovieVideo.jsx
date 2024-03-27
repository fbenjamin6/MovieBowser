import React from 'react'
import { useVideoModal } from '../hooks/useVideoModal'

export function MovieVideo ({ video, itemsToShow, handleScrollNeeded }) {
  const { changeVideoModal } = useVideoModal()

  return (
    <>
      <article style={{ width: `calc((100% - ${itemsToShow - 0.1} * 0.7rem) / ${itemsToShow})` }} onClick={() => changeVideoModal({ key: video.key })}
      className='snap-start flex relative basis-auto grow-0 shrink-0 aspect-[5/3] h-full cursor-pointer bg-cover bg-center bg-no-repeat transition-opacity hover:opacity-80 from-black via-transparent to-transparent
       before:top-0 before:w-full before:h-full before:absolute before:bg-gradient-to-t
      after:content-playVideoIcon after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:opacity-0 after:transition after:duration-300 after:hover:opacity-100
      '>
        <img onLoad={handleScrollNeeded} className='w-full h-full object-cover' src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`} alt="" />
        <header className='absolute self-end z-10 p-1 text-lg'>
          <h3 >{video.name}</h3>
        </header>
      </article>
    </>
  )
}
