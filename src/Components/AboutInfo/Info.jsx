import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Info() {
  return (
    <div className="font-roboto mx-20 mt-20 mb-20 text-black grid grid-cols-2 gap-16">
      <div className="space-y-10">
        <h1 className="text-7xl font-bold">What drives us?</h1>
        <p className="text-2xl">
          Our mission at Sandhu Travels is to provide fast, reliable, and
          accessible ambulance services to those in need, ensuring timely
          medical assistance in emergencies. We are dedicated to bridging the
          gap between patients and emergency responders by offering a
          user-friendly platform that simplifies the booking process. Our
          purpose is to save lives by reducing response times, improving the
          accessibility of emergency medical care, and supporting healthcare
          professionals in delivering critical services when every second
          counts. With a focus on reliability, efficiency, and compassion, we
          are here to make sure that help is always just a click away.
        </p>
      </div>

      <div className="space-y-10">
        <h1 className="text-7xl font-bold">Why we serve?</h1>
        <p className="text-2xl">
          At Sandhu Travels, our vision is to revolutionize emergency medical
          transportation by providing seamless, efficient, and reliable
          ambulance booking services. We aim to create a world where individuals
          can access life-saving care quickly, no matter the time or location.
          Through our platform, we strive to reduce response times, increase
          awareness of available medical services, and ensure that every
          emergency is handled with the utmost professionalism and care. Our
          commitment is to provide peace of mind to every person in need,
          empowering them with the ability to access trusted medical resources
          with just a few taps.
        </p>
      </div>

      <div className="flex items-center">
        <div className="flex justify-center items-center">
          <MdKeyboardArrowRight className="w-56 h-56 text-red font-extrabold drop-shadow-3xl" />
        </div>
        <p className="font-bold text-[80px] leading-20">
          <span className="block">FROM</span>
          <span className="block">CONCEPT</span>
          <span className="block">TO</span>
          <span className="block">CARE.</span>
        </p>
      </div>

      <div>
        <p className="text-2xl">
          SANDHU TRAVELS was born from a simple desire to help others in times
          of need. Based in Chandigarh, our small yet dedicated team of drivers
          started by providing fast and reliable ambulance services within the
          city. Over time, we expanded our services to include patient transfers
          to different cities, ensuring safe, timely care for those requiring
          medical attention beyond our local area. Driven by compassion and a
          commitment to excellence, we continue to deliver reliable, efficient
          service, always focused on getting patients the care they need, when
          they need it most.
        </p>
      </div>
    </div>
  );
}

export { Info };
