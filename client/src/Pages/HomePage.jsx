import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { HeroSection } from "../Components/HeroSection/HeroSection";
import { HeroSectionSecondary } from "../Components/HeroSectionSecondary/HeroSectionSecondary";
import { Panel } from "../Components/Services/Panel";
import { Testimonial } from "../Components/Testimonials/Testimonial";
import { Footer } from "../Components/Footer/Footer";
import { IoCall } from "react-icons/io5";
import { Grid } from "../Components/Grid/Grid";

function HomePage() {
  return (
    <div id="home" className="overflow-hidden relative">
      <div className="fixed bottom-7 right-5 z-50">
        <a href="tel:+917347478882">
          <IoCall className="md:w-16 md:h-16 w-12 h-12 text-offwhite rounded-full p-2 md:p-3 cursor-pointer bg-red shadow-lg" />
        </a>
      </div>
      <Navbar />
      <div className="mt-[60px] md:mt-[96px]">
        <HeroSection />
        <HeroSectionSecondary />
        <Panel />
        <Grid />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}

export { HomePage };
