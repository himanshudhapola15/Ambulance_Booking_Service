import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo() {
  return (
    <div className="md:w-[150px] md:h-[85px] w-[100px] h-[50px] -ml-[30px] md:ml-[1px]">
      <NavLink to="/">
        <img src="/assets/Frame.png" alt="" className="h-full" />
      </NavLink>
    </div>
  );
}

export { Logo }
