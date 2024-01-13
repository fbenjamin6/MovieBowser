const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmQxZGQyMzI1YzZkODRjMjE3Y2NiODUzN2EyYmIxZiIsInN1YiI6IjY1NTAwYmEyMDgxNmM3MDExYTA4ZDkxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GOcHFICcoZsytRdLtODSOcvXCRUNqekaB4Q7OSbNuqk'
  }
}

export function searchVideos (id) {
  return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
}
