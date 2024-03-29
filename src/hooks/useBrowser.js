import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'wouter'

export function useBrowser ({ value }) {
  const [location, setLocation] = useLocation()
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef(0)

  useEffect(() => {
    setIsVisible(false)
    if (value.length < 3) return

    timeoutRef.current = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [value])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.length < 3) return
    const searchQuery = `/search/q=${value}`
    setLocation(searchQuery)
  }

  return { handleSubmit, isVisible, setIsVisible }
}
