import React from "react";
import EditorNavbar from "./EditorNavbar";
import imgtwo from "../../../assets/start2.png";
import imgone from "../../../assets/start1.png";

const Start = () => {
  return (
    <div>
      <EditorNavbar></EditorNavbar>
      <h1 className="text-5xl font-extrabold text-center">
        How would you like to start?
      </h1>
      <div className=" flex    flex-col md:flex-row   justify-center items-center gap-5 	 py-8  ">
       
      
        <div class=" card   border-2 rounded-xl border-red-500    shadow-2xl bg-base-100 hover:drop-shadow-[0_20px_15px_rgba(65,105,144,.6)]   ">
          
            <img src={imgtwo} className="w-[500px] " alt="Shoes"  />
        
         
            <h2 class=" text-3xl text-center text-extrabold mt-5">Create a New Resume</h2>
        
            <p className="text-center text-bold mb-5">We'll guide you through each resume section!</p>
       
        </div>
        <div class=" card    shadow-2xl bg-base-100  hover:drop-shadow-[0_20px_15px_rgba(65,105,144,.6)] hover:border-2 rounded-1xl border-red-500   ">
          
            <img src={imgone} className="w-[500px] " alt="Shoes" />
        
         
            <h2 class=" text-3xl text-center text-extrabold mt-5">Upload My Current Resume</h2>
        
            <p className="text-center text-bold mb-5">We'll guide you through each resume section!</p>
       
        </div>
       
      </div>
    </div>
  );
};

export default Start;
