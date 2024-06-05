import { React, useContext } from 'react'
import { MovieIndexContext } from '../../context/movieIndexContext'
import { useHero } from '../../hooks/useHero'

export function HeroSliderLi ({ index, handleClick }) {
  const { movieIndex } = useContext(MovieIndexContext)
  const { loadingProgress } = useHero(index)

  return (
    <li className={`${movieIndex === index ? 'text-white text-lg' : ' text-gray-400 text-s'} flex gap-1 cursor-pointer w-[27]`} onClick={() => handleClick(index)}>
      <div className='bg-loading-bar  m-auto bg-gray-600 rounded-md h-[3px] w-4 overflow-hidden' style={{ display: movieIndex === index ? 'block' : 'none' }}>
        <div className='loading-bar m-auto h-[3px]  w-4 bg-cyan-400 rounded-md transition-transform duration-700 right-4 relative' style={{ transform: `translateX(${loadingProgress + 1}px)`, display: movieIndex === index ? 'block' : 'none' }}></div>
      </div>
      {index + 1}
    </li>
  )
}
