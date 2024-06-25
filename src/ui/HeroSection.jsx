// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import banner13 from "../assets/banner13.jpeg";
import banner14 from "../assets/banner14.jpeg";
import banner11 from "../assets/banner11.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../utility/SwiperCssPagination.css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import HeroBanner from "./HeroBanner";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import SortContext from "../ContextApi/SortContext";
import LoadingContext from "../ContextApi/LoadingContext";
import useProduct from "../services/FakeApi";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function HeroSection() {
  const navigate = useNavigate();
  const { setIsLoading } = useContext(LoadingContext);
  const { data: ProductDesc } = useProduct(setIsLoading);
  const { setSortedProducts } = useContext(SortContext);
  setSortedProducts(ProductDesc);

  // Custom navigation buttons
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        onSwiper={(swiper) => {
          // Necessary to update refs for custom buttons
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center h-full w-full">
            <HeroBanner source={banner13} />
            <div className="absolute flex flex-col justify-center items-center lg:inline lg:pl-[50rem] ">
              <h1 className="text-primary text-2xl lg:text-5xl font-semibold select-none pointer-events-none bg-gradient-to-r from-gray-700 to-transparent rounded-lg px-1 py-1">
                Fresh food at your door
              </h1>
              <div className="lg:pl-[20rem]">
                <Button
                  label="Order Now"
                  type="primary"
                  onClick={() => {
                    navigate("/product");
                  }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/*Need fix*/}
        {/* <SwiperSlide>
          <div className="flex justify-center items-center h-full w-full ">
            <HeroBanner source={banner11} />
            <div className="absolute flex flex-col justify-center items-center lg:inline lg:pr-[50rem]">
              <div className="backdrop-blur-lg rounded-lg">
                <h1 className="text-primary text-2xl lg:text-5xl font-semibold select-none pointer-events-none ">
                  <span className="shadow-lg shadow-gray-700">
                    Order organic honey
                  </span>
                </h1>
              </div>

              <Button
                className="bg-gradient-to-rto-transparent backdrop-blur-lg rounded-lg"
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
            <HeroBanner source={banner14} />
            <div className="absolute flex flex-col justify-center items-center  lg:inline lg:pr-[60rem]">
              <h1 className="text-primary text-2xl lg:text-5xl font-semibold select-none pointer-events-none bg-gradient-to-r to-transparent backdrop-blur-sm rounded-lg">
                Order dry fruits
              </h1>
              <Button
                className="bg-gradient-to-r to-transparent backdrop-blur-sm rounded-lg"
                label="Order Now"
                type="primary"
                onClick={() => {
                  navigate("/product");
                }}
              />
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="flex justify-center items-center h-full w-full">
            <HeroBanner source={banner11} />
            <div className="absolute flex flex-col justify-center items-center  lg:inline lg:pr-[50rem]">
              <h1 className="text-primary text-2xl lg:text-5xl font-semibold select-none pointer-events-none bg-gradient-to-r from-gray-700 to-transparent backdrop-blur-sm rounded-lg px-1 py-1">
                Order organic honey
              </h1>
              <div className="">
                <Button
                  className=""
                  label="Order Now"
                  type="primary"
                  onClick={() => {
                    navigate("/product");
                  }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full w-full">
            <HeroBanner source={banner14} />
            <div className="absolute flex flex-col justify-center items-center lg:inline lg:pr-[60rem]">
              <h1 className="text-primary text-2xl lg:text-5xl font-semibold select-none pointer-events-none bg-gradient-to-r from-gray-700 to-gray-400 backdrop-blur-lg rounded-lg px-1 py-1">
                Order dry fruits
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

      <button
        ref={navigationPrevRef}
        className="text-primary hover:text-primaryHover hover:cursor-pointer lg:text-[3rem] text-[1.8rem] absolute left-2 top-1/2 z-10"
      >
        <FaArrowCircleLeft />
      </button>
      <button
        ref={navigationNextRef}
        className="text-primary hover:text-primaryHover hover:cursor-pointer lg:text-[3rem] text-[1.8rem] absolute right-2 top-1/2 z-10"
      >
        <FaArrowCircleRight />
      </button>
    </div>
  );
}
