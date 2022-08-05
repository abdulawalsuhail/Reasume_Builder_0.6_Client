import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Reference = () => {
  const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
  const navigate = useNavigate()
  
    // Get input field values and store values at str
  let str = {
      name:"referenceDetails",
      value:[]
    };// store input values
    
    const getValue = () => {
      str.value = []
      str.value.push({ firstName: `${document.getElementById('firstName')?.value}` })
      str.value.push({ lastName: `${document.getElementById('lastName')?.value}` })
      str.value.push({ jobTitle: `${document.getElementById('jobTitle')?.value}` })
      str.value.push({ email: `${document.getElementById('email')?.value}` })
      str.value.push({ phone: `${document.getElementById('phone')?.value}` })
      str.value.push({ city: `${document.getElementById('city')?.value}` })
      str.value.push({ relationship: `${document.getElementById('relationship')?.value}` })

      setUsersTemplateInfo([...usersTemplateInfo, str])
      navigate('/resume-builder/template1');
      console.log(str);
    }
    
    return (
        <div className=" bg-[#f4f7f8] lg:mr-7  p-10">
        <div className="w-[70%] mx-auto">
          {/* form div */}
          <div className="lg:col-span-6 mx-auto">
            <h3 className="text-4xl font-bold text-gray-700 mb-4">Add Reference</h3>
            {/* input form */}
            <form className='mx-auto'>
              {/* first name last name */}
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
              </div>
              {/* job title */}
              <input
                type="text"
                placeholder="Job title"
                id="jobTitle"
                class="input h-14 border-1 border-gray-200 focus:outline-none w-full my-4"
              />
              {/* phone */}
              <input
                type="text"
                placeholder="Email"
                id="email"
                class="input h-14 border-1 border-gray-200 focus:outline-none w-full my-4"
              />
  
              {/* country,city,zip code,state */}
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Phone"
                  id="phone"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
                <input
                  type="text"
                  placeholder="company/organization name"
                  id="city"
                  class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                />
              </div>
              {/* Email */}
              <input
                type="text"
                placeholder="Relationship To you"
                id="relationship"
                class="input h-14 border-1 border-gray-200 focus:outline-none w-full my-4"
              />
              <div className="flex justify-center gap-10 mt-6">
                <a
                onClick={() => navigate("/resume-builder/reference/should_add_reference")}
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
            </form>
          </div>
        </div>
      </div>
    );
};

export default Reference;