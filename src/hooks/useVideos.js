import { useEffect, useState } from 'react'
import { searchVideos } from '../services/searchVideos'

export function useVideos ({ type, id }) {
  const [videos, setVideos] = useState()
  const [trailer, setTrailer] = useState()

  const getVideos = async () => {
    const { results } = await searchVideos(id)
    setVideos(results)
  }

  useEffect(() => {
    getVideos()
  }, [id])

  useEffect(() => {
    if (type !== 'trailer') return
    const newTrailer = videos?.find(({ name, type }) => (name.includes('Official Trailer') && type === 'Trailer') === true)
    return setTrailer(newTrailer?.key)
  }, [videos])

  return { trailer, videos }
}
