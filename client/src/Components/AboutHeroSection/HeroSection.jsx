import React from "react";
import { heroSectionData } from "./HeroSectionData";
import { Card } from "./Card";

function HeroSection() {
  return (
    <div className="h-[540px] font-roboto space-y-7 mx-[87px] mt-40">
      <h1 className=" font-bold text-6xl text-black">What we stand for?</h1>
      <div className="flex space-x-16">
        {heroSectionData.map((item) => (
          <Card item={item} key={item.key} />
        ))}
      </div>
    </div>
  );
}

export { HeroSection };
