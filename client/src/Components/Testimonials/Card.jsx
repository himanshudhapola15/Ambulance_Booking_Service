import React from "react";

function Card({ item, isCenter, index, activeIndex, isSmallScreen }) {
  const isActiveCard = isSmallScreen
    ? index === activeIndex 
    : index === activeIndex + 1;  

  return (
    <div
      className={`relative cursor-pointer rounded-2xl md:rounded-4xl md:p-10 p-5 md:space-y-20 transition-transform
        ${
          isActiveCard
            ? "bg-red text-offwhite scale-100 shadow-lg" 
            : "bg-lightgray text-black scale-90 opacity-70" 
        }
      `}
    >
      <div className="space-y-2">
        <h1 className="text-xl md:text-4xl font-semibold">{item.name}</h1>
        <p
          className={`uppercase text-sm md:text-lg ${
            isActiveCard ? "font-semibold text-lightgray" : ""
          }`}
        >
          {item.designation}
        </p>
        <p className="mt-4 text-sm md:text-[16px]">{item.para}</p>
      </div>

      <div className="space-x-1 absolute bottom-5 right-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={
              i < item.star
                ? "text-yellow text-2xl md:text-4xl"
                : "text-lightgray text-2xl md:text-4xl"
            }
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

export { Card };
