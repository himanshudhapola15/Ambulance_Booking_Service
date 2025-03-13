import React from "react";
import { heroSectionData } from "./HeroSectionData";
import { Card } from "./Card";

function HeroSection() {
  return (
    <div className="font-roboto space-y-7 mx-7 md:mx-16 md:mt-40">
      <h1 className=" font-bold lg:text-left text-4xl text-center md:text-5xl lg:text-7xl text-black ">
        What we stand for?
      </h1>
      <div className="flex flex-col lg:flex-row lg:justify-around items-center gap-6 pt-10">
        {heroSectionData.map((item) => (
          <Card item={item} key={item.key} />
        ))}
      </div>
    </div>
  );
}

export { HeroSection };
