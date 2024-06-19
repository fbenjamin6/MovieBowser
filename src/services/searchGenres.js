import { API_OPTIONS } from '../utils/constants'

export function searchGenres ({ lang, mediaType }) {
  return fetch(`https://api.themoviedb.org/3/genre/${mediaType}/list?language=${lang}`, API_OPTIONS)
    .then(response => response.json())
    .then(response => response.genres)
    .catch(err => console.error(err))
}
