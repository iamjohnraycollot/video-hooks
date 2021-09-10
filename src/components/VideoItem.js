import '../css/VideoItem.css'
import React, { Component } from 'react'

class VideoItem extends Component {
  render() {
    const {snippet} = this.props.video;
    const onVideoSelect = this.props.onVideoSelect;

    return (
      <div className="video-item item" onClick={ () => onVideoSelect(this.props.video) }>
        <img className="ui image" alt={snippet.title} src={snippet.thumbnails.default.url} />
        <div className="content">
          <div className="header">
            {snippet.title}
          </div>
        </div>
      </div>
    )
  }
}

export default VideoItem
