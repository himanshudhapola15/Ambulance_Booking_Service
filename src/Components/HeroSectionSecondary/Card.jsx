import React from "react";

function Card({ item }) {
  return (
    <div className=" cursor-pointer w-80 space-y-2 h-68 bg-lightgray text-darkgray p-8 rounded-4xl font-roboto hover:bg-red hover:text-white transition-all duration-300 ease-in-out">
      <h1 className=" text-[30px]">{item.heading}</h1>
      <p className=" text-[16px]">{item.para}</p>
      <div className="flex justify-end pb-9">
        <p className=" font-bold text-[48px]">{item.key}</p>
      </div>
    </div>
  );
}

export { Card };
