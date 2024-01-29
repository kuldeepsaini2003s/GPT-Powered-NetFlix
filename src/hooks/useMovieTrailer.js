import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrailer } from "../utils/movieSlice";
import API_OPTIONS, { baseURL } from "../components/constant";

const useMovieTrailer = (movieid) => {
  const nowplaying = useSelector((store) => store.movies?.nowplaying);
  const trailer = useSelector((store) => store.movies?.trailer ? store.movies.trailer[0]?.key : null);
  const dispatch = useDispatch();
  async function getData() {
    
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/' + movieid + '/videos?language=en-US', API_OPTIONS
    );
    const data = await response.json();
    console.log(data)
    dispatch(setTrailer(data.results));
  }
  useEffect(() => {
    getData();
  }, []);

};

export default useMovieTrailer;
