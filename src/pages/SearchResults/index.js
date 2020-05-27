import React, {useEffect, useRef, useCallback} from 'react'
import Spinner from 'components/Spinner'
import ListOfMovies from 'components/ListOfMovies'
import {useMovies} from 'hooks/useMovies'
import useNearScreen from 'hooks/useNearScreen'
import debounce from "just-debounce-it"

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { loading, movies, setPage } = useMovies({ keyword })
  const visorRef = useRef()
  const {isNearScreen} = useNearScreen({ externalRef: !loading && visorRef, once: false })

  console.log(isNearScreen)
  
  // const debounceNextPage = useCallback(debounce(
  //   () => console.log('next page'), 2000
  // ))

  const debounceNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 2000
  ), [])

  useEffect(function () {
    // if (isNearScreen) setPage(prevPage => prevPage + 1)
    if (isNearScreen) debounceNextPage()
  })

  return <>
    {loading
      ? <Spinner />
      : <>
        <h3 className="App-title">
          {decodeURI(keyword)}
        </h3>
        <ListOfMovies movies={movies} />
        <div data-testid="visor" ref={visorRef} />
      </>
    }
  </>
}