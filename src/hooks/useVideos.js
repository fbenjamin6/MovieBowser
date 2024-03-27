import { useEffect, useState } from 'react'
import { searchVideos } from '../services/searchVideos'
import { useLanguageContext } from './useLanguageContext'

export function useVideos ({ type, id }) {
  const [videos, setVideos] = useState()
  const [trailer, setTrailer] = useState()
  const { language, langToUse } = useLanguageContext()

  const getVideos = async () => {
    const { results } = await searchVideos({ id, lang: langToUse })
    console.log(results)
    setVideos(results)
  }

  useEffect(() => {
    getVideos()
  }, [id, langToUse])

  useEffect(() => {
    if (type !== 'trailer') return
    const newTrailer = videos?.find(({ name, type }) => {
      if (language === 'EN') {
        return (name.includes('Trailer') && type === 'Trailer') === true
      }
      if (language === 'ES') {
        return (name.includes('Tráiler') && type === 'Trailer') === true
      }
    })
    return setTrailer(newTrailer?.key)
  }, [videos])

  return { trailer, videos }
}
