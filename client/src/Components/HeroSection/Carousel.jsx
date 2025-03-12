import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const Carousel = () => {
  const items = mainCarouselData.map((item) => (
    <div key={item.key} className="relative">
      <img
        className="w-full h-[500px] sm:h-[400px] md:h-[550px] lg:h-[800px] md:rounded-2xl lg:rounded-4xl"
        role="presentation"
        src={item.image}
        alt=""
      />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-offwhite/100 to-transparent block md:hidden md:rounded-2xl lg:rounded-4xl" />
    </div>
  ));

  return (
    <div className="relative">
      <AliceCarousel
        disableButtonsControls
        autoPlay
        autoPlayInterval={5000}
        infinite
        items={items}
        disableDotsControls
      />
    </div>
  );
};

export { Carousel };
