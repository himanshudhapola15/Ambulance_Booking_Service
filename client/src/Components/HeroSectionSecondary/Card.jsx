import React from "react";

function Card({ item }) {
  return (
    <div className="relative cursor-pointer w-full h-full space-y-2 bg-lightgray text-darkgray p-6 lg:p-8 rounded-4xl font-roboto hover:bg-red hover:text-white transition-all duration-300 ease-in-out flex flex-col justify-between">
      <div>
        <h1 className="text-[16px] font-semibold md:text-[25px] lg:text-[30px]">
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
