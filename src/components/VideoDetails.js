import React from 'react'

const VideoDetails = ({video}) => {
  if(!video) {
    return <div>Loading</div>
  }

  return (
    <div>
      <div className="ui segment">
        <div className="ui embed">
          <iframe title="video-player" src={`https://www.youtube.com/embed/${video.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p> 
      </div>
    </div>
  )
}

export default VideoDetails
