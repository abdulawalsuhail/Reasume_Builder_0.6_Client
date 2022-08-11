import React from "react";
import CoverLetterNavbar from "./CoverLetterNavbar";
import welcome from "../../../assets/cover-letter-welcome.gif";

const CoverLetterInput = () => {
  return (
    <div>
      <CoverLetterNavbar />
      <img src={welcome} className="w-fit mx-auto mt-10" alt="" />
      <h3 className="text-4xl text-center mt-10">This is cover letter input</h3>
    </div>
  );
};

export default CoverLetterInput;
