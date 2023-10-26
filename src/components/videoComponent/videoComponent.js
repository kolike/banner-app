import video from './Volvo Trucks - The Epic Split feat. Van Damme (Live Test).mp4';
import './videoComponent.css';
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const VideoComponent = () => {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [location.pathname]);

  return (
    <video className="video" src={video} autoPlay={true} loop playsInline muted ref={ref}></video>
  );
};

export default VideoComponent;
