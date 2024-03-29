import React, { useEffect } from 'react'
import { GroupOfMovies } from '../components/GroupOfMovies'
import { Header } from '../components/Header'
import { Link, useParams } from 'wouter'
import { useMovies } from '../hooks/useMovies'
import { Loader } from '../components/Loader'
import { Footer } from '../components/Footer'

export function MovieListPage () {
  const params = useParams()
  const { movies, lastMovieRef, loading } = useMovies({ type: params.type })
  console.log(movies, loading)

  return (
    <>
      <Header></Header>
      <section className='pt-28 px-16 flex gap-8 relative'>
        <Link href='/list/movies/popular' className={`movieList-link-popular text-2xl  ${params.type === 'popular' ? 'text-white active' : 'text-gray-400'} `}>Most Popular</Link>
        <Link href='/list/movies/top_rated' className={`movieList-link-rated text-2xl  ${params.type === 'top_rated' ? 'text-white active' : 'text-gray-400'} `}>Top Rated</Link>
        <Link href='/list/movies/trending' className={`movieList-link-trending text-2xl  ${params.type === 'trending' ? 'text-white active' : 'text-gray-400'}  `}>Trending</Link>
        <div className='movieList-link-border absolute opacity-0 -bottom-2 w-[40px] mt-1 h-[4px] bg-cyan-500 rounded transition-all duration-500'></div>
      </section>

      <GroupOfMovies movies={movies} lastMovieRef={lastMovieRef}></GroupOfMovies>
      {loading && <Loader/>}
      <Footer/>
    </>
  )
}
