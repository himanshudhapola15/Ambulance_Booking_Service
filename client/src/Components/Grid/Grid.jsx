import React from "react";
import { gridData } from "./GridData";
import { Card } from "./Card";

function Grid() {
  return (
    <div className="font-roboto mx-3 md:mx-20">
      <div className="flex lg:flex-row flex-col items-center gap-2 lg:justify-between md:space-y-10 lg:items-baseline mb-6">
        <h1 className="lg:w-2/5 text-center lg:text-left text-darkgray text-4xl font-bold md:text-6xl">
          Our Ambulances in Action
        </h1>
        <h3 className="lg:text-xl md:text-lg text-sm mb-6 font-semibold">
          WHERE EVERY MOMENT MAKES A DIFFERENCE
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-1 md:gap-2 lg:gap-5 auto-rows-[minmax(25px,_1fr)] md:auto-rows-[minmax(37px,_1fr)] lg:auto-rows-[minmax(45px,_1fr)]">
        {gridData.map((item) => (
          <Card item={item} key={item.key} />
        ))}
      </div>
    </div>
  );
}

export { Grid };
