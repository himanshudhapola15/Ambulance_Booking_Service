import React from "react";

function Card({ item, isCenter }) {
  return (
    <div
      className={`w-[400px] cursor-pointer rounded-4xl p-10 h-[400px] space-y-6 transition-transform
        ${isCenter ? "bg-red text-white" : "bg-lightgray text-black scale-90"}
      `}
    >
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold">{item.name}</h1>
        <p
          className={`uppercase ${
            isCenter ? "font-semibold text-lightgray" : ""
          }`}
        >
          {item.designation}
        </p>
      </div>
      <p className="w-[333px]">{item.para}</p>

      <div className="flex space-x-1 justify-end">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={index < item.star ? "text-yellow text-4xl" : "text-lightgray text-4xl"}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

export { Card };
