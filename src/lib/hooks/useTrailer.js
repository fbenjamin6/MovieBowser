'use client'
import { useEffect, useState } from 'react'
import { searchVideos } from '../services/searchVideos'
import { useLang } from './useLang'
import { useParams } from 'next/navigation'

export function useTrailer ({ id }) {
  const lang = useLang()
  const { mediaType } = useParams()
  const [videos, setVideos] = useState()
  const [trailerKey, setTrailerKey] = useState()

  const getVideos = async () => {
    const { videos } = await searchVideos({ id, lang, mediaType: mediaType || 'movie' })
    setVideos(videos)
  }

  useEffect(() => {
    getVideos()
  }, [id, lang])

  useEffect(() => {
    const newTrailer = videos?.find(({ name, type }) => {
      if (lang === 'en' && (name.includes('Trailer') && type === 'Trailer')) {
        return true
      }
      if (lang === 'es' && (name.includes('Tráiler') && type === 'Trailer')) {
        return true
      }
      return false
    })
    return setTrailerKey(newTrailer?.key)
  }, [videos])

  return { trailerKey }
}
