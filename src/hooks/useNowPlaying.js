import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API_OPTIONS, { baseURL } from "../components/constant";
import { setNowPlaying } from "../utils/movieSlice";
const useNowPlaying = () => {
  const nowplaying = useSelector((store) => store.movies?.nowplaying);
  const dispatch = useDispatch();
  async function getData() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(setNowPlaying(data.results));
  }
  useEffect(() => {
    !nowplaying && getData();
  }, []);
};

export default useNowPlaying;
