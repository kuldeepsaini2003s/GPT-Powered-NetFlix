import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API_OPTIONS, { baseURL } from "../components/constant";

import { setPopular } from "../utils/movieSlice";

const usePopular = () => {
  const popular = useSelector((store) => store.movies?.popular);
  const dispatch = useDispatch();
  async function getData() {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?page=2",
    API_OPTIONS);
    const data = await response.json();

    dispatch(setPopular(data.results));
  }
  useEffect(() => {
   !popular && getData();
  }, []);
};

export default usePopular;
