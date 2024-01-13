const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmQxZGQyMzI1YzZkODRjMjE3Y2NiODUzN2EyYmIxZiIsInN1YiI6IjY1NTAwYmEyMDgxNmM3MDExYTA4ZDkxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GOcHFICcoZsytRdLtODSOcvXCRUNqekaB4Q7OSbNuqk'
  }
}

export function searchMovies ({ type, id }) {
  const searchs = {
    trending: 'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
    top_rated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US',
    popular: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    byId: `https://api.themoviedb.org/3/movie/${id}?language=en-US`
  }
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
          date: movie.release_date,
          genres: movie.genres,
          duration: movie.runtime
        })
      })
      return mappedMovies
    })
    .catch(err => console.error(err))
}
