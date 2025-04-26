import React, { useEffect, useState } from 'react';
import './Loading.css';

const Loading = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate the loading time, and then set loading complete
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);  // 3 seconds for the loading screen
  }, []);

  return (
    <div className="loading-container">
      <div className="particle-background">
        {/* Shapes or animated particles can be added here */}
        <canvas className="particle-canvas"></canvas>
      </div>
      
      {/* Show "AMOGH" once loading is done */}
      {isLoaded && (
        <div className="loading-text">
          AMOGH
        </div>
      )}
    </div>
  );
};

export default Loading;
