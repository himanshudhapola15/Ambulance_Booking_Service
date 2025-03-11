import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { testimonialData } from "./TestimonialData";
import { Card } from "./Card";

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1250);
  const totalItems = testimonialData.length;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1250);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChanged = ({ item }) => {
    setActiveIndex(item);
  };

  const isPrevDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex >= totalItems - (isSmallScreen ? 1 : 3);

  const items = testimonialData.map((item, index) => (
    <Card
      key={item.key}
      item={item}
      index={index}
      activeIndex={activeIndex}
      isSmallScreen={isSmallScreen}
    />
  ));

  return (
    <div className="my-40 flex flex-col mb-10 justify-center items-center md:space-y-4 lg:space-y-16 mx-2 md:mx-[20px] lg:mx-[67px]">
      <h1 className="text-4xl text-center lg:text-6xl font-roboto text-darkgray font-bold">
        Trusted by Our Community
      </h1>
      <div className="w-full mt-5 ">
        <AliceCarousel
          mouseTracking
          items={items}
          paddingLeft={isSmallScreen ? 50 : 50}
          paddingRight={isSmallScreen ? 50 : 50}
          responsive={{
            0: { items: 1 },
            768: { items: 1.2},
            1024: { items: 2},
            1250: { items: 3 },
          }}
          controlsStrategy="alternate"
          onSlideChanged={handleSlideChanged}
          disableDotsControls
          renderPrevButton={() => (
            <button
              className={` cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-2 sm:left-[-30px] lg:left-[-20px] md:left-[-1px] text-2xl md:text-4xl lg:text-5xl ${
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
              className={`cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-2 sm:right-[-30px] lg:right-[-20px] md:right-[-1px] text-2xl md:text-4xl lg:text-5xl ${
                isNextDisabled
                  ? "text-lightgray cursor-not-allowed"
                  : "text-black"
              }`}
              disabled={isNextDisabled}
            >
              ❯
            </button>
          )}
        />
      </div>
    </div>
  );
}

export { Testimonial };
