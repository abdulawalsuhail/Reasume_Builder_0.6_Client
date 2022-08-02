import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";

const ShouldAddReference = () => {
  return (
    <div className="bg-[#f4f7f8]">
        <h1>Would you like to include</h1>
        <h1>any references?</h1>
        <p>We recommend NOT including references, unless they were specifically requested in the job ad.</p>
     <div className="flex items-center">
        <div className="d-flex">
        <div className="w-[30%]">
        <span><MdOutlineDone /></span>
      </div>
      <div className="w-[30%]">
        <span><AiOutlineClose /></span>
      </div>
        </div>
        <div>HEllo</div>
     </div>
    </div>
  );
};

export default ShouldAddReference;
