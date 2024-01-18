import React from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { MovieIndexProvider } from '../context/movieIndex'
import { RowOfMovies } from '../components/RowOfMovies'
import { VideoModal } from '../components/VideoModal'

export function HomePage () {
  return (
    <MovieIndexProvider>
      <VideoModal/>
      <Header/>
      <Hero/>
      <RowOfMovies rowTitle={'Most Popular Movies'} type={'popular'} href={'/list/movies/popular'}/>
      <RowOfMovies rowTitle={'Top Rated Movies'} type={'top_rated'} href={'/list/movies/top_rated'}/>
    </MovieIndexProvider>
  )
}
