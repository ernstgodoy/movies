const api_key = `${process.env.REACT_APP_API_KEY}`

//movie api
export const getMovies = (movie) => {
  return fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${movie}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": api_key,
      "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
  })
  .then(res => res.json())
}

export const getMovieInfo = (id) => {
  return fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${id}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": api_key,
      "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
  })
  .then(res => res.json())
}

//rails api
export const getRequest = () => {
  return fetch(`/movies`, {
    "method": "GET"
  })
  .then(res => res.json())
}

export const postRequest = (movie, token) => {
  return fetch(`/movies`, {
    body: JSON.stringify(movie),
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json', 
      'X-CSRF-TOKEN': token
    }
  })
  .then(res => res.json())
}

export const updateRequest = (movie, token) => {
  return fetch(`/movies/${movie.id}`, {
    body: JSON.stringify(movie),
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json', 
      'X-CSRF-TOKEN': token
    }
  })
  .then(res => res.json())
}