import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images?.map((image) => (
          <img
            src={image?.attributes?.url}
            key={image?.id}
            alt={image?.attributes?.name}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
