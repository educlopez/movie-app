import React from 'react'
import {Redirect} from 'wouter'
import Movie from 'components/Movie'
import Spinner from 'components/Spinner'
import useSingleMovie from 'hooks/useSingleMovie'
import useSEO from 'hooks/useSEO'

export default function Detail ({ params }) {
  const {movie, isError, isLoading} = useSingleMovie({imdbID: params.imdbID })
  const Title = movie ? movie.Title : isLoading ? 'Cargando...' : ''
  useSEO({description: 'working', Title})

  if (isLoading) return <Spinner />
  if (isError) return <Redirect to='/404' />
  if (!movie) return null

  return <>
      <h3 className="App-title">{movie.Title}</h3>
      <span>{movie.Rated}</span>
      <Movie {...movie} />
    </>
}