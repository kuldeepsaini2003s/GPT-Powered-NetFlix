import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrailer } from "../utils/movieSlice";
import API_OPTIONS, { baseURL } from "../components/constant";

const useMovieTrailer = () => {
//   const nowplaying = useSelector((store) => store.movies?.nowplaying);
//   const dispatch = useDispatch();
//   // async function getData() {
//   //   const response = await fetch(
//   //     'https://api.themoviedb.org/3/movie/' + movieid + '/videos?language=en-US', API_OPTIONS
//   //   );
//   //   const data = await response.json();
//   //   dispatch(setTrailer(data.results[0].id));
//   // }
//   useEffect(() => {
//    !nowplaying && getData();
//   }, []);
// };
};

export default useMovieTrailer;
