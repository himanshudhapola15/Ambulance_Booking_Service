import React, { useState, useEffect } from "react";

function Card({ item }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative w-full h-full ${
        isSmallScreen ? item.rowSpanSamllScreen : item.rowSpan
      } cursor-pointer rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg`}
    >
      <div className="absolute w-full h-full flex items-center justify-center">
        <img
          src={item.image}
          alt={item.heading}
          className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-4xl"
        />
      </div>
    </div>
  );
}

export { Card };
