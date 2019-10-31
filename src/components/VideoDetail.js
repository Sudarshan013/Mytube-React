import React from 'react'

const VideoDetail = (props) => {
    if (!props.video) {
        return <div>Loading ... </div>
    }
    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`
    return (
        <div>
            {console.log(props.video)}
            <div className="ui embed">
                <iframe src={videoSrc}></iframe>
            </div>
            <div className="ui segment">
                <div className="header">
                    <h4>
                        {props.video.snippet.title}
                    </h4>
                    <div className="description">
                        {props.video.snippet.description}
                    </div>
                </div>



            </div>

        </div>)
}

export default VideoDetail;