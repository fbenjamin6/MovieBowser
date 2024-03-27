import React from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { MovieIndexProvider } from '../context/movieIndexContext'
import { RowOfMovies } from '../components/RowOfMovies'
import { VideoModal } from '../components/VideoModal'
import { Footer } from '../components/Footer'
import { CarouselOfMovies } from '../components/CarouselOfMovies'
import { Link } from 'wouter'

export function HomePage () {
  return (
    <MovieIndexProvider>
      <VideoModal/>
      <Header/>
      <Hero/>
      <CarouselOfMovies type={'popular'}>
        Most Popular Movies
      </CarouselOfMovies>
      <CarouselOfMovies type={'top_rated'}>
        Top Rated Movies
      </CarouselOfMovies>
       {/* <RowOfMovies rowTitle={'Most Popular Movies'} type={'popular'} href={'/list/movies/popular'}/>
       <RowOfMovies rowTitle={'Top Rated Movies'} type={'top_rated'} href={'/list/movies/top_rated'}/> */}

      <Footer/>
    </MovieIndexProvider>
  )
}
