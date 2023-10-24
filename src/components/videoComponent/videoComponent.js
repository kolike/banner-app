import video from './Volvo Trucks - The Epic Split feat. Van Damme (Live Test).mp4';

import { useRef, useEffect } from 'react';

const VideoComponent = ({ setIsPlaying, isPlaying }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <video
        id="video"
        className="video"
        src={video}
        autoPlay={true}
        loop
        playsInline
        muted
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      ></video>
    </>
  );
};
export default VideoComponent;
