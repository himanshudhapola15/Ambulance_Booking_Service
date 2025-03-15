import React from "react";
import { cardData } from "./CardData";
import { Card } from "./Card";

function Panel() {
  return (
    <div className="my-20 md:my-40 flex flex-col  items-center space-y-5 md:space-y-16 lg:mx-20">
      <h1
        id="services"
        className="text-4xl md:text-6xl font-roboto text-darkgray font-extrabold"
      >
        Ambulance Services
      </h1>
      <div className="flex lg:flex-row flex-col gap-8 px-10 md:px-25  lg:px-0.5 lg:gap-10">
        {cardData.map((item) => (
          <Card item={item} key={item.key} />
        ))}
      </div>
    </div>
  );
}

export { Panel };
