import React from "react";
import Banner from "./Banner";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const Browse = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <>
      <Banner />
      <div className="absolute top-[41rem] left-[2rem] z-20 border-black">
        <MovieList title="Trending" movies={movies?.trending} />
        <MovieList title="Top Rated" movies={movies?.toprated} />
        <MovieList title="Up Coming" movies={movies?.upcoming} />
        <MovieList title="Popular" movies={movies?.popular} />
      </div>
    </>
  );
};

export default Browse;
