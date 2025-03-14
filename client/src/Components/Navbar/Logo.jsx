import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo() {
  return (
    <div className="md:w-[150px] md:h-[82px] w-[100px] h-[50px] -ml-[15px] md:-ml-[30px] lg:ml-[8px]">
      <NavLink to="/">
        <img
          src="/assets/Frame.png"
          alt="Sandhu Travels Logo"
          className="h-full"
        />
      </NavLink>
    </div>
  );
}

export { Logo }
