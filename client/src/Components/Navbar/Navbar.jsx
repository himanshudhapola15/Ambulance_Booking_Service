import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
      <div className="flex justify-between items-center h-[50px] md:h-[96px] px-6 md:px-[51px]">
        <Logo />
        <div className="hidden md:flex items-baseline font-roboto space-x-8">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `px-6 py-1 rounded-2xl cursor-pointer ${
                  isActive ? "bg-red text-white" : "text-black hover:text-gray"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-5 right-5 text-2xl focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </button>

        <div className="flex flex-col mt-20 h-full space-y-2 font-roboto text-lg">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }, index) => (
            <div className="px-4">
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  `lg:px-10  w-full block py-1 text-sm cursor-pointer ${
                    isActive ? "text-gray" : "text-black"
                  }`
                }
              >
                {label}
              </NavLink>
              <div className="h-[1px] bg-gray w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Navbar };
