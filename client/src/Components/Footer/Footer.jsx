import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

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

  const showToast = (message) => {
    toast(message, {
      duration: 5000,
      style: {
        background: "#33363d",
        color: "#fff",
        fontWeight: "bold",
        padding: window.innerWidth < 768 ? "8px" : "12px",
        fontSize: window.innerWidth < 768 ? "12px" : "16px",
        borderRadius: "8px",
        fontFamily: "Roboto, sans-serif",
      },
    });
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
            <p className="text-sm lg:w-65 text-gray-700">
              24/7 ambulance booking for fast, reliable emergency and
              non-emergency transport.
            </p>
          </div>

          <div className="space-y-3">
            <h1 className="font-semibold text-lg">Contact</h1>
            <p className="text-sm hover:underline cursor-pointer">
              <a
                href="https://www.google.com/maps/place/P.G.I.+Hospital/@30.7616094,76.7770877,17z/data=!3m1!4b1!4m6!3m5!1s0x390fedc82fffffff:0x8fffa3a3543256b2!8m2!3d30.7616094!4d76.7796626!16s%2Fg%2F11f53qqy7p?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                P.G.I. Hospital, Government High School, Road, Sector 35D,
                Sector 35, Chandigarh, 160022
              </a>
            </p>
            <p className="text-sm hover:underline cursor-pointer">
              <a href="tel:+917347478882">Call: +91-7347478882</a>
            </p>
            <a
              href="mailto:sandhu.travels.services@gmail.com"
              className="text-sm cursor-pointer hover:underline"
            >
              Email: sandhu.travels.services@gmail.com
            </a>
            <div className="flex justify-center md:justify-start gap-5 text-2xl mt-3">
              <FaWhatsapp
                className="text-3xl hover:text-green-500 cursor-pointer"
                onClick={() =>
                  window.open("https://wa.me/917347478882", "_blank")
                }
              />
            </div>
          </div>

          <div className="space-y-2">
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

          <div className="space-y-2 mr-3">
            <h1 className="font-semibold text-lg">Others</h1>
            <p
              className="cursor-pointer hover:underline text-sm"
              onClick={() =>
                showToast(
                  "We’re currently updating our Privacy Policy to provide you with the best protection. Please check back soon for the complete version."
                )
              }
            >
              Privacy Policy
            </p>
            <p
              className="cursor-pointer hover:underline text-sm"
              onClick={() =>
                showToast(
                  "Our Terms and Conditions are being finalized. Thank you for your patience, and we will have them available soon."
                )
              }
            >
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
