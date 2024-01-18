import React from 'react'
import playIcon from '../assets/playIcon.png'
import { useVideoModal } from '../hooks/useVideoModal'

export function ButtonWatchTrailer ({ trailer, classes, imgWidth }) {
  const { changeVideoModal } = useVideoModal()
  const className = `${classes} hover:scale-105 transition duration-300   `
  return (
    <>
      <button href='' target='_blank' className={className} rel="noreferrer" onClick={() => changeVideoModal({ key: trailer })}>
        <img src={playIcon} alt="" className={`inline ${imgWidth}`}/>
        WATCH TRAILER
      </button>
    </>
  )
}
