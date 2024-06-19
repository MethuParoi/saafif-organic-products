// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import banner01 from "../assets/banner01.jpeg";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import HeroBanner from "./HeroBanner";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import SortContext from "../ContextApi/SortContext";
import LoadingContext from "../ContextApi/LoadingContext";
import useProduct from "../services/FakeApi";

export default function HeroSection() {
  const navigate = useNavigate();
  const { setIsLoading } = useContext(LoadingContext);
  const { data: ProductDesc } = useProduct(setIsLoading);
  const { setSortedProducts } = useContext(SortContext);
  setSortedProducts(ProductDesc);

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="flex justify-center items-center h-full w-full">
          <HeroBanner source={banner01} />
          <div className="absolute flex flex-col justify-center items-center">
            <h1 className="text-primary text-2xl lg:text-5xl font-semibold select-none pointer-events-none">
              Fresh food at your door
            </h1>
            <Button
              label="Order Now"
              type="primary"
              onClick={() => {
                navigate("/product");
              }}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center h-full w-full">
          <HeroBanner source={banner01} />
          <div className="absolute flex flex-col justify-center items-center">
            <h1 className="text-primary text-2xl lg:text-5xl font-semibold select-none pointer-events-none">
              Fresh food at your door
            </h1>
            <Button
              label="Order Now"
              type="primary"
              onClick={() => {
                navigate("/product");
              }}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center h-full w-full">
          <HeroBanner source={banner01} />
          <div className="absolute flex flex-col justify-center items-center">
            <h1 className="text-primary text-2xl lg:text-5xl font-semibold select-none pointer-events-none">
              Fresh food at your door
            </h1>
            <Button
              label="Order Now"
              type="primary"
              onClick={() => {
                navigate("/product");
              }}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
