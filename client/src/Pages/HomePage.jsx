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
    <div className="overflow-hidden relative">
      <div className="fixed bottom-7 right-5 z-50">
        <IoCall className="w-16 h-16 text-offwhite rounded-full p-3 cursor-pointer bg-red shadow-lg" />
      </div>
      <Navbar />
      <div className="mt-[96px]">
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
