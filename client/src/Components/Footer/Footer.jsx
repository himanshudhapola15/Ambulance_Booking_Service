import React, { useEffect } from "react";
import { FaFacebook, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const sectionRoutes = {
    home: "/",
    about: "/about",
    contact: "/contact",
    details: "/",
    services: "/", 
    testimonials: "/", 
  };

  const handleNavigation = (sectionId) => {
    const targetPath = sectionRoutes[sectionId] || "/";

    if (location.pathname !== targetPath) {
      navigate(`${targetPath}#${sectionId}`);
    }

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        section.classList.add("highlight");

        setTimeout(() => {
          section.classList.remove("highlight");
        }, 2000);
      }
    }, 100);
  };

  return (
    <footer className="font-roboto px-10 pb-10">
      <div className="h-[1px] bg-gray mb-10 w-full"></div>
      <div className="flex flex-col items-center space-y-10">
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-4 gap-10 md:gap-10 w-11/12 md:w-full text-center md:text-left">
          <div className="space-y-4">
            <div className="w-[150px] mx-auto md:mx-0">
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
              <a
                href="https://www.google.com/maps/place/Starbucks/@30.371101,78.0000853,13z/data=!4m10!1m2!2m1!1sstarbucks!3m6!1s0x3908d76097ba5bef:0xc1897bf1f3ea479a!8m2!3d30.371101!4d78.076303!15sCglzdGFyYnVja3MiA4gBAVoLIglzdGFyYnVja3OSAQtjb2ZmZWVfc2hvcOABAA!16s%2Fg%2F11s5zhd9sf?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                starbucks
              </a>
            </p>
            <p className="text-sm hover:underline cursor-pointer">
              <a href="tel:6006078745">Call: +91-6006078745</a>
            </p>
            <a
              href="mailto:prabhat.akhoon.work@gmail.com"
              className="text-sm cursor-pointer hover:underline"
            >
              Email: prabhat.akhoon.work@gmail.com
            </a>

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
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" },
              { name: "Book Ambulance", id: "details" },
              { name: "Our Services", id: "services" },
              { name: "Our Testimonial", id: "testimonials" },
            ].map(({ name, id }) => (
              <p
                key={id}
                className="cursor-pointer hover:underline text-sm"
                onClick={() => handleNavigation(id)}
              >
                {name}
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
          ©2025 by Sandhu Tour & Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export { Footer };
