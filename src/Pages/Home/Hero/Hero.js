import React from "react";
import "swiper/css/bundle";
import Banner from "../../../assets/Banner.png";

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
import { Link } from "react-router-dom";

const hero = () => {
  return (
    <section className="relative bg-black">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src={Banner}
        alt="Resume of a job"
      />

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-slate-800 sm:to-transparent"></div>

      <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className="max-w-xl text-center sm:text-left text-white md:ml-8 lg:order-1 order-2">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-3xl font-extrabold sm:text-5xl text-left poppins-b"
          >
            Build your brand-new resume in as
            <span className="font-extrabold text-primary  poppins-b">
              {" "}
              little as 5 minutes.
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="max-w-lg text-md mt-4 text-left sm:text-xl text-gray-300"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            quis cumque minus, officiis odio obcaecati!
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex  gap-4 mt-8 text-center"
          >
            <Link
              className="block w-full px-12 py-3 text-sm font-medium bg-sky-600 border border-sky-600 text-white rounded sm:w-auto hover:bg-transparent active:text-primary focus:outline-none focus:ring transition ease-in-out delay-150"
              to="/resume-builder/how-to-start"
            >
              Get Started
            </Link>

            <a
              className="block w-full px-12 py-3 text-sm font-medium bg-white text-sky-600 border border-white rounded sm:w-auto hover:bg-transparent active:text-primary focus:outline-none focus:ring transition ease-in-out delay-150"
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
