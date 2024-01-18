import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'wouter'
import { useMovies } from './useMovies'

export function useSearch () {
  const [value, setValue] = useState('')
  const [location, setLocation] = useLocation()
  const [display, setDisplay] = useState(false)
  const timeoutRef = useRef(0)
  const { movies } = useMovies({ type: 'byName', query: value, quantity: 10, page: 1 })

  useEffect(() => {
    setDisplay(false)
    if (value.length < 3) return

    timeoutRef.current = setTimeout(() => {
      setDisplay(true)
    }, 700)

    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [value])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.length < 3) return
    const searchQuery = `/search/q=${value}/page=1`
    setLocation(searchQuery)
  }

  return { value, setValue, handleSubmit, movies, display, setDisplay }
}
