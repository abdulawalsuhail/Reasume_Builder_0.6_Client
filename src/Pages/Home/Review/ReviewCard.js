import React from "react";
import user from "../../../assets/reviewer/lukas.jpg";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = () => {
  return (
    <div className="shadow-md hover:shadow-lg cursor-pointer rounded-md lg:max-w-[360px] md:max-w-xs p-5 bg-white">
      <div className="grid grid-cols-12">
        <img
          className="col-span-3 w-14 rounded-full"
          src={user}
          alt="user img"
        />
        <div className="col-span-9">
          <h2 className="text-lg poppins-b font-bold">Ashikul islam ifty</h2>
          <p className="font-semibold">Developer</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="poppins-r">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          accusantium cumque tenetur ratione ea nobis dolore voluptas! Vel,
          ipsam nisi?
        </p>
        <div className="flex justify-start text-lg gap-1 mt-4 text-blue-800">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
