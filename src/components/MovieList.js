import React from "react";

const MovieList = ({ title, movies }) => {
  return (
    <>
      <div className="movies-list">
        <h1 className="mb-6 text-3xl">{title}</h1>
        <div className="movie-card">
          {movies && Array.isArray(movies)
            ? movies?.map((movies) => (
                <img
                  className="movies rounded-lg"
                  key={movies.id}
                  src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
                  alt=""
                />
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default MovieList;
