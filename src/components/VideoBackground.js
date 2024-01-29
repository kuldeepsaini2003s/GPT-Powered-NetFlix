import React, { useEffect, useState } from "react";
import API_OPTIONS from "./constant";
import { useSelector } from "react-redux";

const VideoBackground = () => {
  const [key, setKey] = useState();
  const movieid = useSelector((store) => store.movies.trailer);

  async function getData() {
    const response = await fetch('https://api.themoviedb.org/3/movie/' + movieid + '/videos?language=en-US'
      ,
      API_OPTIONS
    );
    console.log(response)
    const data = await response.json();
  
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {
        <div className="ml-12 absolute top-0 ">
          {
            <iframe
              className="w-screen aspect-video"
              src={
                "https://www.youtube.com/embed/gB--kMMcrUY?autoplay=1&mute=1"
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
