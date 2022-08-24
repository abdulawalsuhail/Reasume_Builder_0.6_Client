import React from "react";
import "swiper/css/bundle";
import Banner from "../../../assets/hero-banner.png";

import "swiper/css/effect-cards";
import "./styles.css";

import { Link } from "react-router-dom";

const hero = () => {
  return (
    <section className="">
      <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className="max-w-xl text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
          <div className="flex items-center gap-2 bg-gray-100 w-fit px-3 rounded-full py-2 border-[1px] border-gray-200 mb-5">
            <p className=" px-2 py-[2px] text-white rounded-full bg-green-500">
              $
            </p>
            <p>Discover the easiest way to build your resume!</p>
          </div>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="md:text-[43px] font-bold text-[26px] text-left poppins-b text-blue-700"
            style={{ lineHeight: "135%" }}
          >
            Online Resume Builder With Creative Template
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="max-w-lg mt-10 text-left text-[17px] poppins-t text-gray-600 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            quis cumque minus, officiis odio obcaecati! Lorem ipsum dolor sit
            amet consectetur adipisicing.
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex  gap-4 mt-8 text-center"
          >
            <button className="py-[12px] px-8 poppins-t text-white rounded-md bg-blue-700">
              Get Started
            </button>
            <button className="py-[10px] px-8 border-[2px] border-blue-700 rounded-md poppins-t">
              Read a blog
            </button>
          </div>
        </div>
        <div className="lg:order-2 order-1  lg:-mt-2">
          <img className="lg:w-[100%] w-[90%] mx-auto" src={Banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default hero;
