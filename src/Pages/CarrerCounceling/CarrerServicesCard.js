import React from "react";

const CarrerServicesCard = ({ service }) => {
  console.log(service);
  const { _id, serviceName, desc, price, color, serviceDate } = service;
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
      <button className="btn btn-primary text-white mt-4 px-12">By Now</button>
      <p className="text-[14px] text-[#384347] mt-[45px]">
        Draft ready within 3 business days of first call
      </p>
    </div>
  );
};

export default CarrerServicesCard;
