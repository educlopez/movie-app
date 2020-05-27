import {useContext} from 'react'
import MoviesContext from '../context/MoviesContext'

export default function useGlobalMovies() {
  return useContext(MoviesContext).movies
}