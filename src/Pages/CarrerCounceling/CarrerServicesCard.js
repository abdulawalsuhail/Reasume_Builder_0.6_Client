import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CarrerServicesCard = ({ service }) => {
  const { _id, serviceName, desc, price, color, serviceDate } = service;

  const navigate = useNavigate()
  return (
    <div
      style={{ borderTop: `4px solid ${color}` }}
      className={`shadow-lg text-center p-6 border-t-4 border-primary rounded`}
    >
      <h2 style={{ color: color }} className={`uppercase text-2xl   mt-2`}>
        {serviceName}
      </h2>

      <p className="text-[12px] text-[#384347] mt-5">{desc}</p>
      <h2 className="text-4xl text-[#2d3639] mt-4">${price}</h2>
      <button onClick={()=> navigate(`/resume-builder/career-counselling/${_id}`)} className="btn btn-primary text-white mt-4 px-12">Buy Now</button>
      <p className="text-[14px] text-[#384347] mt-[45px]">{serviceDate} </p>
      <MdOutlineDone className="text-4xl text-primary mx-auto hidden md:block mt-[90px]" />
    </div>
  );
};

export default CarrerServicesCard;
