'use client'
import { useCallback, useEffect, useState, useRef } from 'react'
import { searchMedia } from '../services/searchMedia'

export function useInfinityScroll ({ searchType, mediaType, query, genre, lang, totalPages }) {
  const [media, setMedia] = useState()
  const [page, setPage] = useState(1)
  const observer = useRef()

  const getMedia = useCallback(async () => {
    const { media: newMedia } = await searchMedia({ searchType, mediaType, query, genre, page, lang })
    return newMedia
  }, [{ searchType }])

  const settingMedia = async () => {
    const newMedia = await getMedia()
    setMedia(newMedia)
  }

  const loaderRef = useCallback((ref) => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && page < totalPages) {
        setPage(prevPage => (prevPage += 1))
      }
    }, { rootMargin: '-80px 0px' })
    if (ref) observer.current.observe(ref)
  }, [media])

  useEffect(() => {
    if (page === 1) return
    if (!media) {
      settingMedia()
      return
    }
    const gettingMedia = getMedia()
    gettingMedia.then(newMedia => {
      setMedia(prevMedia => {
        return [...new Set([...prevMedia, ...newMedia])]
      })
    })
  }, [page])

  return { media, loaderRef, page }
}
