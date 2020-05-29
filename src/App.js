import React, {Suspense} from 'react';
import './App.css'

import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Pepito from './context/StaticContext'
import {MoviesContextProvider} from './context/MoviesContext'
import { Link, Route } from "wouter"

const HomePage = React.lazy(() => import('./pages/Home'))

export default function App() {
  return (
  <Pepito.Provider value={{name: 'Educlopez',
  suscribeteAlCanal: true}}>
      <div className="App">
        <Suspense fallback={null}>
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt='Moviefy logo' src='/logo.png' />
            </figure>
          </Link>
          <MoviesContextProvider>
            <Route
              component={HomePage}
              path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword"  />
            <Route
              component={Detail}
              path="/movie/:imdbID"
            />
          </MoviesContextProvider>
        </section>
        </Suspense>
      </div>
    </Pepito.Provider>
  )
}
