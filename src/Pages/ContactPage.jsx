import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Contact } from "../Components/Contact/Contact";
import { Footer } from "../Components/Footer/Footer";

function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="mt-[96px]">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export { ContactPage };
