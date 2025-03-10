import React from "react";

function QualityMetricCard({ item }) {
  return (
    <div>
      <h1 className="text-[40px] md:text-[80px] font-roboto font-semibold text-darkgray">{item.value}</h1>
      <div className=" h-[1px] bg-gray md:w-[215px]"></div>
      <p className="text-[10px] md:text-[20px] font-roboto text-darkgray">{item.para}</p>
    </div>
  );
}

export { QualityMetricCard };
