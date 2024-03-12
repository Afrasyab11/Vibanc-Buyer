"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

export default function SwiperSlider({ children }) {
  return (
    <div className="tag-swiper-container">
      <Swiper
        cssMode={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        mousewheel={true}
        keyboard={{ enabled: true }}
        autoHeight={true} 
        autoHeightClass="swiper-auto-height"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 4,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 3,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 4,
          },
          1440: {
            slidesPerView: 'auto',
            spaceBetween: 4,
          },
        }}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </div>
  );
}
