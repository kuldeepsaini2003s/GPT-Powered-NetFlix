import React from "react";
import { useDispatch} from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Header from "./Header";
import Signup from "./Signup";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
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
        <Header />
      </RouterProvider>
    </>
  );
};

export default Body;
