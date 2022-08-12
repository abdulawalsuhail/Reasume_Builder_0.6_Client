import React, { useState } from "react";
import CoverLetterNavbar from "./CoverLetterNavbar";
import welcome from "../../../assets/cover-letter-welcome.gif";
import { MdSkipNext } from "react-icons/md";

const CoverLetterInput = () => {
  const [section, setSection] = useState("name");
  return (
    <div className="min-h-screen bg-[#f4f7f8a6]">
      <CoverLetterNavbar />
      <img src={welcome} className="w-fit mx-auto mt-10" alt="" />
      <h3 className="md:text-4xl text-2xl px-5 md:text-center mb-8 mt-4 poppins-i text-gray-500">
        Please enter your name as you’d like it to appear on your cover letter
      </h3>

      <div className="flex justify-center gap-3 px-5">
        <input
          type="text"
          placeholder="Type your name here"
          class="input input-bordegreen lg:max-w-xl md:max-w-lg w-full input-success"
        />
        <button class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group">
          <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span class="relative w-full flex items-center gap-2 text-left text-[16px] text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            next <MdSkipNext />
          </span>
        </button>
      </div>
    </div>
  );
};

export default CoverLetterInput;
