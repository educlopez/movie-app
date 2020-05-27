import React from 'react'
import Movie from 'components/Movie'
import useGlobalMovies from 'hooks/useGlobalMovies'

export default function Detail ({ params }) {
  const movies = useGlobalMovies()

  const movie = movies.find(singleMovie =>
    singleMovie.imdbID === params.imdbID
  )

  return <>
      <h3 className="App-title">{movie.Title}</h3>
      <Movie {...movie} />
    </>
}