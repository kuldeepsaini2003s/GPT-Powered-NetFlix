import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecoundaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    
  return (
    <div>
      <div className="bg-blakc">
        <div className="absolute top-[rem] left-[2rem] z-20 border-black">
          <MovieList title="Trending" movies={movies?.nowplaying} />
          <MovieList title="Top Rated" movies={movies?.toprated} />
          <MovieList title="Up Coming" movies={movies?.upcoming} />
          <MovieList title="Popular" movies={movies?.popular} />
        
        </div>
      </div>
    </div>
  );
};

export default SecoundaryContainer;
