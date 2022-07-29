import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

import CLTemplate from "./CLTemplate";
import CoverLatterTemplateBanner from "./CoverLatterTemplateBanner";
import FindRightWord from "./FindRightWord";
import ProveYou from "./ProveYou";
import ShowOff from "./ShowOff";
import Steps from "./Steps";

const CoverLatterTemplate = () => {
  return (
    <div className="bg-[#f4f7f8]">
      <Navbar />
      <CoverLatterTemplateBanner />
      <CLTemplate />
      <Steps />
      <ShowOff />
      <FindRightWord />
      <ProveYou />
    </div>
  );
};

export default CoverLatterTemplate;
