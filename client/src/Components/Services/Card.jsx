import React from "react";
import { equipmentData } from "./EquipmentData";

function Card({ item }) {
  return (
    <div className="group bg-lightgray cursor-pointer rounded-4xl h-[500px] w-[310px] md:h-[700px] md:w-[384px] transition-all duration-300 ease-in-out hover:bg-red">
      <img src={item.image} alt="" className="rounded-t-4xl md:h-[256px]" />
      <div className="font-roboto ml-8 text-black group-hover:text-white">
        <h1 className="text-[20px] md:text-[30px] mt-8"> {item.heading} </h1>
        <p className="text-sm md:text-lg h-36 md:w-[320px] mt-4">{item.para}</p>
        <p className="uppercase text-gray -mt-7 md:mt-10 text-xs md:text-lg group-hover:text-lightgray font-semibold">
          Equipment
        </p>
        <div className="flex -ml-6 mt-5 justify-evenly pb-4">
          {equipmentData.map((item) => (
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white rounded-full">
                <img
                  src={item.image}
                  alt=""
                  key={item.key}
                  className="h-8 w-8 md:w-12 md:h-12 bg-offwhite rounded-full"
                />
              </div>
              <p className="text-center text-[10px] md:text-[14px] font-roboto">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Card };
