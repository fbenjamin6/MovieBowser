import { useParams, useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { useLang } from './useLang'
import { useDebounce, useDebouncedCallback } from 'use-debounce'
import { searchMedia } from '../services/searchMedia'

export function useBrowser () {
  const lang = useLang()
  const router = useRouter()
  const { mediaType } = useParams()
  const [value, setValue] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [media, setMedia] = useState()
  const [query] = useDebounce(value, 200)

  useEffect(() => {
    const getMedia = async () => {
      const { media: movies } = await searchMedia({ searchType: 'byName', mediaType: 'movie', query, lang, quantity: 10, page: 1 })
      const { media: tv } = await searchMedia({ searchType: 'byName', mediaType: 'tv', query, lang, quantity: 10, page: 1 })
      const allMedia = [...movies, ...tv]
      const sortedMedia = allMedia.sort((a, b) => b.voteCount - a.voteCount)
      sortedMedia.splice(10, 20)
      setMedia(sortedMedia)
    }
    getMedia()
  }, [query])

  const debounced = useDebouncedCallback(() => {
    if (value.length < 3) return
    handleVisible(true)
  }, 300)

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    if (value.length < 3) return
    const searchQuery = `/${lang}/${mediaType || 'movie'}/search?query=${value}`
    router.push(searchQuery)
  }, [])

  const handleValue = (e) => {
    setValue(e)
    setIsVisible(false)
    debounced()
  }

  const handleVisible = (boolean) => {
    setIsVisible(boolean)
  }

  const handleFocus = (boolean) => {
    setIsFocus(boolean)
  }

  return { handleSubmit, handleValue, handleFocus, handleVisible, value, isFocus, isVisible, lang, media }
}
