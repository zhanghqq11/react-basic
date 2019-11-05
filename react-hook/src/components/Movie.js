import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie =({Movie}) =>{
    const poster = Movie.poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : Movie.poster;
    return (
        <div className="movie">
            <h2>{Movie.Title}</h2>
            <div>
                <img
                    width="200"
                    alt={`The movie titled: ${Movie.Title}`}
                    src={poster}
                />
            </div>
            <p>({Movie.Year})</p>
        </div>
    );
}

export default Movie;