
import {API_KEY, API_URL} from './settings'

const fromApiResponseToMovies = apiResponse => {
  const {Search = []} = apiResponse
  if (Array.isArray(Search)){
      const movies = Search.map(poster => {
      const {Poster, Title, imdbID, Type, Year} = poster
      return {Poster, Title, imdbID, Type, Year}
    })
    //console.log(movies)
    return movies
  }
  return []
}

export default function getMovies ({keyword = 'batman'} = {}) {
  const apiURL = `${API_URL}/?apikey=${API_KEY}&s=${keyword}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToMovies)
}
