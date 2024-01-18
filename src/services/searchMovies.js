const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmQxZGQyMzI1YzZkODRjMjE3Y2NiODUzN2EyYmIxZiIsInN1YiI6IjY1NTAwYmEyMDgxNmM3MDExYTA4ZDkxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GOcHFICcoZsytRdLtODSOcvXCRUNqekaB4Q7OSbNuqk'
  }
}

export function searchMovies ({ type, id, query, page, genre }) {
  const searchs = {
    trending: 'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
    top_rated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US',
    popular: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    byId: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    byName: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
    byGenre: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`
  }
  if (type === 'byName' && query === undefined) return
  return fetch(searchs[type], options)
    .then(res => res.json())
    .then(res => {
      const searchResults = id !== undefined ? [res] : res.results
      const mappedMovies = searchResults?.map(movie => {
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
      return mappedMovies
    })
    .catch(err => console.error(err))
}
