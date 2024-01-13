import { useState } from 'react'
import { searchVideos } from '../services/searchVideos'

export function useVideos () {
  const [videos, setVideos] = useState()
  const [trailer, setTrailer] = useState()

  const getTrailer = async (id) => {
    const { results } = await searchVideos(id)
    console.log(results)
    const newTrailer = results.find(({ name, type }) => (name.includes('Official Trailer') && type === 'Trailer') === true)
    setTrailer(newTrailer?.key)

    // hay que utilizar el getvideos para no tner que llamar 2 veces a la api
  }

  const getVideos = () => {

  }

  return { trailer, getTrailer }
}
