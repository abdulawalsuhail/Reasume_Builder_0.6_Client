import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import CoverLetter from "../Home/Templates/CoverLetter";

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
      {/* <CLTemplate /> */}
      <div className='2xl:w-3/4 mx-auto py-24'>
          <h2 className="lg:text-center text-left my-4 lg:text-5xl text-4xl front-crimson font-semibold">
          Build your cover latter now.First choose a design</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:mx-16">
            <CoverLetter/>    
          </div>
      </div>
      <Steps />
      <ShowOff />
      <FindRightWord />
      <ProveYou />
      {/* Footer section */}
      <Footer/>
    </div>
  );
};

export default CoverLatterTemplate;
