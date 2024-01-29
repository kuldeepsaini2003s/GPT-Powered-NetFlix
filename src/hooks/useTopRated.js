import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API_OPTIONS, { baseURL } from "../components/constant";
import requests from "../components/Request";
import { setTopRated } from "../utils/movieSlice";

const useTopRated = () => {
  const toprated = useSelector((store) => store.movies?.toprated);
  const dispatch = useDispatch();
  async function getData() {
    const response = await fetch(baseURL + requests.fetchtoprated, API_OPTIONS);
    const data = await response.json();
    // console.log(data);
    dispatch(setTopRated(data.results));
  }
  useEffect(() => {
   getData();
  }, []);
};

export default useTopRated;
