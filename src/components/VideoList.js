import React from 'react'
import VideoItem from './VideoItem'
const VideoList = (props) => {
    const videoRendering = props.videos.map((video) => {
        return <VideoItem key={video.id.videoId} videoItems={video} onVideoSelect={props.onVideoSelect} />
    })
    return (
        <div className="ui relaxed divided list">
            {videoRendering}
        </div>
    )
}
export default VideoList;