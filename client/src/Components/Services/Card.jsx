import React from "react";
import { equipmentData } from "./EquipmentData";

function Card({ item }) {
  return (
    <div className="group bg-lightgray cursor-pointer rounded-4xl h-[650px] w-[384px] transition-all duration-300 ease-in-out hover:bg-red">
      <img src={item.image} alt="" className="rounded-t-4xl h-[256px]" />
      <div className="font-roboto ml-8 text-black group-hover:text-white">
        <h1 className="text-[30px] mt-8"> {item.heading} </h1>
        <p className="h-36 w-[320px] mt-4">{item.para}</p>
        <p className="uppercase text-gray group-hover:text-lightgray font-semibold">
          Equipment
        </p>
        <div className="flex -ml-6 mt-5  justify-evenly pb-4">
          {equipmentData.map((item) => (
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white rounded-full">
                <img
                  src={item.image}
                  alt=""
                  key={item.key}
                  className=" w-12 h-12 bg-offwhite rounded-full"
                />
              </div>
              <p className="text-center text-[14px] font-roboto">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Card };
