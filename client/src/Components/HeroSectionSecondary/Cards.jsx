import React from "react";
import { cardData } from "./CardData";
import { Card } from "./Card";

function Cards() {
  return (
    <div className="grid grid-cols-2 gap-10">
      {cardData.map((item) => (
        <Card item={item} key={item.key} />
      ))}
    </div>
  );
}

export { Cards };
