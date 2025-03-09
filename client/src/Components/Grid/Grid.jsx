import React from "react";
import { gridData } from "./GridData";
import { Card } from "./Card";

function Grid() {
  return (
    <div className="font-roboto mx-20">
      <div className="flex justify-between space-y-10 items-baseline mb-6">
        <h1 className="w-[596px] text-darkgray font-bold text-6xl">
          Our Ambulances in Action
        </h1>
        <h3 className="font-semibold text-darkgray text-2xl">
          WHERE EVERY MOMENT MAKES A DIFFERENCE
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-10 auto-rows-[minmax(80px,_1fr)]">
        {gridData.map((item) => (
          <Card item={item} key={item.key} />
        ))}
      </div>
    </div>
  );
}

export { Grid };
