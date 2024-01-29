import React from "react";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpComing";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";
import Navbar from "./Navbar";

const Browse = () => {
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpComing();
  return (
    <>
      <div className="absolute top-0 z-20"><Navbar/></div>
      <MainContainer />
      <SecoundaryContainer />
    </>
  );
};

export default Browse;
