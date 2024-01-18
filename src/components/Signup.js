import React, { useRef, useState } from "react";
import { NetflixBG, NetflixLogo } from "./constant";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
const Signup = () => {
  const navigate = useNavigate();
  const [errormsg, setErrormsg] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [control, setControl] = useState(false);

  // Redux hooks for dispatching actions and accessing state
  const dispatch = useDispatch();
  const adduser = useSelector((store) => store.user);

  // Switch Button
  const switchbtn = () => {
    setControl(!control);
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const handlekeypress = (event) => {
    if (event.key === "Enter") {
      handlesubmitted();
    }
  };

  const handlesubmitted = () => {
    if (!email.current.value || !password.current.value) {
      setErrormsg("Invalid email or password. Please try again.");
      return;
    }
    if (control && !name.current.value) {
      setErrormsg("Invalid email or password. Please try again.");
      return;
    }
    setErrormsg("");
    console.log(values);

    if (control) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((res) => {
          const user = res.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          });
        })
        .then(() => {
          const { uid, email, displayName } = auth.currentUser;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
          navigate("/");
        })
        .catch((err) => {
          if (err.code === "auth/email-already-in-use") {
            setErrormsg("User already subscribed. Please login in.");
          } else {
            console.log("Error during sign-up:", err);
            setErrormsg("An error occurred during sign-Up. Please try again.");
          }
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((res) => {
          const user = res.user;
          const { uid, email, displayName } = auth.currentUser;

          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
          navigate("/");
          console.log("welcome the user ");
        })
        .catch((err) => {
          setErrormsg("Invalid email or password. Please try again.", err);
        });
    }
  };
  return (
    <>
      <div className="">
        <img src={NetflixBG} alt="Background"></img>
        <div className=" absolute top-0 bg-opacity-60 bg-black h-screen w-screen p-4 flex flex-col text-white">
          <img
            src={NetflixLogo}
            className=" h-[56px] w-[183px]"
            alt="Logo"
          ></img>
          <div className="bg-black bg-opacity-70 h-[600px] w-[400px] px-12 py-10 flex flex-col gap-4 self-center rounded-xl text-white">
            <h1 className="text-2xl mb-4">{control ? "Sign Up" : "Login"}</h1>

            {control ? (
              <input
                type="text"
                ref={name}
                placeholder="Enter you name"
                onChange={(event) => {
                  setValues((prev) => ({ ...prev, name: event.target.value }));
                }}
                onKeyDown={handlekeypress}
                className="h-14 rounded-lg p-4 bg-LightBlack text-LightGray"
              ></input>
            ) : null}

            <input
              type="text"
              ref={email}
              placeholder="Email or phone number"
              onChange={(event) => {
                setValues((prev) => ({ ...prev, email: event.target.value }));
              }}
              onKeyDown={handlekeypress}
              className="h-14 rounded-lg p-4 bg-LightBlack text-LightGray"
            ></input>
            <input
              type="password"
              ref={password}
              placeholder="Password"
              onChange={(event) => {
                setValues((prev) => ({ ...prev, pass: event.target.value }));
              }}
              onKeyDown={handlekeypress}
              className="h-14 rounded-lg p-4 bg-LightBlack text-LightGray"
            ></input>
            <h1 className="text-LightRed">{errormsg}</h1>
            <button
              className="h-12 rounded-lg bg-LightRed hover:bg-DarkRed text-base mt-6"
              onClick={handlesubmitted}
            >
              {control ? "Sign Up" : "Login"}
            </button>
            <div className="flex gap-2">
              <input type="checkbox" id="remember"></input>
              <label htmlFor="remember" className="text-LightGray">
                Remember me
              </label>
            </div>
            <div className="text-LightGray mt-6" onClick={switchbtn}>
              {control
                ? "Already have an account? Sign In Now "
                : "New to Netflix? Sign Up Now"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
