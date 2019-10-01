import React from 'react';
import '../styles/VideoItem.css';

const VideoItem = props => {

    return(
        <div onClick={()=>props.VideoClick(props.video)} className="video-item item">
            <a href="#video">
                <img
                    className="ui image"
                    src={props.video.snippet.thumbnails.medium.url}
                    alt={props.video.snippet.title}/>
                <div className="content">
                    <div className="header">{props.video.snippet.title}</div>
                </div>
            </a>
        </div>
    )
}

export default VideoItem;