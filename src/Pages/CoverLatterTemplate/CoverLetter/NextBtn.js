import React from "react";
import { MdSkipNext } from "react-icons/md";

const NextBtn = ({ setSection, section }) => {
  return (
    <button
      onClick={() => setSection(section)}
      class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group"
    >
      <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
      </span>
      <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
      <span class="relative w-full flex items-center gap-2 text-left text-[16px] text-white transition-colors duration-200 ease-in-out group-hover:text-white">
        next <MdSkipNext />
      </span>
    </button>
  );
};

export default NextBtn;
