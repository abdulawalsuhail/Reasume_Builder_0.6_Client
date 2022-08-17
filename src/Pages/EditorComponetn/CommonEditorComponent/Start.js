import React from "react";
import EditorNavbar from "./EditorNavbar";
import imgtwo from "../../../assets/start2.png";
import imgone from "../../../assets/start1.png";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] bg-[#e5fbe550]">
      <div className="2xl:pt-[6%] pt-[2%]">
      <h1 className="text-[2rem] md:text-[3.5rem] 2xl:text-[4rem] front-crimson font-semibold py-12 text-center">
        How would you like to start?
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div
          onClick={() => navigate("/resume-builder/editor-contact")}
          class=" card rounded-lg hover:shadow-2xl bg-base-100 border-[1px] border-green-500 w-[60%] lg:w-[30%] h-[30%] cursor-pointer"
        >
          <img src={imgtwo} alt="Create new resume" />

          <h2 class="text-[1rem] md:text-[1.5rem] 2xl:text-[2rem] text-center text-gray-600 font-bold mt-5">
            Create a New Resume
          </h2>

          <p className="text-center text-[.70rem] md:text-[.85rem] 2xl:text-[1.5rem] pb-5 mt-2 text-gray-500">
            We'll guide you through each resume section!
          </p>
        </div>
        <div
          onClick={() => navigate("/resume-builder/drag-and-drop-file")}
          class = "card rounded-lg hover:shadow-2xl bg-base-100 border-[1px] border-green-500 w-[60%] lg:w-[30%] h-[30%] cursor-pointer"
        >
          <img src={imgone} alt="Shoes" />

          <h2 class="text-[1rem] md:text-[1.5rem] 2xl:text-[2rem] text-center text-gray-600 font-bold mt-5">
            Upload Current Resume
          </h2>

          <p className="text-center text-[.70rem] md:text-[.85rem] 2xl:text-[1.5rem] pb-5 mt-2 text-gray-500">
            We'll guide you through each resume section!
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Start;