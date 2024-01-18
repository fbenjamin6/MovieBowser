import React from 'react'
import { useVideos } from '../hooks/useVideos'
import { useVideoModal } from '../hooks/useVideoModal'

export function MovieVideos ({ id }) {
  const { videos } = useVideos({ id })
  const { changeVideoModal } = useVideoModal()

  return (
    <>
      {videos?.length > 0 && (
        <section className='px-12 overflow-hidden my-20'>
          <h2 className='text-2xl mb-6'>Videos</h2>
          <div className='flex min-w-min gap-5'>
            {videos?.map((video, index) => {
              return (
                <article key={index} style={{ backgroundImage: `url("https://img.youtube.com/vi/${video.key}/hqdefault.jpg")` }} onClick={() => changeVideoModal({ key: video.key })}
                className='flex relative w-[380px] h-[215px] cursor-pointer bg-cover bg-center bg-no-repeat aspect-[4/3] before:content-[""] before:top-0 before:w-full before:h-full before:absolute before:bg-gradient-to-t hover:opacity-80 transition-opacity from-black to-transparent
                after:content-playVideoIcon after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:opacity-0 after:hover:opacity-100 after:transition after:duration-300
                '>
                  <header className='self-end z-10 pb-3 text-lg'>
                    <h3 >{video.name}</h3>
                  </header>
                </article>
              )
            })}
          </div>
        </section>
      )}
    </>
  )
}
