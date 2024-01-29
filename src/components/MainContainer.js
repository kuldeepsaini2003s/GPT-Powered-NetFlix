import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies=useSelector(store=>store.movies.nowplaying)
    const movie=movies && movies[0];
    console.log(movie)
    // const {original_title,id}=movies && movie;
    // const {overview}=movies && movie;
    
    // console.log(original_title)
    // console.log(id)
    // console.log(overview)


  return (
    <div>
        <VideoTitle  />
        <VideoBackground  />
    </div>
  )
}

export default MainContainer