import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate, useOutletContext } from "react-router-dom";
import educationImage from "../../../assets/education.png";

const Education = () => {
  const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
  const navigate = useNavigate();
  // Get input field values and store values at str
  // let str = {
  //   name: "Educations",
  //   value: [],
  // }; 

  // const getValue = () => {
  //   str.value = [];
  //   let education = {
  //     name: "Education_1",
  //     value : {}
  //   };

  //   education.value.institutionName = `${document.getElementById("institutionName")?.value}`;
  //   education.value.location = `${document.getElementById("location")?.value}`;
  //   education.value.startDate = `${document.getElementById("startDate")?.value}`;
  //   education.value.endDate = `${document.getElementById("endDate")?.value}`;


  //   str.value.push(education)

  //   setUsersTemplateInfo([...usersTemplateInfo, str]);
  //   navigate("/resume-builder/certifications");
  //   console.log('education',education, usersTemplateInfo);
  // };

  const addEducations = () => {
    let newNode = document.createElement('form');
    newNode.classList.add("pb-3");
    let p = document.createElement("p");
    p.innerText = "Add new education"
    p.classList.add("py-1","text-primary");
    let instituteDiv = document.createElement('div');
    instituteDiv.classList.add("grid","md:grid-cols-2","gap-3");
    instituteDiv.innerHTML = `
      <input
        type = "text"
        placeholder = "Institution Name"
        id = "institutionName"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
      />
      <input
        type = "text"
        placeholder = "Location"
        id = "location"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
      />
    `
    let dateDiv = document.createElement('div');
    dateDiv.classList.add("grid", "md:grid-cols-2", "gap-3","mt-3");
    dateDiv.innerHTML = `
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
    newNode.appendChild(instituteDiv);
    newNode.appendChild(dateDiv);
    const parentNode = document.getElementById("parentNode");
    parentNode.appendChild(newNode);
  }

  return (
    <div className=" bg-[#f4f7f8] lg:mr-7 rounded-2xl my-5">
      <div className="md:px-16 px-7 py-10 grid lg:grid-cols-12 lg:gap-10 ">
        {/* form div */}
        <div className="lg:col-span-8">
          <h3 className="text-4xl font-bold text-gray-700 mb-8">
            Add you educations here
          </h3>

          {/* input form */}
          <div id="parentNode">
            <form  className="pb-3">
            {/* school/ college/ university name and Locations*/}
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type = "text"
                  placeholder = "Institution Name"
                  id = "institutionName"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
                <input
                  type = "text"
                  placeholder = "Location"
                  id = "location"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
              </div>
              {/* Start month,End month,Start year,End year */}
              <div className="grid md:grid-cols-2 gap-3 mt-3">
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
          <div onClick={addEducations} className='flex justify-center items-center text-accent hover:text-primary cursor-pointer'>
              <AiOutlinePlusCircle className='mr-2 text-xl '/>
              <p className='text-lg'> Add Education</p>
          </div>

          {/* button */}
          <div className="flex justify-center gap-10 mt-10 mb-3">
            <a
              onClick={() => navigate("/resume-builder/editor-experience")}
              href="#_"
              class="relative editor-btn inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all group md:px-24 px-10 text-lg rounded-lg border-[1px] border-solid border-gray-400 text-black"
            >
              <span class="relative w-full  text-left ">Back</span>
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
          <img src={educationImage} alt="this is experience img" />
        </div>
      </div>
    </div>
  );
};

export default Education;
