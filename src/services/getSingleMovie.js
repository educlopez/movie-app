import {API_KEY, API_URL} from './settings'

const fromApiResponseToMovie = apiResponse => {
  const {Search = []} = apiResponse

  const {imdbID, Title, Poster, Rated} = Search
  return { Title, imdbID, Poster , Rated }
}

export default function getSingleMovie ({imdbID}) {
  console.log(imdbID)
  return fetch(`${API_URL}/?apikey=${API_KEY}&t=${imdbID}`)
    .then(res => res.json())
    .then(fromApiResponseToMovie)
}