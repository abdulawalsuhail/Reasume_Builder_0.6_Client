import React from "react";
import writeResume from "../../../assets/write-resume.webp";
import "./WriteResume.css";

const WriteResume = () => {
  return (
    <section className="writeBackground py-20">
      <div className="grid md:grid-cols-2 gap-7 lg:gap-14 content-center md:mx-16 lg:mx-24 mx-8 py-10 ">
        <div className="flex items-center md:order-1 order-2">
          <div className="lg:max-w-md">
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-blue-800 front-crimson">
              The Right Resume & CV Maker for the Job
            </h2>
            <p className="text-[17px] lg:my-10 my-5 text-gray-600 poppins-t">
              Tech, Engineering, Management or Marketing - CV generator with the
              right resume templates to highlight your career journey.
            </p>
            <button className="btn btn-primary text-white">
              Explore all Templates
            </button>
          </div>
        </div>
        <div className="flex items-center md:order-2 order-1">
          <img src={writeResume} alt="write resume" />
        </div>
      </div>
    </section>
  );
};

export default WriteResume;
