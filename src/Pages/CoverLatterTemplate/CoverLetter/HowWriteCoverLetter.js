import React from "react";
import { useNavigate } from "react-router-dom";
import unique from "../../../assets/unique.png";
import example from "../../../assets/example.png";

const HowWriteCoverLetter = () => {
  const navigate = useNavigate();
  return (
    <div className="h-min-screen bg-[#f4f7f8a5]">
      <div className="px-8">
        <h1 className="md:text-5xl text-4xl front-crimson font-semibold pt-20 md:text-center">
          How would you write your letter?
        </h1>
        <p className="text-lg text-gray-500 md:text-center py-4">
          You can build a unique cover letter in a few steps, or use an existing
          example.
        </p>
      </div>
      <div className=" flex flex-col md:flex-row justify-center items-center gap-6 py-8  ">
        <div
          onClick={() => navigate("/resume-builder/editor-contact")}
          class=" card rounded-xl hover:shadow-2xl bg-base-100 border-[1px] border-green-500 w-[280px] h-[240px] cursor-pointer p-8"
        >
          <img className="w-20 mx-auto" src={unique} alt="unique img" />

          <h2 class=" text-[20px] mt-7 text-center text-gray-600 font-bold ">
            Build a unique cover letter for me
          </h2>
        </div>
        <div
          onClick={() => navigate("/resume-builder/drag-and-drop-file")}
          class=" card hover:shadow-2xl bg-base-100  rounded-1xl border-[1px] border-gray-300 hover:border-green-500 w-[280px] h-[240px] cursor-pointergit p-8 cursor-pointer"
        >
          <img className="w-20 mx-auto" src={example} alt="example img" />

          <h2 class="  text-[20px] mt-7 text-center text-gray-600 font-bold ">
            Continue using an example
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HowWriteCoverLetter;
