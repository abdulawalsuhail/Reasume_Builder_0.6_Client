import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ResumeBanner from "./ResumeBanner/ResumeBanner";
import ResumeTemplate from "./ResumeTemplate/ResumeTemplate";

const Resume = () => {
  return (
    <div className="bg-[#f4f7f8]">
      <Navbar />
      <ResumeBanner />
      <ResumeTemplate />
    </div>
  );
};

export default Resume;
