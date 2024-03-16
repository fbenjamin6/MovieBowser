import React from 'react'
import loupe from '../assets/loupe.png'
import { useSearch } from '../hooks/useSearch'
import { Link } from 'wouter'
import { useMovies } from '../hooks/useMovies'

export function Browser () {
  const { value, setValue, handleSubmit, display, setDisplay } = useSearch()
  const { movies } = useMovies({ type: 'byName', query: value, quantity: 10 })

  return (
    <div className='relative' onPointerLeave={() => setDisplay(false)}>
      <form onSubmit={(e) => handleSubmit(e)} action="" className='flex rounded-md border-white border-2 px-2.5 py-1.5 h-9' >
        <input type="text" value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setDisplay(true)}
        onPointerEnter={() => value.length > 3 ? setDisplay(true) : setDisplay(false)}
        className='w-72 bg-transparent focus-visible:outline-none'/>
        <button type="submit" ><img src={loupe} alt="" /></button>
      </form>
      <ul className={`${display ? 'flex' : 'hidden'} flex-col rounded absolute bg-gray-900/60 backdrop-blur w-full max-h-[400px] overflow-auto scroll` } >
        {movies?.map((movie, index) => {
          return (
            <li key={index} className='hover:bg-gray-950/70 backdrop-blur' onClick={() => setDisplay(false)}>
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

// bg-gray-800 bg-opacity-60 backdrop-blur
