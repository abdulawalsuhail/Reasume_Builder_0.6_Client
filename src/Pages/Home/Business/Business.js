import React from "react";
import image_3 from "../../../assets/Business_deals/logo-businessnewsdaily.svg";
import image_5 from "../../../assets/Business_deals/logo-careerguide.png";
import image_4 from "../../../assets/Business_deals/logo-hubspot.svg";
import image_6 from "../../../assets/Business_deals/logo-yahoo.png";

const Business = () => {
  return (
    <div className="bg-[#f4f7f8]">
      <div className="md:w-2/3 mx-auto flex justify-around items-center py-6 md:py-12 ">
        <img className="w-16 md:w-32" src={image_3} alt="" srcset="" />
        <img className="w-16 md:w-32" src={image_4} alt="" srcset="" />
        <img className="w-16 md:w-48" src={image_5} alt="" srcset="" />
        <img className="w-16 md:w-36" src={image_6} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Business;
