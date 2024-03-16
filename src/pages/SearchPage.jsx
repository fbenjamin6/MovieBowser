import React from 'react'
import { Header } from '../components/Header'
import { GroupOfMovies } from '../components/GroupOfMovies'
import { useParams } from 'wouter'
import { useMovies } from '../hooks/useMovies'
import { Loader } from '../components/Loader'
import { Footer } from '../components/Footer'

export function SearchPage () {
  const { query, genre } = useParams()
  const { movies, lastMovieRef, loading } = useMovies({ type: query ? 'byName' : 'byGenre', query, genre })
  return (
    <>
      <Header></Header>
      <section className='pt-28'>

      </section>
      <GroupOfMovies movies={movies} lastMovieRef={lastMovieRef}></GroupOfMovies>
      {loading && <Loader/>}
      <Footer/>
    </>
  )
}
