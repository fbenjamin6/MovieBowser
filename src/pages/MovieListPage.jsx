import React, { useEffect } from 'react'
import { PageOfMovies } from '../components/PageOfMovies'
import { Header } from '../components/Header'
import { Link, useParams } from 'wouter'
import { useMovies } from '../hooks/useMovies'

export function MovieListPage () {
  const params = useParams()
  const { movies, getMovies } = useMovies({ type: params.type })

  useEffect(() => {
    getMovies()
  }, [params])

  return (
    <>
      <Header></Header>
      <section className='pt-28 px-12 flex gap-8 relative'>
        <Link href='/list/movies/popular' className={`movieList-link-popular text-2xl  ${params.type === 'popular' ? 'text-white active' : 'text-gray-400'} `}>Most Popular</Link>
        <Link href='/list/movies/top_rated' className={`movieList-link-rated text-2xl  ${params.type === 'top_rated' ? 'text-white active' : 'text-gray-400'} `}>Top Rated</Link>
        <Link href='/list/movies/trending' className={`movieList-link-trending text-2xl  ${params.type === 'trending' ? 'text-white active' : 'text-gray-400'}  `}>Trending</Link>
        <div className='movieList-link-border absolute opacity-0 -bottom-2 w-[40px] mt-1 h-[4px] bg-red-600 rounded transition-all duration-500'></div>
      </section>

      <PageOfMovies movies={movies}></PageOfMovies>

    </>
  )
}
