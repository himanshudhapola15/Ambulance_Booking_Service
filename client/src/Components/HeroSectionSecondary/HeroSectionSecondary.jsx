import React from "react";
import { Heading } from "./Heading";
import { QualityMetric } from "./QualityMetric";
import { Cards } from "./Cards";

function HeroSectionSecondary() {
    return <div className="mx-[30px] md:mx-[86px]">
      <Heading />
      <div className="flex lg:flex-row flex-col md:justify-around items-center mt-10 md:mt-20 gap-20">
        <QualityMetric />
        <Cards/>
      </div>
  </div>;
}

export { HeroSectionSecondary };
