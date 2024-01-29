
import API_OPTIONS from "../components/constant";
import { useDispatch, useSelector } from 'react-redux'
import { setTrailer } from '../utils/movieSlice';
import { useEffect } from 'react';
const useMovieTrailer = (movieId) => {

    const dispatch=useDispatch();
    const trailerVideo=useSelector(store=>store.movies.trailer);
    const getMovieVideos=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const json=await data.json();
        const trailerData=json.results.filter((movie)=>{
          return movie.type==="Trailer"
           
        })
        const trailer=trailerData.length?trailerData[0]:json.results[0];
        dispatch(setTrailer(trailer));
        // console.log(trailer);
    }
    useEffect(()=>{
       
        !trailerVideo && getMovieVideos();
     
    },[ ])

}

export default useMovieTrailer