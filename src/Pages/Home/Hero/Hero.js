import React from "react";
import Banner from "../../../assets/Banner.jpg";
import "swiper/css/bundle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";

// import required modules
import { EffectCards } from "swiper";
import demo1 from "../../../assets/demo1.png";
import demo2 from "../../../assets/demo2.png";

const hero = () => {
  return (
    <section class="relative bg-black">
      <img
        class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src={Banner}
        alt="Couple on a bed with a dog"
      />

      <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-slate-800 sm:to-transparent"></div>

      <div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div class="max-w-xl text-center sm:text-left text-white md:ml-8 lg:order-1 order-2">
          <h1 class="text-3xl font-extrabold sm:text-5xl text-left">
            Build your brand-new resume in as
            <span class="font-extrabold text-primary ">
              {" "}
              little as 5 minutes.
            </span>
          </h1>

          <p class="max-w-lg mt-4 text-left sm:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div class="flex  gap-4 mt-8 text-center">
            <a
              class="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-sky-600 sm:w-auto active:bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              class="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-sky-600 sm:w-auto hover:text-sky-700 active:text-sky-500 focus:outline-none focus:ring"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="lg:order-2 order-1 -mt-20 lg:-mt-8 md:hidden lg:block">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide className="bg-transparent">
              <img src={demo1} alt="" />
            </SwiperSlide>
            <SwiperSlide className="bg-transparent">
              <img src={demo2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="bg-transparent">
              <img src={demo1} alt="" />
            </SwiperSlide>
            <SwiperSlide className="bg-transparent">
              <img src={demo2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="bg-transparent">
              <img src={demo1} alt="" />
            </SwiperSlide>
            <SwiperSlide className="bg-transparent">
              <img src={demo2} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default hero;
