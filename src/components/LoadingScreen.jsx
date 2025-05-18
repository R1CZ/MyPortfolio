import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './LoadingScreen.css';

const LoadingScreen = ({ progress }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      // Delay removal to allow CSS transition to complete
      const timer = setTimeout(() => setIsVisible(false), 600); // Slightly more than CSS duration
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${progress >= 100 ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <DotLottieReact
          src="https://lottie.host/88cadd46-5249-4ca0-b13e-d8025a240d48/lJzbaLJby0.lottie"
          loop
          autoplay
          className="lottie-animation"
        />
        <div className="loading-progress">{progress}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
