'use server'
import { API_OPTIONS, LANGS } from '../utils/constants'

export async function searchMedia ({ searchType, mediaType, id, query, page, genre, lang, quantity }) {
  const searchs = {
    trending: `https://api.themoviedb.org/3/trending/${mediaType}/week?language=${LANGS[lang]}&page=${page}`,
    top_rated: `https://api.themoviedb.org/3/${mediaType}/top_rated?language=${LANGS[lang]}&page=${page}`,
    popular: `https://api.themoviedb.org/3/${mediaType}/popular?language=${LANGS[lang]}&page=${page}`,
    byId: `https://api.themoviedb.org/3/${mediaType}/${id}?language=${LANGS[lang]}`,
    byRecommendation: `https://api.themoviedb.org/3/${mediaType}/${id}/recommendations?language=${LANGS[lang]}&page=1`,
    byName: `https://api.themoviedb.org/3/search/${mediaType}?query=${query}&include_adult=false&language=${LANGS[lang]}&page=${page}`,
    byGenre: `https://api.themoviedb.org/3/discover/${mediaType}?include_adult=false&include_video=false&language=${LANGS[lang]}&page=${page}&sort_by=popularity.desc&with_genres=${genre}`
  }

  if (searchType === 'byName' && query === undefined) return
  return fetch(searchs[searchType], API_OPTIONS)
    .then(res => res.json())
    .then(res => {
      const totalPages = res.total_pages
      const searchResults = res.results ? res.results : [res]
      const filteredMedia = searchResults.filter(media => {
        if (!media.poster_path || !media.backdrop_path || !media.vote_average || !media.vote_count) {
          return false
        } else { return true }
      })
      const mappedMedia = filteredMedia?.map(media => {
        return ({
          id: media.id,
          title: media.title || media.name,
          poster: media.poster_path,
          bigPoster: media.backdrop_path,
          overview: media.overview,
          rate: media.vote_average,
          voteCount: media.vote_count,
          date: media.release_date,
          genres: media.genres,
          duration: media.runtime || { seasons: media.number_of_seasons, episodes: media.number_of_episodes },
          popularity: media.popularity,
          mediaType: media.release_date ? 'movie' : 'tv'
        })
      })

      if (quantity !== undefined) {
        const slicedMedia = mappedMedia?.slice(0, quantity)
        return { media: slicedMedia, totalPages }
      }

      return { media: mappedMedia, totalPages }
    })
    .catch(err => console.error(err))
}
