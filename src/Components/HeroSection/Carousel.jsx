import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const Carousel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      className="   w-full h-[180px] sm:h-[280px] md:[400px] lg:h-[768px] rounded-4xl"
      key={item.key}
      role="presentation"
      src={item.image}
      alt=""
    />
  ));
  return (
    <AliceCarousel
      disableButtonsControls
      autoPlay
      autoPlayInterval={5000}
      infinite
      items={items}
      disableDotsControls
    />
  );
};

export { Carousel };
