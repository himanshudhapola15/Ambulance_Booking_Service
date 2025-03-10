import React from "react";

function Button({ text }) {
  return (
    <div className="relative">
      <button className="relative inline-flex cursor-pointer items-center justify-center w-[50px] h-[20px] md:h-[53px] md:w-[165px] lg:w-[186px] overflow-hidden md:font-semibold transition-all duration-500 ease-in-out bg-red text-white rounded-full group lg:bg-white lg:text-black lg:hover:bg-red lg:hover:text-white">
        <span className="absolute lg:left-2 right-0.5 md:right-2 top-1/2 transform -translate-y-1/2 transition-none md:transition-all md:duration-500 md:ease-in-out md:group-hover:left-[calc(100%-50px)]">
          <svg
            className="md:w-9 md:h-9 w-4 h-4 p-1 rounded-full shadow-lg transition-none md:transition-all md:duration-500 md:ease-in-out bg-white text-black lg:bg-red lg:text-white lg:group-hover:bg-white lg:group-hover:text-black"
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

        <span className="uppercase text-[5px] md:text-sm lg:text-lg left-1 lg:left-6 absolute transition-none md:transition-all md:duration-300 md:ease-out md:transform md:translate-x-8 lg:group-hover:-translate-x-1">
          {text}
        </span>
      </button>
    </div>
  );
}

export { Button };
