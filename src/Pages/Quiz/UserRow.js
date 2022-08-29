import React from "react";
import { GiQueenCrown } from "react-icons/gi";
import dummy from "../../assets/demo_user.png";

const UserRow = ({ result, position }) => {
  const normal = `bg-gray-200 hover:bg-gray-300`;
  const top = `bg-blue-100 hover:bg-blue-200 `;

  const { name, marks, totalQuestion, email } = result;

  return (
    <div
      className={`flex items-center justify-between gap-4 py-3 px-5 rounded-md cursor-pointer my-3 ${
        position > 3 ? normal : top
      }`}
    >
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-bold md:mr-2">{position}.</h1>
        <img className="w-10 rounded-full" src={dummy} alt="" />
        <div className=" text-lg font-medium flex items-center gap-2">
          {name ? name : "unknown user"}{" "}
          {position < 4 && <GiQueenCrown className="text-yellow-400" />}
        </div>
      </div>
      <div className="text-primary text-lg font-medium">
        {Math.floor(totalQuestion / marks)}%
      </div>
    </div>
  );
};

export default UserRow;
