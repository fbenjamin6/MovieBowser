import React from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { MovieIndexProvider } from '../context/movieIndex'
import { RowOfMovies } from '../components/RowOfMovies'

export function HomePage () {
  return (
    <MovieIndexProvider>
      <Header/>
      <Hero/>
      <RowOfMovies rowTitle={'Most Popular Movies'} type={'popular'} href={'/movielist/popular'}/>
      <RowOfMovies rowTitle={'Top Rated Movies'} type={'top_rated'} href={'/movielist/top_rated'}/>
    </MovieIndexProvider>
  )
}
