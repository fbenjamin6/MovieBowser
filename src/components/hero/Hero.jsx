import React from 'react'
import { HeroSlider } from './HeroSlider'
import { searchMedia } from '../../services/searchMedia'
import { MovieIndexProvider } from '../../context/movieIndexContext'

export async function Hero ({ lang }) {
  const { media } = await searchMedia({ searchType: 'trending', mediaType: 'movie', quantity: 5, lang, page: 1 })

  // const awaitTimeout = delay =>
  //   new Promise(resolve => setTimeout(resolve, delay))

  // const asd = await awaitTimeout(5000)

  return (
    <MovieIndexProvider>
      <section id="hero" className="overflow-hidden relative max-w-full h-[800px]">
        {media && <HeroSlider movies={media}></HeroSlider>}
      </section>
    </MovieIndexProvider>
  )
}
