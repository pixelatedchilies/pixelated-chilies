export function Video() {
  return (
    <video width="600" height="300" autoPlay loop muted>
      <source
        src="https://res.cloudinary.com/dc10qw88i/video/upload/v1713270728/pixelatedchilies-marketing-video_okwsvi.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
}
