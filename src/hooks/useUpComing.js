import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API_OPTIONS, { baseURL } from "../components/constant";
import requests from "../components/Request";
import { setUpComing } from "../utils/movieSlice";

const useUpComing = () => {
  const upcoming = useSelector((store) => store.movies?.upcoming);
  const dispatch = useDispatch();
  async function getData() {
    const response = await fetch(baseURL + requests.fetchupcoming, API_OPTIONS);
    const data = await response.json();
    // console.log(data);
    dispatch(setUpComing(data.results));
  }
  useEffect(() => {
  getData();
  }, []);
};

export default useUpComing;
