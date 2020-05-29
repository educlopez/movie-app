import React, {useCallback, useRef, useEffect} from 'react'
import Spinner from 'components/Spinner'
import ListOfMovies from 'components/ListOfMovies'
import {useMovies} from 'hooks/useMovies'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { loading, movies, setPage } = useMovies({ keyword })
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage])

  useEffect(function () {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return <>
    {loading
      ? <Spinner />
      : <>
        <div className="App-wrapper">
          <h3 className="App-title">
            {decodeURI(keyword)}
          </h3>
          <ListOfMovies movies={movies} />
          <div id="visor" ref={externalRef}></div>
        </div>
      </>
    }
  </>
}