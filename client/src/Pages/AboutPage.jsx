import React, { useEffect } from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { HeroSection } from "../Components/AboutHeroSection/HeroSection";
import { Footer } from "../Components/Footer/Footer";
import { Info } from "../Components/AboutInfo/Info";
import { IoCall } from "react-icons/io5";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="about" className="overflow-hidden relative">
      <div className="fixed bottom-7 right-5 z-50">
        <a href="tel:+917347478882">
          <IoCall className="md:w-16 md:h-16 w-12 h-12 text-offwhite rounded-full p-2 md:p-3 cursor-pointer bg-red shadow-lg" />
        </a>
      </div>
      <Navbar />
      <div className="mt-[96px]">
        <HeroSection />
        <Info />
        <Footer />
      </div>
    </div>
  );
}

export { AboutPage };
