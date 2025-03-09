import React from "react";

function Button({ text }) {
  return (
    <div className="relative">
      <button className="relative inline-flex cursor-pointer items-center justify-center h-[53px] w-[186px] overflow-hidden font-semibold transition-all duration-500 ease-in-out bg-red text-white rounded-full group md:bg-white md:text-black md:hover:bg-red md:hover:text-white">
        <span className="absolute md:left-2 right-2 top-1/2 transform -translate-y-1/2 transition-none md:transition-all md:duration-500 md:ease-in-out md:group-hover:left-[calc(100%-50px)]">
          <svg
            className="w-9 h-9 p-1 rounded-full shadow-lg transition-none md:transition-all md:duration-500 md:ease-in-out bg-white text-black md:bg-red md:text-white md:group-hover:bg-white md:group-hover:text-black"
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

        <span className="uppercase absolute transition-none md:transition-all md:duration-300 md:ease-out md:transform md:translate-x-8 md:group-hover:-translate-x-6">
          {text}
        </span>
      </button>
    </div>
  );
}

export { Button };
