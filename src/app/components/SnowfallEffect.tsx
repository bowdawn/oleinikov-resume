import React, { useState, useEffect } from "react";
import Snowfall from "react-snowfall";

const SnowfallEffect = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      // Decrease opacity gradually to fade out
      const interval = setInterval(() => {
        setOpacity((prevOpacity) => {
          const newOpacity = prevOpacity - 0.05; // Adjust the decrement value for desired speed
          if (newOpacity <= 0) {
            clearInterval(interval);
            return 0;
          }
          return newOpacity;
        });
      }, 250); // Adjust the interval for smoother or faster transition

      // Clean up interval when component unmounts
      return () => clearInterval(interval);
    }, 7500); // 10000 milliseconds = 10 seconds
  }, []);

  return (
    <div className="snowfall-container" style={{ opacity }}>
      <Snowfall
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default SnowfallEffect;
