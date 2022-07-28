import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import CLTemplate from "./CLTemplate";
import CoverLatterTemplateBanner from "./CoverLatterTemplateBanner";

const CoverLatterTemplate = () => {
  return (
    <div>
      <Navbar />
      <CoverLatterTemplateBanner />
      <CLTemplate />
    </div>
  );
};

export default CoverLatterTemplate;
