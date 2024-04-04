import React from 'react'
import { Header } from '../components/Header'
import { GroupOfMovies } from '../components/GroupOfMovies'
import { useParams } from 'wouter'
import { useMovies } from '../hooks/useMovies'
import { Loader } from '../components/Loader'
import { Footer } from '../components/Footer'
import { useLanguageContext } from '../hooks/useLanguageContext'
import { useGenres } from '../hooks/useGenres'

export function SearchPage () {
  const { query, genre } = useParams()
  const { movies, lastMovieRef, loading } = useMovies({ type: query ? 'byName' : 'byGenre', query, genre })
  const { genres } = useGenres()
  const { isEN } = useLanguageContext()

  const findGenre = genres.find(genreItem => genreItem.id.toString() === genre)

  return (
    <>
      <Header></Header>
      <section className='pt-36 px-16'>
        {query && <h2 className='text-2xl'>{isEN ? `Search for '${query}'` : `Buscaste '${query}'`}</h2>}
        {findGenre && <h2 className='text-2xl'>{isEN ? `Search for genre '${findGenre?.name}'` : `Buscaste por el género '${findGenre?.name}'`}</h2>}
      </section>
      <GroupOfMovies movies={movies} lastMovieRef={lastMovieRef}></GroupOfMovies>
      {loading && <Loader/>}
      <Footer/>
    </>
  )
}
