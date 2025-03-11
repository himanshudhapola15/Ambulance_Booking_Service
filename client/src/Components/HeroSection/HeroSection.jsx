import React from "react";
import { Carousel } from "./Carousel";
import { Details } from "./Details";
import { ScrollingText } from "./ScrollingText";


function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute mx-[20px] md:mx-[120px] z-10 w-full">
        <Details />
      </div>
      <div className="mx-[10px] md:mx-[50px] relative z-0">
        <Carousel />
      </div>
      <div className=" my-4 md:my-16">
        <ScrollingText />
      </div>
    </div>
  );
}

export { HeroSection };
