import { useCallback, useEffect, useState, useRef } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies ({ type, quantity, id, query, genre }) {
  const [movies, setMovies] = useState()
  const timeoutRef = useRef(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const observer = useRef()

  const getMovies = useCallback(async () => {
    if (query?.length < 3) return

    const { movies: newMovies, totalPages: newTotalPages } = await searchMovies({ type, id, query, genre, page })
    if (quantity !== undefined) {
      const newMoviesSliced = newMovies?.slice(0, quantity)
      return newMoviesSliced
    }
    setTotalPages(newTotalPages)
    return newMovies
  }, [{ type, page }])

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
        settingMovies()
      }, 300)
    } else {
      settingMovies()
    }

    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [id, genre, query, type])

  // INFINITE SCROLL

  // agregar un estado para saber si tiene mas paginas, si no tiene mas paginas o tiene mas de 30 o 40 paginas, cortar el observer y la paginacion

  const lastMovieRef = useCallback((ref) => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && page < totalPages) {
        setPage(prevPage => (prevPage += 1))
      }
    })

    setLoading(false)
    if (ref) observer.current.observe(ref)
  }, [movies])

  useEffect(() => {
    if (!movies) return

    setLoading(true)
    const gettingMovies = getMovies()
    gettingMovies.then(newMovies => {
      setMovies(prevMovies => [...new Set([...prevMovies, ...newMovies])])
    })
  }, [page])

  return { movies, settingMovies, lastMovieRef, loading }
}
