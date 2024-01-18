import React from "react";
import { Link } from "react-router-dom";
const LoginScreen = ({ name }) => {
  return (
    <>
        <div
          id="login-main-container"
          className="mt-36 px-36  text-center flex flex-col justify-center items-center "
        >
          <h1 className="text-[50px] font-bold ">
            The biggest Indian hits. Ready to watch here from ₹149.
          </h1>
          <h1 className="text-[26px] font-light">
            Join today. Cancel anytime.
          </h1>
          <h1 className="text-[26px] mt-6">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h1>
          <div className="flex mt-6 ">
            <input
              type="text"
              placeholder="Email"
              className="h-[56px] w-[368px] rounded-lg p-4 bg-black bg-opacity-40 border-2 border-LightGray text-LightGray"
            ></input>
           <Link to="/login">
           <button className="h-[56px] w-[210px] flex justify-center items-center  bg-LightRed hover:bg-DarkRed rounded-lg text-[25px]  ml-2 text-base">
              Get Started
            </button>
           </Link>
          </div>
        </div>
    </>
  );
};

export default LoginScreen;
