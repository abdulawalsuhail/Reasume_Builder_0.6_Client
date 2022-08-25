import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";

const Icon = ({ crr, selected }) => {
  return (
    <div>
      {crr?.answer === selected ? (
        <GiCheckMark className="bg-green-200 border-[1px] border-green-500 text-green-600 font-bold p-1 text-[20px] rounded-full" />
      ) : (
        <AiOutlineClose className="bg-red-200 border-[1px] border-red-500 text-red-600 font-bold p-1 text-[20px] rounded-full" />
      )}
    </div>
  );
};

export default Icon;
