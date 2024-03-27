import React from 'react'
import { useParams } from 'wouter'
import { Header } from '../components/Header'
import { useMovies } from '../hooks/useMovies'
import { useCredits } from '../hooks/useCredits'
import { MovieInfo } from '../components/MovieInfo'
import { CarouselOfVideos } from '../components/CarouselOfVideos'
import { MovieTopCast } from '../components/MovieTopCast'
import { VideoModal } from '../components/VideoModal'
import { Footer } from '../components/Footer'

export function MoviePage () {
  const params = useParams()
  const { movies } = useMovies({ type: 'byId', id: params.id })
  const { Acting, Writing, Directing } = useCredits({ id: params.id })

  return (
    <>
      <Header></Header>
      {movies && (
      <>
        <VideoModal/>
        <MovieInfo movie={movies[0]} Acting={Acting} Writing={Writing} Directing={Directing}></MovieInfo>
        <CarouselOfVideos id={params.id}></CarouselOfVideos>
        <MovieTopCast Acting={Acting}></MovieTopCast>
      </>
      ) }
      <Footer/>
    </>
  )
}
