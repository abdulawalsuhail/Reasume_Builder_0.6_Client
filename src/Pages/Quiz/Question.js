import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
const Question = () => {
  return (
    <div className="min-h-screen bg-green-50 flex justify-center items-center">
      <div className=" md:w-[550px] bg-white shadow-lg rounded-lg mx-5">
        <div className="border-b-[1px] border-green-500 px-8 py-4 poppins-b flex justify-between items-center">
          <p className="text-[18px] font-bold">Please pik a answer</p>
          <div className="bg-blue-100 py-2 px-3">
            <p>
              Time left{" "}
              <span className="bg-slate-700 text-white py-[1px] px-2">15</span>
            </p>
          </div>
        </div>
        <div className="py-3 px-8">
          <h1 className="text-[22px] poppins-b font-semibold">
            1. What does html stand for?
          </h1>
          <div className="py-5">
            <div className="py-2 px-4 border-[1px] border-blue-200 bg-blue-100 rounded-md cursor-pointer">
              Hyper text prototype
            </div>

            <div className="py-2 px-4 border-[1px] border-green-200 bg-green-100 rounded-md cursor-pointer flex justify-between items-center my-3">
              <p>Hyper text prototype</p>{" "}
              <GiCheckMark className="bg-green-200 border-[1px] border-green-500 text-green-600 font-bold p-1 text-[20px] rounded-full" />
            </div>

            <div className="py-2 px-4 border-[1px] border-red-200 bg-red-100 rounded-md cursor-pointer flex justify-between items-center my-3">
              <p>Hyper text prototype</p>{" "}
              <AiOutlineClose className="bg-red-200 border-[1px] border-red-500 text-red-600 font-bold p-1 text-[20px] rounded-full" />
            </div>

            <div className="py-2 px-4 border-[1px] border-blue-200 bg-blue-100 rounded-md cursor-pointer">
              Hyper text prototype
            </div>
          </div>
        </div>

        <div className="flex justify-end px-8 py-3 gap-3 border-t-[1px] border-green-500">
          <button className="py-2 px-4 rounded-md bg-green-500 text-white">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
