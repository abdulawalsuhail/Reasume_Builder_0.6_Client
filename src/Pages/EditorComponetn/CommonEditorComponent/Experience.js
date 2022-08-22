import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate, useOutletContext } from "react-router-dom";
import experienceImage from "../../../assets/experince.png";

const Experience = () => {
  const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
  const navigate = useNavigate();







  // Get input field values and store values at str
  // let str = {
  //   name: "experiencesDetails",
  //   value: [],
  // }; // store input values


  // const getValue = () => {
  //   str.value = [];
  //   const experience = {
  //     name: "Experience_1",
  //     value : {}
  //   };

  //   experience.value.jobTitle = `${document.getElementById("jobTitle")?.value}`;
  //   experience.value.companyName = `${document.getElementById("companyName")?.value}`;
  //   experience.value.country = `${document.getElementById("country")?.value}`;
  //   experience.value.state = `${document.getElementById("state")?.value}`;
  //   experience.value.city = `${document.getElementById("city")?.value}`;
  //   experience.value.startMonth = `${document.getElementById("startMonth")?.value}`;
  //   experience.value.startYear = `${document.getElementById("startYear")?.value}`;
  //   experience.value.endMonth = `${document.getElementById("endMonth")?.value}`;
  //   experience.value.endYear = `${document.getElementById("endYear")?.value}`;

  //   str.value.push(experience)

  //   setUsersTemplateInfo([...usersTemplateInfo, str]);
  //   navigate("/resume-builder/editor-education");
  //   console.log(str);
  // };

  const addExperiences = () => {
    let newNode = document.createElement('form');
    newNode.classList.add("pb-3");
    let p = document.createElement("p");
    p.innerText = "Add new experience"
    p.classList.add("py-1","text-primary");
    let firstDiv = document.createElement('div');
    firstDiv.classList.add("grid","md:grid-cols-2","gap-3");
    firstDiv.innerHTML = `
      <input
        type = "text"
        placeholder = "Company Name"
        id = "companyName"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
      />
      <input
        type = "text"
        placeholder = "Location"
        id = "location"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
      />
    `
    let secondDiv = document.createElement('div');
    secondDiv.classList.add("grid", "md:grid-cols-3", "gap-3","mt-3");
    secondDiv.innerHTML = `
      <input
        type="text"
        placeholder="Job Title"
        id="jobTitle"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
      />
      <input
        type="text"
        placeholder="Start date/month/year"
        id="startDate"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
      />
      <input
        type="text"
        placeholder="End date/month/year"
        id="endDate"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
      />
    `
    newNode.appendChild(p);
    newNode.appendChild(firstDiv);
    newNode.appendChild(secondDiv);
    const parentNode = document.getElementById("parentNode");
    parentNode.appendChild(newNode);
  }


  return (
    <div className=" bg-[#f4f7f8] lg:mr-7 rounded-2xl my-5">
      <div className="md:px-16 px-7 py-10 grid lg:grid-cols-12 lg:gap-5 ">
        {/* form div */}
        <div className="lg:col-span-8">
          <h3 className="text-4xl font-bold text-gray-700 mb-8">
            What's your most recent work experience?
          </h3>
          {/* input form */}
          <div id="parentNode">
            <form  className="pb-3">
            {/* Company name and Location*/}
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type = "text"
                  placeholder = "Company Name"
                  id = "companyName"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
                <input
                  type = "text"
                  placeholder = "Location"
                  id = "location"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
              </div>
              {/* Start date End date*/}
              <div className="grid md:grid-cols-3 gap-3 mt-3">
                <input
                  type="text"
                  placeholder="Job Title"
                  id="jobTitle"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
                <input
                  type="text"
                  placeholder="Start date/month/year"
                  id="startDate"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
                <input
                  type="text"
                  placeholder="End date/month/year"
                  id="endDate"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
              </div>
            </form>
          </div>

          {/* add extra input field dynamically */}
          <div onClick={addExperiences} className='flex justify-center items-center text-accent hover:text-primary cursor-pointer'>
              <AiOutlinePlusCircle className='mr-2 text-xl '/>
              <p className='text-lg'> Add Education</p>
          </div>

          {/* button */}
          <div className="flex justify-center gap-10 mt-10">
              <a
                onClick={() => navigate("/resume-builder/editor-contact")}
                href="#_"
                class="relative editor-btn inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all group md:px-24 px-10 text-lg rounded-lg border-[1px] border-solid border-gray-400 text-black"
              >
                <span class="relative w-full  text-left ">Back</span>

                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Back
                </span>
              </a>
              <a
                // onClick={getValue}
                href="#_"
                class="relative inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all bg-primary group md:px-24 px-10 text-lg rounded-lg text-white hover:bg-[#3ba6d4]"
              >
                <span class="relative w-full  text-left ">Continue</span>
              </a>
            </div>
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
