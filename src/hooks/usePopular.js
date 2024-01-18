import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API_OPTIONS, { baseURL } from "../components/constant";
import requests from "../components/Request";
import { setPopular } from "../utils/movieSlice";

const usePopular = () => {
  const popular = useSelector((store) => store.movies?.popular);
  const dispatch = useDispatch();
  async function getData() {
    const response = await fetch(baseURL + requests.fetchpopular, API_OPTIONS);
    const data = await response.json();
    console.log(data);

    dispatch(setPopular(data.results));
  }
  useEffect(() => {
    getData();
  }, []);
};

export default usePopular;
