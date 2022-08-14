import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import educationImage from "../../../assets/education.png";

const Education = () => {
  const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
  const navigate = useNavigate();
  // Get input field values and store values at str
  let str = {
    name: "educationDetails",
    value: [],
  }; // store input values

  const getValue = () => {
    str.value = [];
    str.value.push({
      schoolName: `${document.getElementById("schoolName")?.value}`,
    });
    str.value.push({ country: `${document.getElementById("country")?.value}` });
    str.value.push({ state: `${document.getElementById("state")?.value}` });
    str.value.push({ city: `${document.getElementById("city")?.value}` });
    str.value.push({
      graduationMonth: `${document.getElementById("graduationMonth")?.value}`,
    });
    str.value.push({
      graduationYear: `${document.getElementById("graduationYear")?.value}`,
    });

    setUsersTemplateInfo([...usersTemplateInfo, str]);
    navigate("/resume-builder/certifications");
    console.log(str);
  };

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

            <div className="flex justify-center gap-10 mt-10 mb-3">
              <a
                onClick={() => navigate("/resume-builder/editor-experience")}
                href="#_"
                class="relative editor-btn inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all group md:px-24 px-10 text-lg rounded-full border-[1px] border-solid border-gray-400 text-black"
              >
                <span class="relative w-full  text-left ">Back</span>
              </a>
              <a
                onClick={getValue}
                href="#_"
                class="relative inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all bg-primary group md:px-24 px-10 text-lg rounded-full text-white hover:bg-[#3ba6d4]"
              >
                <span class="relative w-full  text-left ">Continue</span>
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
