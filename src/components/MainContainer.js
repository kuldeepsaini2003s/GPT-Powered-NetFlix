import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies=useSelector(store=>store.movies.nowplaying)
    const movie=movies && movies[0];
    console.log(movie)
    let original_title, id, overview;
    if (movie) {
        ({original_title, id} = movie);
        ({overview} = movie);
    }
    
    console.log(original_title)
    console.log(id)
    console.log(overview)


  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieid={id} />
    </div>
  )
}

export default MainContainer