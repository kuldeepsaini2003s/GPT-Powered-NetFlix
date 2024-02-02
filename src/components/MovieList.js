import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => { 
  return (
    <>
      <div className="movies-list">
        <h1 className="mb-6 text-3xl">{title}</h1>
        <div className="flex overflow-x-auto md:overflow-x-auto md:overflow-y-hidden mb-4">
          <div className="flex mb-2">
          {movies && Array.isArray(movies)
              ? movies?.map((movies) => (
                  <MovieCard
                    key={movies.id}
                    poster_path={movies.poster_path}
                    id={movies.id}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
