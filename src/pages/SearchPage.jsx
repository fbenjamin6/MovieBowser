import React from 'react'
import { Header } from '../components/Header'
import { PageOfMovies } from '../components/PageOfMovies'
import { useParams } from 'wouter'
import { useMovies } from '../hooks/useMovies'

export function SearchPage () {
  const { query, genre, page } = useParams()
  const { movies } = useMovies({ type: query ? 'byName' : 'byGenre', query, genre, page })
  console.log(page)
  return (
    <>
      <Header></Header>
      <section className='pt-28'>

      </section>
      <PageOfMovies movies={movies}></PageOfMovies>
    </>
  )
}
