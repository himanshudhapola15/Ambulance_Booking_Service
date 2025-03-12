import React from "react";
import { cardData } from "./CardData";
import { Card } from "./Card";

function Cards() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
      {cardData.map((item) => (
        <Card item={item} key={item.key} />
      ))}
    </div>
  );
}

export { Cards };
