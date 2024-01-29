import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API_OPTIONS, { baseURL } from "../components/constant";
import { setTopRated } from "../utils/movieSlice";

const useTopRated = () => {
  const toprated = useSelector((store) => store.movies?.toprated);
  const dispatch = useDispatch();
  async function getData() {
    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",
    API_OPTIONS);
    const data = await response.json();
    // console.log(data);
    dispatch(setTopRated(data.results));
  }
  useEffect(() => {
   !toprated && getData();
  }, []);
};

export default useTopRated;
