import React from "react";

function Card({ item }) {
  const IconComponent = item.icon;

  return (
    <div className="group relative cursor-pointer w-80 md:w-96 h-[350px] md:h-[416px] bg-lightgray text-darkgray p-8 rounded-4xl font-roboto hover:bg-red hover:text-white transition-all duration-300 ease-in-out">
      <div className="absolute top-8 right-8 group-hover:text-white text-gray text-5xl">
        <IconComponent />
      </div>
      <h1 className="absolute group-hover:text-white left-8 right-8 text-4xl transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 group-hover:top-8 group-hover:translate-y-0">
        {item.heading}
      </h1>
      <p className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 mt-20">
        {item.para}
      </p>
      <div className="absolute bottom-8 right-8 text-7xl font-extrabold">
        {item.key}
      </div>
    </div>
  );
}

export { Card };
