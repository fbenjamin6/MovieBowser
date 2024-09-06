import React from 'react'
import { HeroSlider } from './HeroSlider'
import { searchMedia } from '@/lib/services/searchMedia'
import { MovieIndexProvider } from '../../context/movieIndexContext'

export async function Hero ({ lang }) {
  const { media } = await searchMedia({ searchType: 'trending', mediaType: 'movie', quantity: 5, lang, page: 1 })

  return (
    <MovieIndexProvider>
      <section id="hero" className="overflow-hidden relative max-w-full h-[600px] md:h-[800px]">
        {media && <HeroSlider movies={media}></HeroSlider>}
      </section>
    </MovieIndexProvider>
  )
}
