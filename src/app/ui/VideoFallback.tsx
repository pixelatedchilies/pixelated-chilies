const VideoFallBack = ({
  width,
  height,
  backgroundColor,
}: {
  width: number | string;
  height: number | string;
  backgroundColor: string;
}) => {
  return <div className={`w-${width} h-${height} bg-${backgroundColor}`}></div>;
};

export default VideoFallBack;
