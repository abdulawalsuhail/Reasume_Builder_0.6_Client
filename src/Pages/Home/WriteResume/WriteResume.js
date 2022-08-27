import React from "react";
import { GoArrowSmallRight } from "react-icons/go";
import { Link } from "react-router-dom";
import writeResume from "../../../assets/write-resume.webp";
import "./WriteResume.css";

const WriteResume = () => {
  return (
    <section className="writeBackground lg:pb-24 lg:pt-10">
      <div className="grid md:grid-cols-2 gap-7 lg:gap-14 content-center md:mx-16 lg:mx-24 mx-8 py-10 ">
        <div className="flex items-center md:order-1 order-2">
          <div className="lg:max-w-md">
            <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold text-gray-600 poppins-b">
              The Right Resume & CV Maker for the Job
            </h2>
            {/* <h1 className="bg-blue-800 w-24 h-2 rounded-lg mt-2 mb-4"></h1> */}
            <p className="text-[17px] lg:my-10 my-5 text-gray-700 poppins-t">
              Tech, Engineering, Management or Marketing - CV generator with the
              right resume templates to highlight your career journey.
            </p>
            <div>
              <Link
                to="/resume-builder/how-to-start"
                className="inline-flex items-center px-8 py-3 bg-primary border border-primary rounded-lg hover:bg-transparent active:text-blue-800 focus:outline-none focus:ring transition ease-in-out delay-150  text-white hover:text-black
                        "
              >
                <span className="text-sm font-medium"> Build My Resume </span>
                <GoArrowSmallRight className="text-2xl"></GoArrowSmallRight>
              </Link>
            </div>
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
