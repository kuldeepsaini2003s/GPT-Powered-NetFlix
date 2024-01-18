import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    user:userSlice,
  },
});
