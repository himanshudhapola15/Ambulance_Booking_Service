import React, { useEffect } from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Contact } from "../Components/Contact/Contact";
import { Footer } from "../Components/Footer/Footer";
import { IoCall } from "react-icons/io5";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="contact" className="overflow-hidden relative">
      <div className="fixed bottom-7 right-5 z-50">
        <a href="tel:+917347478882">
          <IoCall className="md:w-16 md:h-16 w-12 h-12 text-offwhite rounded-full p-2 md:p-3 cursor-pointer bg-red shadow-lg" />
        </a>
      </div>
      <Navbar />
      <div className="mt-[60px] md:mt-[96px]">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export { ContactPage };
