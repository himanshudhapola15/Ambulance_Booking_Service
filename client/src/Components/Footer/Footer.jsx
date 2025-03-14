import React from "react";
import { FaFacebook, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer className="font-roboto px-10 pb-10">
      <div className="h-[1px] bg-gray mb-10 w-full"></div>
      <div className="flex flex-col items-center space-y-10">
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-4 gap-10 md:gap-10 w-11/12 md:w-full text-center md:text-left">
          <div className="space-y-4">
            <div className="w-[150px] mx-auto md:mx-0">
              {" "}
              <img
                src="/assets/Frame.png"
                alt="Sandhu Travels Logo"
                className="w-full hidden md:block h-full"
              />
              <img
                src="/assets/Frame2.png"
                alt="Sandhu Travels Logo"
                className="w-full h-full md:hidden"
              />
            </div>
            <p className="text-sm lg:w-65  text-gray-700">
              24/7 ambulance booking for fast, reliable emergency and
              non-emergency transport.
            </p>
          </div>

          <div className="space-y-3">
            <h1 className="font-semibold text-lg">Contact</h1>
            <p className="text-sm hover:underline cursor-pointer">
              1234 Maple Grove Lane, Rivertown, XY 78901
            </p>
            <p className="text-sm hover:underline cursor-pointer">
              Call: +91-90985 xxxxx
            </p>
            <p className="text-sm hover:underline cursor-pointer">
              Email: sandhutravels@gmail.com
            </p>

            <div className="flex justify-center  md:justify-start gap-5 text-2xl mt-3">
              <FaFacebook className="cursor-pointer hover:text-blue-600" />
              <AiFillInstagram className="cursor-pointer hover:text-pink-500" />
              <FaXTwitter className="cursor-pointer hover:text-black" />
              <FaWhatsapp className="cursor-pointer hover:text-green-500" />
            </div>
          </div>

          <div className="space-y-2 ">
            <h1 className="font-semibold text-lg">Quick Links</h1>
            {[
              "Home",
              "About Us",
              "Book Ambulance",
              "Our Services",
              "Our Testimonials",
            ].map((link) => (
              <p key={link} className="cursor-pointer hover:underline text-sm">
                {link}
              </p>
            ))}
          </div>

          <div className="space-y-2 mr-3  0">
            <h1 className="font-semibold text-lg ">Others</h1>
            <p className="cursor-pointer hover:underline text-sm">
              Privacy Policy
            </p>
            <p className="cursor-pointer hover:underline text-sm">
              Terms and Conditions
            </p>
          </div>
        </div>

        <div className="text-sm text-gray text-center">
          ©2025 by Sandhu Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export { Footer };
