import React from "react";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpComing";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";

const Browse = () => {
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpComing();
  return (
    <>
      <MainContainer />
      <SecoundaryContainer />
    </>
  );
};

export default Browse;
