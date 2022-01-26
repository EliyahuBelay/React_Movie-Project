import React from 'react';
import { useContext } from 'react';
import { MoviesArrayContex } from '../../MyContex/MoviesArray';

function Movies() {
    const useContextMovies = useContext(MoviesArrayContex)
    return (
        <div>
            <p>THIS IS MOVIES PAGE</p>
            <ul>
                <li>{useContextMovies[0].movieName}</li>
                <li>{useContextMovies[1].movieName}</li>
            </ul>
        </div>
    )

}
export default Movies