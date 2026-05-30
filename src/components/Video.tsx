import React, { useState, useEffect, useRef } from "react";
import BackgroundVideo1 from "../videos/BackgroundVideo1.mp4";
import BackgroundVideo2 from "../videos/BackgroundVideo2.mp4";
import BackgroundVideo3 from "../videos/BackgroundVideo3.mp4";
import BackgroundVideo4 from "../videos/BackgroundVideo4.mp4";

function Video() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    BackgroundVideo1,
    BackgroundVideo2,
    BackgroundVideo3,
    BackgroundVideo4,
  ];
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  // const [isFading] = useState(false);

  const switchToNextVideo = () => {
    if (currentVideo < videos.length - 1) {
      setCurrentVideo(currentVideo + 1);
    } else {
      setCurrentVideo(0); // loop back to the first video
    }
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(switchToNextVideo, 5000); // Byter till nästa video efter 5 sekunder

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <video
        key={currentVideo} // Force re-render on video source change
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        autoPlay
        muted
      >
        <source src={videos[currentVideo]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
      >
        <h1 style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>MALMÖ</h1>
        <p style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
          Mångfald, möten och möjligheter
        </p>
      </div>
    </div>
  );
}

export default Video;
