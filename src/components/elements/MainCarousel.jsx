import React from "react";
import db from "../utils/CDN-db";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";

const MainCarousel = () => {
  return (
    <>
      {/* <img src={db[0].img} alt="" /> */}
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={500}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={db[0].img} className="carousel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={db[1].img} className="carousel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={db[2].img} className="carousel-img" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainCarousel;
