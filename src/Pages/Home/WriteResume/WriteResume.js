import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import writeResume from "../../../assets/write-resume.webp";
import "./WriteResume.css";

const WriteResume = () => {
  return (
    <div className="grid md:grid-cols-2 gap-7 lg:gap-14 content-center md:mx-16 lg:mx-24 mx-8 py-10">
      <div className="flex items-center md:order-1 order-2">
        <div className="lg:max-w-md">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-gray-800 front-crimson">
            The Right Resume & CV Maker for the Job
          </h2>
          <p className="text-lg lg:my-10 my-5 text-gray-600">
            Tech, Engineering, Management or Marketing - CV generator with the
            right resume templates to highlight your career journey.
          </p>
          <Link
            className="inline-flex items-center px-8 py-3 mt-8  bg-primary border border-primary rounded hover:bg-transparent active:text-primary focus:outline-none focus:ring transition ease-in-out delay-150  text-white hover:text-black"
            to="/"
          >
            <span className="text-sm font-medium"> Get Started </span>
            <BsArrowRight className="text-lg ml-2" />
          </Link>
        </div>
      </div>
      <div className="flex items-center md:order-2 order-1">
        <img src={writeResume} alt="write resume" />
      </div>
    </div>
  );
};

export default WriteResume;
