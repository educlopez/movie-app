import React from 'react'
import {Link} from 'wouter'
import './Movie.css'

export default function Movie({Poster, Title, imdbID, Year, Type}){
    return (
        <div className="Movie">
            <Link to={`/movie/${imdbID}`}
            className="Movie-link">
                <img loading='lazy' src={Poster} alt={Title} />
                <h4>{Title}-{Year}-{Type}</h4>
            </Link>
        </div>
    )
}
