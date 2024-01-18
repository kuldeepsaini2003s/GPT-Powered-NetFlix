import { useEffect } from "react";
import requests from "../components/Request";
import { useDispatch, useSelector } from "react-redux";
import { setTrailer } from "../utils/movieSlice";
import API_OPTIONS, { baseURL } from "../components/constant";

const useMovieTrailer = () => {
  const nowplaying = useSelector((store) => store.movies?.nowplaying);
  const dispatch = useDispatch();
  async function getData() {
    const response = await fetch(
      baseURL + requests.fetchnowplaying,
      API_OPTIONS
    );
    const data = await response.json();
    console.log(data);
    dispatch(setTrailer(data.results[0].id));
  }
  useEffect(() => {
   !nowplaying && getData();
  }, []);
};

export default useMovieTrailer;
