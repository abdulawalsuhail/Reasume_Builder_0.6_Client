import React from "react";
import EditorNavbar from "./EditorNavbar";
import imgtwo from "../../../assets/start2.png";
import imgone from "../../../assets/start1.png";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { useNavigate } from "react-router-dom";
>>>>>>> bb66561d043fad571666604e67476b6559eed103

const Start = () => {
  const navigate = useNavigate();
  return (
<<<<<<< HEAD
    <div>
      <EditorNavbar></EditorNavbar>
    <div className="bg-[#f9fbfa] mx-10 my-10 border-1 rounded-xl ">

    <h1 className="text-5xl font-extrabold text-center">
        How would you like to start?
      </h1>
      <div className=" flex    flex-col md:flex-row   justify-center items-center gap-5 	 py-8  ">
        <Link to="">
        <div class=" card   border-2 rounded-xl border-red-500    shadow-2xl bg-base-100 hover:drop-shadow-[0_20px_15px_rgba(65,105,144,.6)]   ">
          <img src={imgtwo} className="w-[500px] " alt="Shoes" />

          <h2 class=" text-3xl text-center text-extrabold mt-5">
            Create a New Resume
          </h2>

          <p className="text-center text-bold mb-5">
            We'll guide you through each resume section!
          </p>
        </div>
        </Link>
      <Link>
      <div class=" card    shadow-2xl bg-base-100  hover:drop-shadow-[0_20px_15px_rgba(65,105,144,.6)] hover:border-2 rounded-1xl border-red-500   ">
          <img src={imgone} className="w-[500px] " alt="Shoes" />

          <h2 class=" text-3xl text-center text-extrabold mt-5">
            Upload My Current Resume
          </h2>

          <p className="text-center text-bold mb-5">
            We'll guide you through each resume section!
          </p>
        </div>
      </Link>
=======
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
>>>>>>> bb66561d043fad571666604e67476b6559eed103
      </div>
    </div>
    </div>
  );
};

export default Start;
