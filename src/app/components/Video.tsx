import React from "react";

interface VideoSectionProps {
  src: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ src }) => {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover -z-10"
      src={src}
      autoPlay
      loop
      muted
      playsInline
      controls={false}
    ></video>
  );
};

export default VideoSection;
