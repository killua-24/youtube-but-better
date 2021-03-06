import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import VideoHorizontal from '../components/videoHorizontal/VideoHorizontal'
import { getVideosBySearch } from '../redux/actions/videos.action'

const SearchScreen = () => {

    const {query} = useParams()

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getVideosBySearch(query))

    },[query,dispatch])

    const {videos,loading} = useSelector(state=>state.searchedVideos)

    return (
       <Container>
           {
               !loading ? (
                   videos?.map(video=>(
                       <VideoHorizontal video={video} key={video.id.videoId} searchScreen/>))
               ):(
    
                    <div className='spinner-border text-danger d-block mx-auto'></div>
                 
               )
           }
       </Container>
    )
}

export default SearchScreen
