import React, { useRef, useState } from "react";
import demoVideo from "../../assets/foodvideo.mp4"; // Import video from assets

const VideoComponent = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <h2>Watch the Demo</h2>
      <video ref={videoRef} width="600" controls>
        <source src={demoVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br />
      <button onClick={handlePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default VideoComponent;
