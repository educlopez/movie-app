import React from 'react';
import Movie from '../Movie'
import './styles.css'


export default function ListOfMovies({movies}) {
    return <div className="ListOfMovies">
        {
            movies.map(({imdbID, Title, Poster}) =>
                <Movie
                imdbID={imdbID}
                key={imdbID}
                Title={Title}
                Poster={Poster}
                />
            )
        }
    </div>
}
