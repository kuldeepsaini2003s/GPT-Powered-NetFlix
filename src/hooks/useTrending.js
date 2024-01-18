import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API_OPTIONS, { baseURL } from "../components/constant";
import requests from "../components/Request";
import { setTrending } from "../utils/movieSlice";

const useTrending = () => {
  const trending = useSelector((store) => store.movies?.trending);
  const dispatch = useDispatch();
  async function getData() {
    const response = await fetch(baseURL + requests.fetchtrending, API_OPTIONS);
    const data = await response.json();
    console.log(data);
    dispatch(setTrending(data.results));
  }
  useEffect(() => {
    getData();
  }, []);
};

export default useTrending;
