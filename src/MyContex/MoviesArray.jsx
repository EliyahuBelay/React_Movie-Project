import React from 'react';

export const MoviesArrayContex = React.createContext();
const arrayOfMovies = [{movieName:"Dragon-Ball"}, {movieName:"Naruto"}];
function MoviesArray(props) {
    return (
        <MoviesArrayContex.Provider value={arrayOfMovies}>
            <div className="App">
                <header className="App-header">
                    {props.hierarchy}
                </header>
            </div>
        </MoviesArrayContex.Provider>
    )

}
export default MoviesArray