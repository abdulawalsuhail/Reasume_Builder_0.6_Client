import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate, useOutletContext } from "react-router-dom";

const Reference = () => {
  const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
  const navigate = useNavigate();

  // Get input field values and store values at str
  // let str = {
  //   name: "referenceDetails",
  //   value: [],
  // }; // store input values

  // const getValue = () => {
  //   str.value = [];
  //   str.value.push({
  //     firstName: `${document.getElementById("firstName")?.value}`,
  //   });
  //   str.value.push({
  //     lastName: `${document.getElementById("lastName")?.value}`,
  //   });
  //   str.value.push({
  //     jobTitle: `${document.getElementById("jobTitle")?.value}`,
  //   });
  //   str.value.push({ email: `${document.getElementById("email")?.value}` });
  //   str.value.push({ phone: `${document.getElementById("phone")?.value}` });
  //   str.value.push({ city: `${document.getElementById("city")?.value}` });
  //   str.value.push({
  //     relationship: `${document.getElementById("relationship")?.value}`,
  //   });

  //   setUsersTemplateInfo([...usersTemplateInfo, str]);
  //   navigate("resume-builder/template1");
  //   console.log(usersTemplateInfo);
  //   const pretty = JSON.stringify(usersTemplateInfo, undefined, 4);
  //   document.getElementById("showData").value = pretty;
  // };


  // const addReference = () => {
  //   name,relationshiptoyou,jobtitle,companyname,email,phone
  // }
  const addReference = () => {
    let newNode = document.createElement('form');
    newNode.classList.add("pb-3", "inputForm");
    let p = document.createElement("p");
    p.innerText = "Add new experience"
    p.classList.add("py-1","text-primary");
    let firstDiv = document.createElement('div');
    firstDiv.classList.add("grid","md:grid-cols-2","gap-3");
    firstDiv.innerHTML = `
      <input
        type = "text"
        placeholder = "Name"
        id = "name"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
      />
      <input
        type = "text"
        placeholder = "Relationship to you"
        id = "relationship"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
      />
    `
    let secondDiv = document.createElement('div');
    secondDiv.classList.add("grid", "md:grid-cols-2", "gap-3","mt-3");
    secondDiv.innerHTML = `
      <input
        type="text"
        placeholder="Job Title"
        id="jobTitle"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
      />
      <input
        type="text"
        placeholder="Company Name"
        id="companyName"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
      />
    `
    
    let thirdDiv = document.createElement('div');
    thirdDiv.classList.add("grid", "md:grid-cols-2", "gap-3","mt-3");
    thirdDiv.innerHTML = `
      <input
        type="text"
        placeholder="Phone No"
        id="phone"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
      />
      <input
        type="email"
        placeholder="Email"
        id="email"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
      />
    `
    newNode.appendChild(p);
    newNode.appendChild(firstDiv);
    newNode.appendChild(secondDiv);
    newNode.appendChild(thirdDiv);
    const parentNode = document.getElementById("parentNode");
    parentNode.appendChild(newNode);
  }


  // getting values
  let str = {
    name: "References",
    value: [],
  }; // store input values

  const getValue = () => {
    str.value = [];
    const references = document.getElementsByClassName("inputForm");
    for (let e of references) {
      const reference = {
        name: "Reference",
        value : {}
      };
      reference.value.name = `${e.querySelector("#name")?.value}`;
      reference.value.relationship = `${e.querySelector("#relationship")?.value}`;
      reference.value.jobTitle = `${e.querySelector("#jobTitle")?.value}`;
      reference.value.companyName = `${e.querySelector("#companyName")?.value}`;
      reference.value.phone = `${e.querySelector("#phone")?.value}`;
      reference.value.email = `${e.querySelector("#email")?.value}`;

      str.value.push(reference);
    }

    setUsersTemplateInfo({ ...usersTemplateInfo, reference: str });
    navigate('/resume-builder/template1')
    console.log(str);
  };

  return (
    <div className=" bg-[#f4f7f8] lg:mr-7  p-10">
      <div className="md:w-[70%] mx-auto">
        {/* form div */}
        <div className="lg:col-span-6 mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-700 pb-4">
            Do you have any references ?
          </h3>
          <p className="text-gray-400 text-lg mb-8">
            Add references here
          </p>

          {/* input form */}
          <div id="parentNode">
            <form  className="pb-3 inputForm">
            {/* Name and relationship*/}
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type = "text"
                  placeholder = "Name"
                  id = "name"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
                <input
                  type = "text"
                  placeholder = "Relationship to you"
                  id = "relationship"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
              </div>
              {/* job Title, Company name*/}
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <input
                  type="text"
                  placeholder="Job Title"
                  id="jobTitle"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  id="companyName"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
              </div>
              {/* Phone and email*/}
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <input
                  type="text"
                  placeholder="Phone No"
                  id="phone"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
              </div>
            </form>
          </div>

          {/* add extra input field dynamically */}
          <div onClick={addReference} className='flex justify-center items-center text-accent hover:text-primary cursor-pointer'>
              <AiOutlinePlusCircle className='mr-2 text-xl '/>
              <p className='text-lg'> Add Reference</p>
          </div>

          {/* Button */}
          <div className="flex justify-center gap-10 mt-6">
            <a
              onClick={() =>
                navigate("/resume-builder/career-objective")
              }
              href="#_"
              class="relative editor-btn inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all group md:px-16 px-10 text-lg rounded-lg border-[1px] border-solid border-gray-400 text-black"
            >
              <span class="relative w-full  text-left ">Back</span>
            </a>
            <a
              onClick={getValue}
              href="#_"
              class="relative inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all bg-primary group md:px-16 px-10 text-lg rounded-lg text-white hover:bg-[#3ba6d4]"
            >
              <span class="relative w-full  text-left ">Save and continue</span>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Reference;
