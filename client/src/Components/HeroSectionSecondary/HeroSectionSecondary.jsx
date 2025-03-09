import React from "react";
import { Heading } from "./Heading";
import { QualityMetric } from "./QualityMetric";
import { Cards } from "./Cards";

function HeroSectionSecondary() {
    return <div className=" mx-[86px]">
      <Heading />
      <div className="flex justify-around items-center mt-20 gap-20">
        <QualityMetric />
        <Cards/>
      </div>
  </div>;
}

export { HeroSectionSecondary };
