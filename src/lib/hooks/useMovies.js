'use client'
import { useCallback, useEffect, useState, useRef } from 'react'
import { searchMedia } from '../services/searchMedia'

export function useMovies ({ searchType, mediaType, quantity, id, query, genre, lang }) {
  const [movies, setMovies] = useState()
  const [newType, setNewType] = useState(searchType)
  const timeoutRef = useRef(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const observer = useRef()

  useEffect(() => {
    setNewType(searchType)
    setPage(1)
    setLoading(true)
  }, [searchType])

  const getMovies = useCallback(async () => {
    if (query?.length < 3) return
    setLoading(true)
    const { media: newMovies, totalPages: newTotalPages } = await searchMedia({ searchType: newType, mediaType, id, query, genre, page, lang })
    if (quantity !== undefined) {
      const newMoviesSliced = newMovies?.slice(0, quantity)
      return newMoviesSliced
    }
    setTotalPages(newTotalPages)
    return newMovies
  }, [{ searchType }])

  const settingMovies = async () => {
    const newMovies = await getMovies()
    setMovies(newMovies)
    setLoading(false)
  }

  useEffect(() => {
    if (!searchType) return
    if (searchType === 'byName' && query?.length < 3) return
    if (searchType === 'byName' && query?.length >= 3) {
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
    if (!searchType) return
    settingMovies()
  }, [id, newType, lang, genre])

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
