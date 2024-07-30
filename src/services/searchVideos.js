'use server'
import { API_OPTIONS } from '../utils/constants'

export async function searchVideos ({ id, lang, mediaType }) {
  return fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/videos?language=${lang}`, API_OPTIONS)
    .then(response => response.json())
    .then(({ results }) => {
      return { videos: results }
    })
}
