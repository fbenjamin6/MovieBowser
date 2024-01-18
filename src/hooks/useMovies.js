import { useCallback, useEffect, useState, useRef } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies ({ type, quantity, id, query, genre, page }) {
  const [movies, setMovies] = useState()
  const timeoutRef = useRef(0)

  const getMovies = useCallback(async () => {
    if (query?.length < 3) return
    const newMovies = await searchMovies({ type, id, query, genre, page })
    if (quantity !== undefined) {
      const newMoviesSliced = newMovies?.slice(0, quantity)
      setMovies(newMoviesSliced)
      return
    }
    setMovies(newMovies)
  }, [{ type }])

  useEffect(() => {
    if (!type) return
    if (type === 'byName' && query.length < 3) return
    if (type === 'byName' && query.length >= 3) {
      timeoutRef.current = setTimeout(() => {
        getMovies()
      }, 300)
      return
    }
    getMovies()

    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [id, genre, query])

  return { movies, getMovies }
}
