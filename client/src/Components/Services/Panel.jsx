import React from "react";
import { cardData } from "./CardData";
import { Card } from "./Card";

function Panel() {
  return (
    <div className="my-20 flex flex-col justify-center items-center space-y-16 h-[776px] mx-[101px]">
      <h1 className=" text-6xl font-roboto text-darkgray font-bold">
        Ambulance Services
      </h1>
      <div className="flex gap-10">
        {cardData.map((item) => (
          <Card item={item} key={item.key} />
        ))}
      </div>
    </div>
  );
}

export { Panel };
