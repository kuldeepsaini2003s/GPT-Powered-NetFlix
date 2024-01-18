import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: null,
  trailer: null,
  toprated: null,
  trending: null,
  upcoming: null,
  popular: null,
  nowplaying: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    movielist: (state, action) => {
      state.movie = action.payload;
    },
    setTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    setTopRated: (state, action) => {
      state.toprated = action.payload;
    },
    setTrending: (state, action) => {
      state.trending = action.payload;
    },
    setUpComing: (state, action) => {
      state.upcoming = action.payload;
    },
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setNowPlaying: (state, action) => {
      state.nowplaying = action.payload;
    },
  },
});

export const {
  movielist,
  setTrailer,
  setNowPlaying,
  setPopular,
  setTopRated,
  setUpComing,
  setTrending,
} = movieSlice.actions;

export default movieSlice.reducer;
