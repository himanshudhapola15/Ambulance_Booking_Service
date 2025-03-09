import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { testimonialData } from "./TestimonialData";
import { Card } from "./Card";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = testimonialData.length;

  const handleSlideChanged = ({ item }) => {
    setActiveIndex(item);
  };

  const isPrevDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex >= totalItems - 3; // Disable on second-last card
  const showRedBackground = activeIndex <= totalItems - 3; // Red stays until second-last card

  const items = testimonialData.map((item, index) => {
    const isCenter = activeIndex + 1 === index;

    return <Card key={item.key} item={item} isCenter={isCenter} />;
  });

  return (
    <div className="my-20 flex flex-col justify-center items-center space-y-16 mx-[67px]">
      <h1 className="text-6xl font-roboto text-darkgray font-bold">
        Trusted by Our Community
      </h1>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        onSlideChanged={handleSlideChanged}
        disableDotsControls
        renderPrevButton={() => (
          <button
            className={`cursor-pointer absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-5xl ${
              isPrevDisabled
                ? "text-lightgray cursor-not-allowed"
                : "text-black"
            }`}
            disabled={isPrevDisabled}
          >
            ❮
          </button>
        )}
        renderNextButton={() => (
          <button
            className={`cursor-pointer absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-5xl px-4 py-2 rounded-lg ${
              isNextDisabled
                ? "text-lightgray cursor-not-allowed"
                : showRedBackground
                ? " text-black"
                : "text-black"
            }`}
            disabled={isNextDisabled}
          >
            ❯
          </button>
        )}
      />
    </div>
  );
}

export { Testimonial };
