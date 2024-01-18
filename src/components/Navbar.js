import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NetflixLogo } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  console.log(user  )
  const signIn = user ? "Logout" : "Sign Up";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <div
      id="Nav-bar"
      className="flex justify-between w-screen px-16 py-5 bg-gradient-to-b from-black "
    >
      <div>
        <img
          src={NetflixLogo}
          className=" h-14 cursor-pointer"
          alt="Logo"
        ></img>
      </div>
      <div className="flex justify-between gap-4 cursor-pointer">
        {user && (
          <div className="h-12 p-4 flex  gap-2 justify-center items-center  rounded-lg bg-LightRed hover:bg-DarkRed text-base">
            <i className="fa-solid fa-user"></i>
            <h1>{user.displayName}</h1>
          </div>
        )}
        <Link to="/login">
          <div
            className="h-12  p-3 rounded-lg bg-LightRed hover:bg-DarkRed text-base"
            onClick={handleSignOut}
          >
            {signIn}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
