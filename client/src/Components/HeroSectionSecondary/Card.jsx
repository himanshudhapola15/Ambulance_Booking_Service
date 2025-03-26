import React, { useState, useEffect, useRef } from "react";

function Card({ item }) {
  const [isCentered, setIsCentered] = useState(false);
  const cardRef = useRef(null);

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
          setIsCentered(true);
        } else {
          setIsCentered(false);
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
      className={`relative cursor-pointer w-full h-full space-y-2 p-6 lg:p-8 
        rounded-4xl font-roboto transition-all duration-300 ease-in-out flex flex-col justify-between
        ${
          isCentered && window.innerWidth < 1024
            ? "bg-red text-white"
            : "bg-lightgray text-darkgray"
        } hover:bg-red hover:text-white`}
    >
      <div className="space-y-3">
        <h1 className="text-[20px] font-semibold md:text-[25px] lg:text-[28px]">
          {item.heading}
        </h1>
        <p className="text-[16px] md:text-[20px] lg:text-[16px]">{item.para}</p>
      </div>
      <div className="flex justify-end">
        <p className="text-[40px] md:text-[30px] font-bold lg:text-[48px]">
          {item.key}
        </p>
      </div>
    </div>
  );
}

export { Card };
