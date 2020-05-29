import React from 'react';
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Pepito from './context/StaticContext'
import {MoviesContextProvider} from './context/MoviesContext'
import { Link, Route } from "wouter"

export default function App() {
  return (
  <Pepito.Provider value={{name: 'midudev',
  suscribeteAlCanal: true}}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt='Movie logo' src='/logo.png' />
            </figure>
          </Link>
          <MoviesContextProvider>
            <Route
              component={Home}
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
      </div>
    </Pepito.Provider>
  )
}