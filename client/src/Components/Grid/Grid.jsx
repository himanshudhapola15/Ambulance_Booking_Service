import React from "react";
import { gridData } from "./GridData";
import { Card } from "./Card";

function Grid() {
  return (
    <div className="font-roboto mx-3 md:mx-20">
      <div className="flex lg:flex-row flex-col items-center gap-2 md:justify-between md:space-y-10 md:items-baseline mb-6">
        <h1 className="md:w-[596px] text-darkgray text-center text-2xl font-bold md:text-6xl">
          Our Ambulances in Action
        </h1>
        <h3 className="lg:font-semibold md:mx-auto text-darkgray md:text-2xl lg:text-2xl">
          WHERE EVERY MOMENT MAKES A DIFFERENCE
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-1 md:gap-5 lg:gap-10 auto-rows-[minmax(40px,_1fr)] lg:auto-rows-[minmax(80px,_1fr)]">
        {gridData.map((item) => (
          <Card item={item} key={item.key} />
        ))}
      </div>
    </div>
  );
}

export { Grid };
