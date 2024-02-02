import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API_OPTIONS, { baseURL } from "../components/constant";
import { setUpComing } from "../utils/movieSlice";

const useUpComing = () => {
  const upcoming = useSelector((store) => store.movies?.upcoming);
  const dispatch = useDispatch();
  async function getData() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(setUpComing(data.results));
  }
  useEffect(() => {
    !upcoming && getData();
  }, []);
};

export default useUpComing;
