import React from "react";
import { Heading } from "./Heading";
import { QualityMetric } from "./QualityMetric";
import { Cards } from "./Cards";

function HeroSectionSecondary() {
  return (
    <div className="mx-[30px] md:mt-28 lg:mt-40 md:mx-15">
      <Heading />
      <div className="w-full flex md:space-y-11 lg:flex-row flex-col md:justify-between items-center mt-7 md:mt-15 lg:mt-20">
        <div className="lg:w-1/2">
          <QualityMetric />
        </div>
        <div className="w-full lg:w-1/2">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export { HeroSectionSecondary };
