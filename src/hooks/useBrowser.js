import { useParams, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export function useBrowser ({ value, lang }) {
  const router = useRouter()
  const { mediaType } = useParams()
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
    const searchQuery = `/${lang}/${mediaType || 'movie'}/search?query=${value}`
    router.push(searchQuery)
  }

  return { handleSubmit, isVisible, setIsVisible }
}
