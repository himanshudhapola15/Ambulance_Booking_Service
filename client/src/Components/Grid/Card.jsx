import React, { useState } from "react";
import { motion } from "framer-motion";

function Card({ item }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className={`relative w-full h-full ${item.rowSpan} cursor-pointer rounded-4xl shadow-lg`}
      onClick={() => setIsFlipped(!isFlipped)}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute w-full h-full flex items-center justify-center backface-hidden">
        <img
          src={item.image}
          alt={item.heading}
          className="w-full h-full object-cover rounded-4xl"
        />
      </div>

      <div className="absolute w-full h-full flex items-center justify-center backface-hidden rotate-y-180">
        <div className="w-full gap-4 leading-5 h-full bg-lightgray p-10 text-center flex flex-col items-center justify-center rounded-4xl shadow-lg">
          <h1 className="text-black font-bold text-2xl">{item.heading}</h1>
          <p className="text-black text-left">{item.para}</p>
        </div>
      </div>
    </motion.div>
  );
}

export { Card };
