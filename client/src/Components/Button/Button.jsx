import React from "react";

function Button({ text, width, height, textsize, iconsize }) {
  return (
    <div className="relative w-full flex justify-center md:justify-end">
      <button
        className={`relative inline-flex cursor-pointer items-center justify-start lg:justify-end ${width} ${height} overflow-hidden md:font-semibold transition-all duration-500 ease-in-out bg-red text-white rounded-full group lg:bg-white lg:text-black lg:hover:bg-red lg:hover:text-white`}
      >
        <span className="absolute lg:left-2 right-1 md:right-2 top-1/2 transform -translate-y-1/2 transition-none md:transition-all md:duration-500 md:ease-in-out md:group-hover:left-[calc(100%-40px)]">
          <svg
            className={`${iconsize} p-0.5 rounded-full shadow-lg transition-all duration-500 ease-in-out bg-white text-black lg:bg-red lg:text-white lg:group-hover:bg-white lg:group-hover:text-black`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>

        <span
          className={` uppercase ${textsize} font-bold transition-all duration-300 ease-out md:group-hover:-translate-x-full`}
        >
          {text}
        </span>
      </button>
    </div>
  );
}

export { Button };
