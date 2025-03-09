import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-offwhite shadow-md" : ""
      }`}
    >
      <div className="flex justify-between h-[96px] mx-[51px]">
        <Logo />
        <div className="flex items-baseline font-roboto mr-[26px] mt-[23px] space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-6 py-1 rounded-2xl cursor-pointer font-semibold ${
                isActive ? "bg-red text-white" : "text-black hover:text-gray"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-6 py-1 rounded-2xl cursor-pointer font-semibold ${
                isActive ? "bg-red text-white" : "text-black hover:text-gray"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-6 py-1 rounded-2xl cursor-pointer font-semibold ${
                isActive ? "bg-red text-white" : "text-black hover:text-gray"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export { Navbar };
