import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API_OPTIONS from "../components/constant";
import { setselectedvideo } from "../utils/movieSlice";

const useSelectedVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    if (json && json.results) {
      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length === 0 ? json.results[0] : filterData[0];
      dispatch(setselectedvideo(trailer));
    } else {
      console.error("json or json.results is undefined");
    }
  };
  useEffect(() => {
    getMovieVideos();
  }, [movieId]);
};

export default useSelectedVideo;
