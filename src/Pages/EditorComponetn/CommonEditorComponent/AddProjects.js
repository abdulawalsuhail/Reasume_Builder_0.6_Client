import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import experienceImage from "../../../assets/experince.png";

const AddProjects = () => {
    let number = 2;
    const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
    const navigate = useNavigate();
    const { _id } = useParams();


    const addNewProject = () => {
    
    let newForm = document.createElement('form');
    newForm.classList.add("pb-3","inputForm","abc2");
    let p = document.createElement("p");
    p.innerText = "Add new project details"
    p.classList.add("py-1","text-primary");
    let div = document.createElement('div');
    div.classList.add("grid","md:grid-cols-1","gap-3");
    div.innerHTML = `
        <input
        type = "text"
        placeholder = "Live Link"
        id = "liveLink"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full mb-2"
        />
        
        <input
        type = "text"
        placeholder = "Client side code Link"
        id = "clientCode"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full mb-2"
        />
        
        <input
        type = "text"
        placeholder = "Server Side Code Link"
        id = "serverCode"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
        />
        
        <h1 className='text-left my-2 text-xs text-accent font-bold'>Add Features and Functionality separated by comma</h1>
        <input
        type = "text"
        placeholder = "Features and functionality"
        id = "serverCode"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
        />
        
        <h1 className='text-left my-2 text-xs   text-accent font-bold'>Add technologies separate by comma</h1>
        <input
        type = "text"
        placeholder = "Technology used"
        id = "serverCode"
        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
        />
    `
    newForm.appendChild(p);
    newForm.appendChild(div);
    const parentNode = document.getElementById("parentNode");
    parentNode.appendChild(newForm);
    }

    // features and functionality
    // function addNewFunctionality() {
    //     number++;
    //     let newNode = document.createElement('input');
    //     newNode.classList.add('input','input-bordered','w-full','mb-4','h-8','skills');
    //     newNode.setAttribute('type','text');
    //     newNode.setAttribute('placeholder', 'Features and Functionality');
    //     newNode.setAttribute('name', `skills_${number}`);

    //     let parentFrom = document.getElementById('ffId');
    //     parentFrom.appendChild(newNode)
    // }
    
    // Technology
    // function addNewTechnology() {
    //     number++;
    //     let newNode = document.createElement('input');
    //     newNode.classList.add('input','input-bordered','w-full','mb-4','h-8','skills');
    //     newNode.setAttribute('type','text');
    //     newNode.setAttribute('placeholder', 'Technology Used');
    //     newNode.setAttribute('name', `skills_${number}`);

    //     let parentFrom = document.getElementById('technologyId');
    //     parentFrom.appendChild(newNode)
    // }


    // getting values
    let str = {
        name: "Projects",
        value: [],
    }; // store input values

    const getValue = () => {
        str.value = [];
        // const experiences = document.getElementsByClassName("inputForm");
        // for (let e of experiences) {
        // const experience = {
        // name: "Project",
        // value : {}
        // };
        // experience.value.companyName = `${e.querySelector("#companyName")?.value}`;
        // experience.value.location = `${e.querySelector("#location")?.value}`;
        // experience.value.jobTitle = `${e.querySelector("#jobTitle")?.value}`;
        // experience.value.startDate = `${e.querySelector("#startDate")?.value}`;
        // experience.value.endDate = `${e.querySelector("#endDate")?.value}`;

        // str.value.push(experience)
        // }

        // setUsersTemplateInfo({...usersTemplateInfo,projects:str});
        
        navigate(`/resume-builder/${_id}/editor-education`);
        console.log(usersTemplateInfo);
    };
    

    return (
    <div className=" bg-[#f4f7f8] lg:mr-7 rounded-2xl my-5">
      <div className="md:px-16 px-7 py-10 grid lg:grid-cols-12 lg:gap-5 ">
        {/* form div */}
        <div className="lg:col-span-8 text-center">
            <h3 className="text-4xl font-bold text-gray-700 mb-2">
                What's your most recent Projects?
            </h3>
            <p className="text-gray-400 text-lg mt-2 mb-5">
                Please add your Project details
            </p>
            {/* input form */}
            <div id="parentNode">
                <form  className="pb-3 inputForm text-left text-xs">
                    <div className="grid md:grid-cols-1 mb-2">
                        <input
                        type = "text"
                        placeholder = "Live Link"
                        id = "liveLink"
                        class="input h-14 border-1 border-gray-200 focus:outline-none w-full mb-2"
                        />
                        
                        <input
                        type = "text"
                        placeholder = "Client side code Link"
                        id = "clientCode"
                        class="input h-14 border-1 border-gray-200 focus:outline-none w-full mb-2"
                        />
                        
                        <input
                        type = "text"
                        placeholder = "Server Side Code Link"
                        id = "serverCode"
                        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                        />
                        
                        <h1 className='text-left my-2 text-xs text-accent font-bold'>Add Features and Functionality separated by comma</h1>
                        <input
                        type = "text"
                        placeholder = "Features and functionality"
                        id = "serverCode"
                        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                        />
                        
                        <h1 className='text-left my-2 text-xs   text-accent font-bold'>Add technologies separate by comma</h1>
                        <input
                        type = "text"
                        placeholder = "Technology used"
                        id = "serverCode"
                        class="input h-14 border-1 border-gray-200 focus:outline-none w-full "
                        />
                        
                    </div>
                    
                    
                    {/* Features and functionality */}
                    {/* <h1 className='text-left my-2 text-md text-accent font-bold'>Features and Functionality</h1>
                    <div className='flex justify-center'>
                    <form id='ffId' className=' w-[100%] md:w-[80%]'>
                        <input name='featuresAndFunctionality' type="text" placeholder="Features and Functionality" class="input input-bordered w-full mb-4 h-8 skills" /><br />
                    </form>
                    </div>
                    <div onClick={addNewFunctionality} className='flex justify-center items-center text-accent hover:text-primary cursor-pointer'>
                        <AiOutlinePlusCircle className='mr-2 text-lg '/>
                        <p className='text-sm'> Add Functionality</p>
                    </div> */}
                    
                    
                    {/* Technology used */}
                    {/* <h1 className='text-left my-2 text-md text-accent font-bold'>Technology Used</h1>
                    <div className='flex justify-center'>
                    <form id='technologyId' className=' w-[100%] md:w-[80%]'>
                        <input name='technologyUsed' type="text" placeholder="Technology Used" class="input input-bordered w-full mb-4 h-8 skills" /><br />
                    </form>
                    </div>
                    <div onClick={addNewTechnology} className='flex justify-center items-center text-accent hover:text-primary cursor-pointer'>
                        <AiOutlinePlusCircle className='mr-2 text-lg '/>
                        <p className='text-sm'> Add Technology</p>
                    </div> */}
                
                </form>
            </div>
            
            {/* add extra input field dynamically */}
            <div onClick={addNewProject} className='flex justify-center items-center text-accent hover:text-primary cursor-pointer'>
                <AiOutlinePlusCircle className='mr-2 text-xl '/>
                <p className='text-lg'> Add New Project</p>
            </div>

            {/* button */}
            <div className="flex justify-center gap-10 mt-10">
                <a
                    onClick={() => navigate(`/resume-builder/${_id}/social-network`)}
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
        {/* image div */}
        <div className="lg:col-span-4 hidden lg:block">
          <img src={experienceImage} alt="this is experience img" />
        </div>
      </div>
    </div>
  );
};

export default AddProjects;