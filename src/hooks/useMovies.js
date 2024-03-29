import { useCallback, useEffect, useState, useRef } from 'react'
import { searchMovies } from '../services/searchMovies'
import { useLanguageContext } from './useLanguageContext'

export function useMovies ({ type, quantity, id, query, genre }) {
  const [movies, setMovies] = useState()
  const [newType, setNewType] = useState(type)
  const timeoutRef = useRef(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const observer = useRef()
  const { langToUse } = useLanguageContext()

  useEffect(() => {
    setNewType(type)
    setPage(1)
    setLoading(true)
  }, [type])

  const getMovies = useCallback(async () => {
    if (query?.length < 3) return
    setLoading(true)
    const { movies: newMovies, totalPages: newTotalPages } = await searchMovies({ type: newType, id, query, genre, page, lang: langToUse })
    if (quantity !== undefined) {
      const newMoviesSliced = newMovies?.slice(0, quantity)
      return newMoviesSliced
    }
    setTotalPages(newTotalPages)
    return newMovies
  }, [{ type }])

  const settingMovies = async () => {
    const newMovies = await getMovies()
    setMovies(newMovies)
    setLoading(false)
  }

  useEffect(() => {
    if (!type) return
    if (type === 'byName' && query.length < 3) return
    if (type === 'byName' && query.length >= 3) {
      timeoutRef.current = setTimeout(() => {
        console.log('tiemout')
        settingMovies()
      }, 200)
    }

    return () => {
      clearTimeout(timeoutRef.current)
      setMovies([])
    }
  }, [query])

  useEffect(() => {
    if (!type) return
    settingMovies()
  }, [id, newType, langToUse, genre])

  // INFINITE SCROLL

  const lastMovieRef = useCallback((ref) => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && page < totalPages) {
        setPage(prevPage => (prevPage += 1))
      }
    })
    if (ref) observer.current.observe(ref)
  }, [movies])

  useEffect(() => {
    if (!movies || page === 1) return

    setLoading(true)
    const gettingMovies = getMovies()
    gettingMovies.then(newMovies => {
      setMovies(prevMovies => [...new Set([...prevMovies, ...newMovies])])
    })
  }, [page])

  return { movies, settingMovies, lastMovieRef, loading }
}
