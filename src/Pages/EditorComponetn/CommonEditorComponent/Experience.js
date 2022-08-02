import React from "react";
import experienceImage from "../../../assets/experince.png";

const Experience = () => {
  return (
    <div className=" bg-[#f4f7f8] lg:mr-7 rounded-2xl my-5">
      <div className="md:px-16 px-7 py-10 grid lg:grid-cols-12 lg:gap-5 ">
        {/* form div */}
        <div className="lg:col-span-8">
          <h3 className="text-4xl font-bold text-gray-700 mb-8">
            What's your most recent work experience?
          </h3>

          {/* input form */}
          <form>
            {/* job title */}
            <input
              type="text"
              placeholder="Job title"
              name="jobTitle"
              class="input border-1 border-gray-200 focus:outline-none w-full my-4"
            />
            {/* company name */}
            <input
              type="text"
              placeholder="Company/Organization Name"
              name="companyName"
              class="input border-1 border-gray-200 focus:outline-none w-full mb-4"
            />

            {/* Start month,End month,Start year,End year */}
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Start Month"
                name="StartMonth"
                class="input border-1 border-gray-200 focus:outline-none w-full "
              />
              <input
                type="text"
                placeholder="Start Year"
                name="startYear"
                class="input border-1 border-gray-200 focus:outline-none w-full "
              />
              <input
                type="text"
                placeholder="End month"
                name="endMonth"
                class="input border-1 border-gray-200 focus:outline-none w-full "
              />
              <input
                type="text"
                placeholder="End Year"
                name="endYear"
                class="input border-1 border-gray-200 focus:outline-none w-full "
              />
            </div>

            <div className="flex justify-between mt-10">
              <a
                href="#_"
                class="relative inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group md:px-24 px-10 text-lg"
              >
                <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Back
                </span>
              </a>
              <a
                href="#_"
                class="relative inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group md:px-24 px-10 text-lg"
              >
                <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Continue
                </span>
              </a>
            </div>
          </form>
        </div>
        {/* image div */}
        <div className="lg:col-span-4 hidden lg:block">
          <img src={experienceImage} alt="this is experience img" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
