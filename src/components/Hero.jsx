import React, { useEffect } from 'react'
import { useMovies } from '../hooks/useMovies'
import { HeroSlider } from './HeroSlider'

export function Hero () {
  const { movies, getHomePageMovies } = useMovies()

  useEffect(() => {
    getHomePageMovies({ type: 'trending', quantity: 5 })
  }, [])

  return (
    <section id="hero" className="overflow-hidden relative max-w-full">
      {movies && <HeroSlider movies={movies}></HeroSlider>}
    </section>
  )
}
