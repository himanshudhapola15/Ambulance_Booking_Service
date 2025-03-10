import React from 'react'

function Heading() {
  return (
    <div className="text-darkgray flex flex-col-reverse items-center gap-4 lg:flex-row lg:justify-between lg:items-baseline font-roboto ">
      <p className=" lg:text-2xl md:text-lg text-sm font-bold">FAST CARE, JUST A CLICK AWAY</p>
      <h1 className="text-lg md:text-3xl lg:text-6xl font-extrabold">Why Choose Us?</h1>
    </div>
  );
}

export { Heading }
