import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import educationImage from "../../../assets/education.png";

const Education = () => {

  const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
  const navigate = useNavigate();
  // Get input field values and store values at str
  let str = {
    educationDetails:[]
  };// store input values

  const getValue = () => {
    str.educationDetails = []
    str.educationDetails.push({ schoolName: `${document.getElementById('schoolName')?.value}` })
    str.educationDetails.push({ country: `${document.getElementById('country')?.value}` })
    str.educationDetails.push({ state: `${document.getElementById('state')?.value}` })
    str.educationDetails.push({ city: `${document.getElementById('city')?.value}` })
    str.educationDetails.push({ graduationMonth: `${document.getElementById('graduationMonth')?.value}` })
    str.educationDetails.push({ graduationYear: `${document.getElementById('graduationYear')?.value}` })
    
    setUsersTemplateInfo([...usersTemplateInfo, str])
    navigate('/resume-builder/certifications');
    console.log(str);
  }

  return (
    <div className=" bg-[#f4f7f8] lg:mr-7 rounded-2xl my-5">
      <div className="md:px-16 px-7 py-10 grid lg:grid-cols-12 lg:gap-10 ">
        {/* form div */}
        <div className="lg:col-span-8">
          <h3 className="text-4xl font-bold text-gray-700 mb-8">
            What’s your high school?
          </h3>

          {/* input form */}
          <form>
            {/* High school name*/}
            <input
              type="text"
              placeholder="High school name"
              id="schoolName"
              class="input h-14 border-1 border-gray-200 focus:outline-none w-full my-4"
            />

            {/* country, state, city */}
            <div className="grid md:grid-cols-3 gap-5 mb-5">
              <input
                type="text"
                placeholder="Country"
                id="country"
                class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
              />
              <input
                type="text"
                placeholder="State"
                id="state"
                class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
              />
              <input
                type="text"
                placeholder="City"
                id="city"
                class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
              />
            </div>

            {/* Start month,End month,Start year,End year */}
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Graduation Month"
                id="graduationMonth"
                class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
              />
              <input
                type="text"
                placeholder="Graduation Year"
                id="graduationYear"
                class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
              />
            </div>

            <div className="flex justify-between mt-10 mb-3">
              <a
                onClick={()=> navigate('/resume-builder/editor-experience')}
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
                onClick={getValue}
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
            <p className="text-red-600 text-[17px] link">Skip This Step</p>
          </form>
        </div>
        {/* image div */}
        <div className="lg:col-span-4 hidden lg:block">
          <img src={educationImage} alt="this is experience img" />
        </div>
      </div>
    </div>
  );
};

export default Education;
