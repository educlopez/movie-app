import {useMovies} from 'hooks/useMovies'
import { useEffect, useState } from 'react'
import getSingleMovie from 'services/getSingleMovie'

export default function useSingleMovie ({id}) {
  const {movies} = useMovies()
  const movieFromCache = movies.find(singleMovie => singleMovie.id === id)

  const [movie, setMovie] = useState(movieFromCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!movie) {
      setIsLoading(true)
      getSingleMovie({id})
        .then(movie => {
          setIsLoading(false)
          setMovie(movie)
        })
        .catch(() => {
          setIsLoading(false)
          setIsError(true)
        })
    }
  }, [movie, id])

  return {isLoading, isError, movie}
}
