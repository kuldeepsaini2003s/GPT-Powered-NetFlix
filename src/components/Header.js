import React from "react";
// import { NetflixBG } from "./constant";
import Navbar from "./Navbar";
import LoginScreen from "./LoginScreen";
import useMovieTrailer from "../hooks/useMovieTrailer";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpComing";

const Header = () => {
 
  return (
    <div
      id="Background"
      className="h-screen w-screen"
      style={{
        backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg')`,
        backgroundSize: "125%",
        backgroundPosition: "center center",

      }}
    >
      <div className=" absolute top-0 bg-opacity-60 bg-black h-screen w-screen  text-white">
        <Navbar />
        <LoginScreen />
      </div>
    </div>
  );
};

export default Header;
