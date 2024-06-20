import { useEffect } from "react";
import Sakura from "src/core/helpers/sakura"; // Adjust the path to Sakura.js based on your project structure
import getSeason from "src/core/helpers/season";

const LeafEffect = () => {
  useEffect(() => {
    // Function to initialize Sakura with specified colors
    const initializeSakura = (
      colors: any,
      fallSpeed: number,
      delay: number
    ) => {
      return new Sakura("body", {
        colors,
        fallSpeed: fallSpeed, // Adjust speed if needed
        maxSize: 14, // Maximum size of petals
        minSize: 10, // Minimum size of petals
        delay: delay, // Delay between petals
      });
    };

    let sakuraObjects = [];

    // Check if it's fall season
    if (getSeason() === "fall") {
      // Define colors for fall: yellow, orange, red
      const colors = [
        {
          gradientColorStart: "rgba(255, 255, 0, 0.9)", // Yellow
          gradientColorEnd: "rgba(255, 255, 0, 0.9)",
          gradientColorDegree: 120,
        },
        {
          gradientColorStart: "rgba(255, 165, 0, 0.9)", // Orange
          gradientColorEnd: "rgba(255, 218, 185, 0.9)",
          gradientColorDegree: 120,
        },
        {
          gradientColorStart: "rgba(255, 0, 0, 0.9)", // Red
          gradientColorEnd: "rgba(255, 218, 185, 0.9)",
          gradientColorDegree: 120,
        },
      ];

      // Initialize three Sakura objects with different colors
      colors.forEach((color) => {
        sakuraObjects.push(initializeSakura([color], 0.75, 500));
      });
    } else {
      // If it's not fall, initialize Sakura with default or other season's colors
      const sakura = initializeSakura(
        [
          {
            gradientColorStart:
              getSeason() === "summer"
                ? "rgba(0, 255, 0, 0.9)"
                : getSeason() === "spring"
                ? "rgba(255, 183, 197, 0.9)"
                : null,
            gradientColorEnd:
              getSeason() === "summer"
                ? "rgba(0, 255, 0, 0.9)"
                : getSeason() === "spring"
                ? "rgba(255, 197, 208, 0.9)"
                : null,
            gradientColorDegree: 120,
          },
          300,
        ],
        0.75,
        100
      );

      sakuraObjects.push(sakura);
    }

    // Clear Sakura objects after 5 seconds
    const timeout = setTimeout(() => {
      sakuraObjects.forEach((sakura) => sakura.stop(true)); // Clean up Sakura objects
    }, 5000);

    // Clean up function
    return () => {
      clearTimeout(timeout); // Clear timeout to prevent unnecessary cleanup
      sakuraObjects.forEach((sakura) => sakura.stop(true)); // Clean up Sakura on component unmount
    };
  }, []);

  return null; // This component does not render anything
};

export default LeafEffect;
