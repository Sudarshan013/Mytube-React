import React from 'react'
import './VideoItem.css'
class VideoItem extends React.Component {
    render() {
        return (
            <div onClick={() => { this.props.onVideoSelect(this.props.videoItems) }} className="video-item item">
                <img className="ui image" src={this.props.videoItems.snippet.thumbnails.medium.url} alt={this.props.videoItems.snippet.title} />
                <div className="content">
                    <a className="header">{this.props.videoItems.snippet.title}</a>
                    {/* <div className="description">{this.props.videoItems.snippet.description}</div> */}
                </div>

            </div>
        )
    }
}
export default VideoItem;