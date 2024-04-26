"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import c1 from "@/app/assets/img/ci1.png";
import c2 from "@/app/assets/img/ci2.png";
import c3 from "@/app/assets/img/ci3.png";
import c4 from "@/app/assets/img/ci4.png";
import c5 from "@/app/assets/img/ci5.png";
import c6 from "@/app/assets/img/ci6.png";
import c7 from "@/app/assets/img/ci7.png";
import c8 from "@/app/assets/img/ci8.png";
import c9 from "@/app/assets/img/ci9.png";
import c10 from "@/app/assets/img/ci10.png";
import c11 from "@/app/assets/img/ci11.png";
import c12 from "@/app/assets/img/ci12.png";
import c13 from "@/app/assets/img/ci13.png";
import c14 from "@/app/assets/img/ci14.png";
import c15 from "@/app/assets/img/ci15.png";

const Client = () => {
  return (
    <div className="bg-[#009846] py-10 flex flex-col justify-center gap-20">
      <p className="text-[52px] font-medium text-white text-center">
        Our <span className="font-bold">Client</span>
      </p>
      <div className=" px-20">
        <Swiper
          cssMode={true}
          loop={true}
          autoplay={{ delay: 1000 }}
          breakpoints={{
            // when window width is >= 320px

            // when window width is >= 480px
            480: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
            1536: {
              slidesPerView: 6,
            },
          }}
          // slidesPerView={6}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        >
          <SwiperSlide className="px-11">
            <Image src={c1} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="px-11">
            <Image src={c2} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="px-11">
            <Image src={c3} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="px-11">
            <Image src={c4} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="px-11">
            <Image src={c5} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="px-11">
            <Image src={c6} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="px-11">
            <Image src={c7} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="px-11">
            <Image src={c9} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="px-11">
            <Image src={c10} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="px-11">
            <Image src={c11} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="px-11">
            <Image src={c12} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="px-11">
            <Image src={c13} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="px-11">
            <Image src={c14} alt=""/>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
};

export default Client;
