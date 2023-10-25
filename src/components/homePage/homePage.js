import WelcomeBanner from '../banner/welcomeBanner';
import { useEffect, useState } from 'react';

const HomePage = ({ setIsPlaying }) => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsBannerVisible(true);
    }, 5000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return <>{isBannerVisible && <WelcomeBanner setIsPlaying={setIsPlaying} />}</>;
};
export default HomePage;
