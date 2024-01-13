import { useCallback, useEffect, useState } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies () {
  const [movies, setMovies] = useState()

  const getHomePageMovies = useCallback(async ({ type, quantity }) => {
    const newMovies = await searchMovies({ type })
    const newMoviesSliced = newMovies.slice(0, quantity)
    console.log(newMoviesSliced)
    setMovies(newMoviesSliced)
  }, [])

  const getPageMovies = useCallback(async ({ type }) => {
    const newMovies = await searchMovies({ type })
    setMovies(newMovies)
  }, [])

  const getMovieByID = useCallback(async ({ id }) => {
    const newMovies = await searchMovies({ type: 'byId', id })
    setMovies(newMovies)
  }, [])

  // const getMovies = useCallback(async ({ type, quantity, id }) => {
  //   const newMovies = await searchMovies({ type, id })

  //   if (quantity !== undefined) {
  //     const newMoviesSliced = newMovies.slice(0, quantity)
  //     setMovies(newMoviesSliced)
  //     return
  //   }
  //   setMovies(newMovies)
  // }, [])

  // useEffect(() => {
  //   getMovies({type, quantity, id})
  // }, [])

  return { movies, getHomePageMovies, getPageMovies, getMovieByID }
}
