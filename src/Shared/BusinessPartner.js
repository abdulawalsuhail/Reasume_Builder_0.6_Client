import React from "react";
import brand_1 from "../assets/CVSectionImages/tesla.webp";
import brand_2 from "../assets/CVSectionImages/google.webp";
import brand_3 from "../assets/CVSectionImages/spotify.webp";
import brand_4 from "../assets/CVSectionImages/pinterest.webp";

const BusinessPartner = () => {
  return (
    <div className="flex justify-center items-center md:gap-10 gap-5 border-y-[2px] border-gray-100 py-5 opacity-60">
      <img style={{ width: "10%" }} src={brand_1} alt="" />
      <img style={{ width: "10%" }} src={brand_2} alt="" />
      <img style={{ width: "10%" }} src={brand_3} alt="" />
      <img style={{ width: "10%" }} src={brand_4} alt="" />
      <img style={{ width: "10%" }} src={brand_3} alt="" />
    </div>
  );
};

export default BusinessPartner;
