import React, { useState, useEffect, useRef } from "react";

function Card({ item }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const IconComponent = item.icon;

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerY = window.innerHeight / 2;

        if (
          window.innerWidth < 1024 &&
          rect.top < centerY &&
          rect.bottom > centerY
        ) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative cursor-pointer w-80 md:w-96 h-[350px] md:h-[416px] 
        bg-lightgray text-darkgray p-8 rounded-4xl font-roboto transition-all duration-300 ease-in-out 
        hover:bg-red hover:text-white 
        ${isVisible ? "bg-red text-white" : ""}`}
    >
      <div
        className={`absolute top-8 right-8 text-5xl transition-all duration-300 ease-in-out 
        group-hover:text-white ${isVisible ? "text-white" : "text-gray"}`}
      >
        <IconComponent />
      </div>
      <h1
        className={`absolute left-8 right-8 text-4xl transition-all duration-300 ease-in-out 
          top-1/2 -translate-y-1/2 group-hover:text-white group-hover:top-8 group-hover:translate-y-0
          ${isVisible ? "top-8 translate-y-0 " : ""}`}
      >
        {item.heading}
      </h1>
      <p
        className={`opacity-0 transition-opacity duration-300 ease-in-out mt-20 
          group-hover:opacity-100 ${isVisible ? "opacity-100 text-white" : ""}`}
      >
        {item.para}
      </p>
      <div
        className={`absolute bottom-8 right-8 text-4xl md:text-7xl font-extrabold transition-all 
        group-hover:text-white ${isVisible ? "text-white" : ""}`}
      >
        {item.key}
      </div>
    </div>
  );
}

export { Card };
