import {useContext, useEffect, useState} from 'react'
import getMovies from '../services/getMovies'
import MoviesContext from '../context/MoviesContext'

const INITIAL_PAGE = 0

export function useMovies ({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)
  const {movies, setMovies} = useContext(MoviesContext)

  // recuperamos la keyword del localStorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(function () {
    setLoading(true)

    getMovies({ keyword: keywordToUse })
      .then(movies => {
        setMovies(movies)
        setLoading(false)
        // guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, keywordToUse, setMovies])

  useEffect(function () {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getMovies({ keyword: keywordToUse, page })
      .then(nextMovies => {
        setMovies(prevMovies => prevMovies.concat(nextMovies))
        setLoadingNextPage(false)
      })
  }, [keywordToUse, page, setMovies])

  return {loading, loadingNextPage, movies, page, setPage}
}