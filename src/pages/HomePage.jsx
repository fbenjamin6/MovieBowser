import React from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { MovieIndexProvider } from '../context/movieIndexContext'
import { VideoModal } from '../components/VideoModal'
import { Footer } from '../components/Footer'
import { CarouselOfMovies } from '../components/CarouselOfMovies'
import { useLanguageContext } from '../hooks/useLanguageContext'

export function HomePage () {
  const { language } = useLanguageContext()
  return (
    <MovieIndexProvider>
      <VideoModal/>
      <Header/>
      <Hero/>
      <CarouselOfMovies type={'popular'}>
        {language === 'EN' ? 'Most Popular Movies' : 'Películas más populares'}
      </CarouselOfMovies>
      <CarouselOfMovies type={'top_rated'}>
        {language === 'EN' ? 'Top Rated Movies' : 'Películas mejor valoradas'}
      </CarouselOfMovies>
      <Footer/>
    </MovieIndexProvider>
  )
}
