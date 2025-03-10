import React from "react";
import { Carousel } from "./Carousel";
import { Details } from "./Details";
import { ScrollingText } from "./ScrollingText";


function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute left-5 md:left-20 md:top-[40px] lg:left-32 top-[10px] lg:top-[60px] z-10 w-full">
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
