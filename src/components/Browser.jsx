import React, { useState } from 'react'
import loupe from '../assets/loupe.png'
import { useBrowser } from '../hooks/useBrowser'
import { Link } from 'wouter'
import { useMovies } from '../hooks/useMovies'

export function Browser () {
  const { value, setValue, handleSubmit, isVisible, setIsVisible } = useBrowser()
  const { movies } = useMovies({ type: 'byName', query: value, quantity: 10 })
  const [isFocus, setIsFocus] = useState(false)
  const [isHover, setIsHover] = useState(false)

  return (
    <div className='relative'>
      <form onSubmit={(e) => handleSubmit(e)} action="" className={`flex rounded-md border-2 px-2.5 py-1.5 h-9 transition-all ease-out duration-200 ${isHover ? 'w-[300px]' : 'w-[38px]'} ${isFocus ? 'border-cyan-500' : isHover ? 'border-white' : 'border-transparent'}`}
      onMouseEnter={() => {
        setIsHover(true)
      }}
      onMouseLeave={() => {
        if (isFocus || isVisible) return
        setIsHover(false)
        setIsVisible(false)
      }}>
        <input type="text" value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => {
          value.length > 3 ? setIsVisible(true) : setIsVisible(false)
          setIsFocus(true)
          setIsHover(true)
        }}
        onBlur={() => {
          setIsVisible(false)
          setIsHover(false)
          setIsFocus(false)
        }}

        className={`w-full bg-transparent focus-visible:outline-none transition-colors ${(isHover || isFocus) ? 'text-white' : 'text-transparent'}`}/>
        <button type="submit" ><img src={loupe} alt="" className=' max-w-[14px]'/></button>
      </form>
      <ul className={`${isVisible ? 'opacity-100 ' : ' opacity-0 pointer-events-none'} transition-opacity flex flex-col rounded absolute bg-gray-900/60 backdrop-blur w-full max-h-[400px] overflow-auto scroll` } >
        {movies?.map((movie, index) => {
          return (
            <li key={index} className='hover:bg-gray-950/70 backdrop-blur' onClick={() => setIsVisible(false)}>
              <Link href={`/movie/${movie.id}`} >
                <a href="" className='flex gap-3 items-center p-3'>
                  <img src={`https://image.tmdb.org/t/p/original/${movie.poster}`} alt="" className='w-[50px]'/>
                  <div>
                    <h4 className='font-semibold'>{movie.title}</h4>
                    <span className='text-gray-400'>{movie.date?.slice(0, 4)}</span>
                  </div>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
