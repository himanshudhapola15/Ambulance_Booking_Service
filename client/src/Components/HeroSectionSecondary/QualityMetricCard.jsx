import React from "react";

function QualityMetricCard({ item }) {
  return (
    <div className="w-full">
      <h1 className=" text-2xl md:text-[50px] lg:text-[80px] font-roboto font-semibold text-darkgray">{item.value}</h1>
      <div className=" h-[1px] lg:w-3/4 bg-gray"></div>
      <p className="text-[10px] lg:text-[20px] font-roboto text-darkgray">{item.para}</p>
    </div>
  );
}

export { QualityMetricCard };
