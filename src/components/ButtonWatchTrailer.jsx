import React from 'react'
import playIcon from '../assets/playIcon.png'
import { useVideoModal } from '../hooks/useVideoModal'
import { useLanguageContext } from '../hooks/useLanguageContext'

export function ButtonWatchTrailer ({ trailer, classes, imgWidth }) {
  const { language } = useLanguageContext()
  const { changeVideoModal } = useVideoModal()
  const className = `${classes} hover:scale-105 transition duration-300 flex items-center border border-cyan-600 bg-gray-950 text-white bg-opacity-60 px-4 py-1.5`
  const isEN = language === 'EN'

  return (
    <>
      <button href='' target='_blank' className={className} rel="noreferrer" onClick={() => changeVideoModal({ key: trailer })}>
        <img src={playIcon} alt="" className={`inline ${imgWidth}`} style={{ filter: 'invert(34%) sepia(60%) saturate(1891%) hue-rotate(164deg) brightness(101%) contrast(94%)' }}/>
        {isEN ? 'WATCH TRAILER' : 'VER TRÁILER'}
      </button>
    </>
  )
}
