import React, { useState } from "react";
import { motion } from "framer-motion";

function Card({ item }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className={`relative w-full h-full ${item.rowSpan} cursor-pointer rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg`}
      onClick={() => setIsFlipped(!isFlipped)}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute w-full h-full flex items-center justify-center backface-hidden">
        <img
          src={item.image}
          alt={item.heading}
          className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-4xl"
        />
      </div>

      <div className="absolute w-full h-full flex items-center justify-center backface-hidden rotate-y-180">
        <div className="w-full gap-1 lg:gap-4 h-full bg-lightgray lg:p-10 md:p-5 p-2 flex flex-col items-center justify-center lg:justify-center rounded-lg md:rounded-2xl lg:rounded-4xl shadow-lg">
          <h1 className="text-black font-bold text-[8px] md:text-[15px] lg:text-lg xl:text-2xl">
            {item.heading}
          </h1>
          <p
            className="text-black text-[7px] md:text-[14px] lg:text-[14px] xl:text-lg 
               text-left lg:text-justify md:leading-3.5 lg:leading-4.5 xl:leading-6
               max-w-xs md:max-w-md lg:max-w-lg xl:max-w-2xl"
          >
            {item.para}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export { Card };
