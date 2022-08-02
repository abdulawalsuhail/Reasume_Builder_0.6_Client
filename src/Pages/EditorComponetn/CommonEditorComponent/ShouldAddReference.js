import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";

const ShouldAddReference = () => {
  return (
    <div className="bg-[#f4f7f8] px-8 md:px-16">
      <h1 className="text-4xl font-[700] text-[#4a4a4a]">Would you like to include</h1>
      <h1 className="text-4xl font-[700] text-[#4a4a4a] mb-10">any references?</h1>
      <p>
        We recommend NOT including references, unless they were specifically
        requested in the job ad.
      </p>
      <div className="md:flex items-center ">
        <div className="flex">
          <div className="border-2 p-12 text-gray-500 hover:border-[#0ed592] hover:text-[#0ed592]">
            <span>
              <MdOutlineDone className="text-4xl " />
            </span>
          </div>
          <div className="border-2 p-12 text-gray-500 hover:border-[#0ed592] hover:text-[#0ed592] ">
            <span>
              <AiOutlineClose className="text-4xl " />
            </span>
          </div>
        </div>

        {/* card */}
        <div className="w-[30%] ml-auto">
          <div class="card max-w-sm bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShouldAddReference;
