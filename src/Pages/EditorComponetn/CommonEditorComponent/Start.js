import React from "react";
import EditorNavbar from "./EditorNavbar";
import imgtwo from "../../../assets/start2.png";
import imgone from "../../../assets/start1.png";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  return (
    <div className="h-min-screen bg-[#f4f7f8a5]">
      <EditorNavbar></EditorNavbar>
      <h1 className="text-5xl front-crimson font-semibold mt-5 text-center">
        How would you like to start?
      </h1>
      <div className=" flex flex-col md:flex-row justify-center items-center gap-10 py-8  ">
        <div
          onClick={() => navigate("/resume-builder/editor-contact")}
          class=" card rounded-xl hover:shadow-2xl bg-base-100 border-[1px] border-green-500 w-[464px] h-[360px] cursor-pointer"
        >
          <img src={imgtwo} alt="Shoes" />

          <h2 class=" text-3xl text-center text-gray-600 font-bold mt-5">
            Create a New Resume
          </h2>

          <p className="text-center text-[16px]  mb-5 mt-2 text-gray-500">
            We'll guide you through each resume section!
          </p>
        </div>
        <div
          onClick={() => navigate("/resume-builder/drag-and-drop-file")}
          class=" card hover:shadow-2xl bg-base-100  rounded-1xl border-[1px] border-gray-300 hover:border-green-500 w-[464px] h-[360px] cursor-pointergit "
        >
          <img src={imgone} alt="Shoes" />

          <h2 class=" text-3xl text-center text-gray-600 font-bold mt-5">
            Upload My Current Resume
          </h2>

          <p className="text-center text-[16px]  mb-5 mt-2 text-gray-500">
            We'll guide you through each resume section!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Start;
