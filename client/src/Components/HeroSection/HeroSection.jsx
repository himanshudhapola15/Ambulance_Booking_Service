import React from "react";
import { Carousel } from "./Carousel";
import { Details } from "./Details";
import { ScrollingText } from "./ScrollingText";


function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute left-32 top-[102px] z-10 w-full">
        <Details />
      </div>
      <div className=" mx-[50px] relative z-0">
        <Carousel />
      </div>
      <div className="my-16">
        <ScrollingText />
      </div>
    </div>
  );
}

export { HeroSection };
