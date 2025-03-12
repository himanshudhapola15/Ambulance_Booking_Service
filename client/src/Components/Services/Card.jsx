import React, { useState, useEffect, useRef } from "react";
import { equipmentData } from "./EquipmentData";

function Card({ item }) {
  const [isCentered, setIsCentered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerY = window.innerHeight / 2; // Center of the viewport

        // Apply red background only for small screens (width < 1024px)
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
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group cursor-pointer lg:h-[700px] font-roboto rounded-4xl lg:w-1/3 transition-all duration-300 ease-in-out flex flex-col 
        ${
          isCentered && window.innerWidth < 1024
            ? "bg-red text-white"
            : "bg-lightgray text-black"
        } 
        hover:bg-red hover:text-white`}
    >
      <img src={item.image} alt="" className="rounded-t-4xl" />
      <div className="flex group-hover:text-white flex-col flex-grow justify-between px-6 pb-4">
        <div className="mt-6 space-y-2">
          <h1 className="text-[20px] md:text-[30px] font-semibold">{item.heading}</h1>
          <p className="text-sm md:text-lg leading-4 md:leading-5.5">
            {item.para}
          </p>
        </div>

        <div className="font-roboto text-black group-hover:text-white mt-6">
          <p
            className={`uppercase y ${
              isCentered && window.innerWidth < 1024
                ? "text-white"
                : "text-gray"
            }  text-xs md:text-base group-hover:text-lightgray font-semibold`}
          >
            Equipment
          </p>
          <div className="flex mt-5 justify-evenly pb-4">
            {equipmentData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col space-y-4 justify-center items-center"
              >
                <div className="bg-white rounded-full">
                  <img
                    src={item.image}
                    alt=""
                    className="w-9 h-9 bg-offwhite rounded-full"
                  />
                </div>
                <p
                  className={`${
                    isCentered && window.innerWidth < 1024
                      ? "text-white"
                      : "text-gray"
                  }  text-xs md:text-base group-hover:text-lightgray font-semibold} text-center text-[9px] md:text-[12px] font-roboto`}
                >
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
