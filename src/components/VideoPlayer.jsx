import './VideoPlayer.css'

function VideoPlayer() {
  return (
    <div className="video-player-container">
      <div className="video-wrapper">
        <video
          className="video-element"
          controls
        >
          <source src="/sssx.io_1765490163976.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default VideoPlayer

