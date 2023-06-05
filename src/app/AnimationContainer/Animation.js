import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Animation = () => {
  const animationContainerRef = useRef(null);

  useEffect(() => {
    const loadAnimation = async () => {
      const animation = await lottie.loadAnimation({
        container: animationContainerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://assets10.lottiefiles.com/packages/lf20_6q3x8d8e.json",
      });
      animationContainerRef.current.style.width = "100px"; // Adjust the width as needed
      animationContainerRef.current.style.height = "100px"; // Adjust the height as needed
      animationContainerRef.current.style.margin = "0 auto";
    };

    loadAnimation();
  }, []);

  return <div ref={animationContainerRef}></div>;
};

export default Animation;
