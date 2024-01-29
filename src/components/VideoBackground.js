import React, { useEffect, useState } from "react";
import API_OPTIONS from "./constant";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieid}) => {
  console.log(movieid)
  useMovieTrailer(movieid);
  const trailer = useSelector((store) => store.movies?.trailer ? store.movies.trailer[0]?.key : null);
 

 console.log(trailer)
  return (
    <>
      {
        <div className="ml-12  top-0 ">
          {
            <iframe
              className="w-screen aspect-video"
              src={
                "https://www.youtube.com/embed/" + trailer+ "?autoplay=1&mute=1"
              }
              title="YouTube video player"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            ></iframe>
          }
        </div>
      }
    </>
  );
};

export default VideoBackground;
