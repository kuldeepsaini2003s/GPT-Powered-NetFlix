import React from "react";
import Banner from "./Banner";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

import useMovieTrailer from "../hooks/useMovieTrailer";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useTrending from "../hooks/useTrending";
import useUpComing from "../hooks/useUpComing";
import Header from "./Header";

const Browse = () => {
  useMovieTrailer();

  const movies = useSelector((store) => store.movies);
 
  useNowPlaying();
  usePopular();
  useTopRated();
  useTrending();
  useUpComing();
  return (
    <>
      <Header/>
      <Banner />
      <div className="bg-blakc">
      <div className="absolute top-[rem] left-[2rem] z-20 border-black">
        <MovieList title="Trending" movies={movies?.trending} />
        <MovieList title="Top Rated" movies={movies?.toprated} />
        <MovieList title="Up Coming" movies={movies?.upcoming} />
        <MovieList title="Popular" movies={movies?.popular} />
      </div>
      </div>
    </>
  );
};

export default Browse;
