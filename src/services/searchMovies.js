const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmQxZGQyMzI1YzZkODRjMjE3Y2NiODUzN2EyYmIxZiIsInN1YiI6IjY1NTAwYmEyMDgxNmM3MDExYTA4ZDkxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GOcHFICcoZsytRdLtODSOcvXCRUNqekaB4Q7OSbNuqk'
  }
}

export function searchMovies ({ type, id, query, page, genre, lang }) {
  const searchs = {
    trending: `https://api.themoviedb.org/3/trending/movie/week?language=${lang}&page=${page}`,
    top_rated: `https://api.themoviedb.org/3/movie/top_rated?language=${lang}&page=${page}`,
    popular: `https://api.themoviedb.org/3/movie/popular?language=${lang}&page=${page}`,
    byId: `https://api.themoviedb.org/3/movie/${id}?language=${lang}`,
    byName: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=${lang}&page=${page}`,
    byGenre: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${lang}&page=${page}&sort_by=popularity.desc&with_genres=${genre}`
  }
  if (type === 'byName' && query === undefined) return
  return fetch(searchs[type], options)
    .then(res => res.json())
    .then(res => {
      const totalPages = res.total_pages
      const searchResults = id !== undefined ? [res] : res.results
      // tengo que filtrar las peliculas que tengan data vaciax
      const filteredMovies = searchResults.filter(movie => {
        if (!movie.poster_path || !movie.release_date || !movie.vote_average || !movie.vote_count) {
          return false
        } else { return true }
      })
      const mappedMovies = filteredMovies?.map(movie => {
        return ({
          id: movie.id,
          title: movie.title,
          poster: movie.poster_path,
          bigPoster: movie.backdrop_path,
          overview: movie.overview,
          rate: movie.vote_average,
          voteCount: movie.vote_count,
          date: movie.release_date,
          genres: movie.genres,
          duration: movie.runtime
        })
      })

      return { movies: mappedMovies, totalPages }
    })
    .catch(err => console.error(err))
}
