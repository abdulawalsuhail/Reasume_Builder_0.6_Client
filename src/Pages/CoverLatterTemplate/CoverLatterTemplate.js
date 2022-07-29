import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import CLTemplate from "./CLTemplate";
import CoverLatterTemplateBanner from "./CoverLatterTemplateBanner";
import ShowOff from "./ShowOff";

const CoverLatterTemplate = () => {
  return (
    <div className="bg-[#f4f7f8]">
      <Navbar />
      <CoverLatterTemplateBanner />
      <CLTemplate />
      <ShowOff />
    </div>
  );
};

export default CoverLatterTemplate;
