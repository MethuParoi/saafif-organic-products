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

export default function HeroSection() {
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
        <HeroBanner source={banner01} />
      </SwiperSlide>
      <SwiperSlide>
        <HeroBanner source={banner01} />
      </SwiperSlide>
      <SwiperSlide>
        <HeroBanner source={banner01} />
      </SwiperSlide>
    </Swiper>
  );
}
