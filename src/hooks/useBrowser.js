import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'wouter'

export function useBrowser () {
  const [value, setValue] = useState('')
  const [location, setLocation] = useLocation()
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef(0)

  useEffect(() => {
    setIsVisible(false)
    if (value.length < 3) return

    timeoutRef.current = setTimeout(() => {
      setIsVisible(true)
    }, 700)

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

  return { value, setValue, handleSubmit, isVisible, setIsVisible }
}
