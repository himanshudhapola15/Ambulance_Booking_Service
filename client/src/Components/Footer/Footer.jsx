import React from "react";
import { Logo } from "../Navbar/Logo";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" font-roboto">
      <div className="h-[1px] bg-gray mb-10 "></div>
      <div className="flex flex-col justify-center items-center space-y-14">
        <div className="grid grid-cols-4">
          <div className="text-black  pl-24 space-y-6">
            <div className="w-[217px] h-[51px] bg-lightgray mt-[23px]"></div>
            <p className="cursor-pointer  hover:underline text-left">
              24/7 ambulance booking for fast, reliable emergency and
              non-emergency transport
            </p>
          </div>
          <div className="pl-28 space-y-4">
            <h1 className="cursor-pointer font-semibold  hover:underline">
              Contact
            </h1>
            <p className="cursor-pointer hover:underline w-[230px]">
              1234 Maple Grove Lane, Rivertown, XY 78901
            </p>
            <p className="cursor-pointer  hover:underline">
              Call:- +91-90985 xxxxx
            </p>
            <p className="cursor-pointer  hover:underline">
              Email:- sandhutravels@gmail.com
            </p>
            <div className="flex gap-5">
              <FaFacebook className="text-4xl cursor-pointer" />
              <AiFillInstagram className="text-4xl cursor-pointer" />
              <FaXTwitter className="text-4xl cursor-pointer" />
              <FaWhatsapp className="text-4xl cursor-pointer" />
            </div>
          </div>
          <div className="pl-28 space-y-2">
            <h1 className=" font-semibold cursor-pointer hover:underline">
              Quick Links
            </h1>
            <p className="cursor-pointer hover:underline ">Home</p>
            <p className="cursor-pointer hover:underline">About Us</p>
            <p className="cursor-pointer hover:underline">Book Ambulance</p>
            <p className="cursor-pointer hover:underline">Our Services</p>
            <p className="cursor-pointer hover:underline">Our Testimonials</p>
          </div>
          <div className="pl-28 space-y-2">
            <h1 className="cursor-pointer font-semibold hover:underline">
              Others
            </h1>
            <p className="cursor-pointer hover:underline">Privacy Policy</p>
            <p className="cursor-pointer hover:underline">
              Terms and Condition
            </p>
          </div>
        </div>
        <div className="mb-10 text-gray">
          ©2025 by Sandhu Travels. All rights reserved
        </div>
      </div>
    </footer>
  );
}

export { Footer };
