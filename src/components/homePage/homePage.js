import WelcomeBanner from '../banner/welcomeBanner';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsBannerVisible(true);
    }, 5000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return isBannerVisible && <WelcomeBanner />;
};

export default HomePage;
