import React, { useEffect } from 'react'
import { useParams } from 'wouter'
import { Header } from '../components/Header'
import { useMovies } from '../hooks/useMovies'
import { StarRateIcon } from '../components/Icons'
import { useCredits } from '../hooks/useCredits'

export function MoviePage ({}) {
  const params = useParams()
  const { movies, getMovieByID } = useMovies({ id: params.id })
  const { credits } = useCredits({ id: params.id })
  console.log(credits)
  useEffect(() => {
    if (params.id === undefined) return
    getMovieByID({ id: params.id })
  }, [])

  return (
    <>
      <Header></Header>
      <section className='pt-16 px-12 gap-8 relative flex '>
        <img src={movies && (`https://image.tmdb.org/t/p/original/${movies[0].poster}`)} alt="" className='absolute w-full left-0 right-0 m-auto blur-3xl opacity-60 -z-10 pt-16 h-full'/>
        {movies &&
          (<>
            <img src={`https://image.tmdb.org/t/p/original/${movies[0].poster}`} alt="" className='mt-4 w-[400px]'/>
            <article>
              <header>
                <div className='flex justify-between mt-10 mb-1'>
                <h1 className='text-4xl  font-semibold'>{movies[0].title}</h1>

                  <span className='flex gap-2 items-center font-semibold text-xl'> <StarRateIcon classes={'w-[28px]'}/> {movies[0].rate.toFixed(1)} / 10</span>
                </div>
                <div>
                    <span className='text-gray-400 font-normal'>{movies[0].date?.slice(0, 4)}
                    <span className='mx-4'>-</span>
                    {Math.trunc(movies[0].duration / 60)}h {movies[0].duration % 60}min</span>
                  </div>
              </header>
              <div className='flex flex-col gap-6 mt-6'>
                <p>{movies[0].overview}</p>
                <div className='flex gap-3'>
                  {movies[0].genres.map(({ id, name }) => {
                    return (<span key={id} className='rounded-3xl border-gray-100 border-solid border px-4 py-1 text-gray-100 bg-gray-950 bg-opacity-30'>{name}</span>)
                  })}
                </div>

              </div>
            </article>
          </>
          )
        }

      </section>
    </>
  )
}

// bg-center bg-contain bg-no-repeat ' style={{ background: `url('https://image.tmdb.org/t/p/original/${poster}')`
