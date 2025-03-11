import React from "react";
import { Heading } from "./Heading";
import { QualityMetric } from "./QualityMetric";
import { Cards } from "./Cards";

function HeroSectionSecondary() {
  return (
    <div className="mx-[30px] md:mx-12">
      <Heading />
      <div className="w-full flex lg:flex-row flex-col md:justify-between items-center mt-7 md:mt-15 lg:mt-20">
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
