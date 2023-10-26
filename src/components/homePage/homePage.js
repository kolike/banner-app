import WelcomeBanner from '../banner/welcomeBanner';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsBannerVisible(true);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return isBannerVisible && <WelcomeBanner />;
};

export default HomePage;
