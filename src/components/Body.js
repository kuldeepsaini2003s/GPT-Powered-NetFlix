import React from "react";
import { useDispatch} from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Home from "./Home";
import Signup from "./Signup";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Signup />,
  },
  {
    path: "/browser",
    element: <Browse />,
  },
]);

const Body = () => {

 
  const dispatch = useDispatch();
  return (
    <>
      <RouterProvider router={AppRouter}>
        <Home />
      </RouterProvider>
    </>
  );
};

export default Body;
