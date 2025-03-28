
import React, { useState, useRef } from 'react';
import './DemoVideo.css';

const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 500); // Small delay for smoother transition
  };

  return (
    <section className="demo-video-section" id="demo">
      <div className="container">
        <h2 className="section-title">See How It Works</h2>
        <div className="video-container">
          {!isPlaying ? (
            <div className="video-placeholder">
              <div className="play-button" onClick={handlePlayVideo}>
                <i className="fas fa-play"></i>
              </div>
             
              <div className="video-info">
                <h3>Contactless Ordering Demo</h3>
                <p>Watch how easy it is to scan, order, and pay</p>
              </div>
            </div>
          ) : (
            <video 
              ref={videoRef}
              src="/assets/foodvideo.mp4"
              controls
              className="video-player"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
