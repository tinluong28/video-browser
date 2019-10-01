import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {
    const renderedList = props.videos.map(v => {
        return(
            <VideoItem key={v.id.videoId} video={v} VideoClick={props.VideoClick}/>
        )
    })
    return(
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList;