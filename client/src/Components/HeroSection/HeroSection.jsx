import React from "react";
import { Carousel } from "./Carousel";
import { Details } from "./Details";
import { ScrollingText } from "./ScrollingText";


function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute mx-[30px] md:mx-[40px] lg:mx-[120px] z-10 w-full">
        <Details />
      </div>
      <div className="mx-[20px] lg:mx-[50px] relative z-0">
        <Carousel />
      </div>
      <div className=" my-4 md:my-16">
        <ScrollingText />
      </div>
    </div>
  );
}

export { HeroSection };
