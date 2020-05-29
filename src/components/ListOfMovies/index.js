import React from 'react';
import Movie from '../Movie'
import './styles.css'


export default function ListOfMovies({movies}) {
    return <div className="ListOfMovies">
        {
            movies.map(({imdbID, Title, Poster,Type,Year}) =>
                <Movie
                imdbID={imdbID}
                key={imdbID}
                Title={Title}
                Poster={Poster}
                Type={Type}
                Year={Year}
                />
            )
        }
    </div>
}
