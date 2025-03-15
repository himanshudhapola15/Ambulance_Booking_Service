import React,  { useEffect }from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Contact } from "../Components/Contact/Contact";
import { Footer } from "../Components/Footer/Footer";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div id="contact">
      <Navbar />
      <div className="mt-[60px] md:mt-[96px]">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export { ContactPage };
