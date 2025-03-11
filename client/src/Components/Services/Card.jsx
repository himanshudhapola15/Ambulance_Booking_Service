import React from "react";
import { equipmentData } from "./EquipmentData";

function Card({ item }) {
  return (
    <div className="group bg-lightgray cursor-pointer lg:h-[700px] rounded-4xl  lg:w-1/3 transition-all duration-300 ease-in-out hover:bg-red flex flex-col">
      <img src={item.image} alt="" className="rounded-t-4xl" />
      <div className="flex group-hover:text-white flex-col flex-grow justify-between px-6 pb-4">
        <div className="mt-6 space-y-2">
          <h1 className="text-[20px] md:text-[30px]">{item.heading}</h1>
          <p className="text-sm md:text-lg leading-4 md:leading-5.5">{item.para}</p>
        </div>

        <div className="font-roboto text-black group-hover:text-white mt-6">
          <p className="uppercase text-gray text-xs md:text-base group-hover:text-lightgray font-semibold">
            Equipment
          </p>
          <div className="flex mt-5 justify-evenly pb-4">
            {equipmentData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <div className="bg-white rounded-full">
                  <img
                    src={item.image}
                    alt=""
                    className="h-7 w-7 md:w-9 md:h-9 bg-offwhite rounded-full"
                  />
                </div>
                <p className="text-center text-[9px] md:text-[12px] font-roboto">
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
