import React from "react";
import { Carousel } from "./Carousel";
import { Details } from "./Details";
import { ScrollingText } from "./ScrollingText";


function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute md:px-[70px] lg:px-[120px] z-10 w-full">
        <Details />
      </div>
      <div className="lg:mx-[50px] relative z-0">
        <Carousel />
      </div>
      <div className=" my-9 md:my-16">
        <ScrollingText />
      </div>
    </div>
  );
}

export { HeroSection };
