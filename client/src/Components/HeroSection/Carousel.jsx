import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const Carousel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      className="w-full h-[200px] sm:h-[250px] md:h-[450px] lg:h-[768px] rounded-2xl md:rounded-4xl"
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
