import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API_OPTIONS, { baseURL } from "../components/constant";
import { setNowPlaying } from "../utils/movieSlice";
const useNowPlaying = () => {
  const nowplaying = useSelector((store) => store.movies?.nowplaying);
  const dispatch = useDispatch();
  async function getData() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=2",
      API_OPTIONS
    );
    const data = await response.json();
      // console.log(data)
    dispatch(setNowPlaying(data.results));

  }
  useEffect(() => {
  !nowplaying && getData();
  }, []);
};

export default useNowPlaying;
