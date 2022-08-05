import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const Template2 = () => {
  return (
    <div className="bg-[#f4f7f8] h-screen">
      <div className="w-[60%] bg-white mx-auto p-10">
        <h1 className="text-3xl font-semibold">Your Name</h1>
        <p className="my-2 text-[15px] font-semibold text-lime-800">
          Web Developer
        </p>
        <p>
          Your carrer objective hare Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum, animi. Lorem ipsum dolor sit amet. Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Suscipit, officia! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quos, eveniet?
        </p>
        <FaLocationArrow /> Dhaka, Bangladesh
      </div>
    </div>
  );
};

export default Template2;
