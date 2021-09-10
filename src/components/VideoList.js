import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {

  const vids = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.etag}/>
  });

  return (
    <div className="ui relaxed divided list">
      {vids}
    </div>
  )
}

export default VideoList
