import React from 'react'
import {Link} from 'wouter'
import './Movie.css'

export default function Movie({Poster, Title, imdbID}){
    return (
        <div className="Movie">
            <Link to={`/movie/${imdbID}`}
            className="Movie-link">
                <img loading='lazy' src={Poster} alt={Title} />
                <h4>{Title}</h4>
            </Link>
        </div>
    )
}
