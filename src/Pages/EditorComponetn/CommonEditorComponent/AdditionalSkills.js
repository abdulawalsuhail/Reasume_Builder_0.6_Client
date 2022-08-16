import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useNavigate, useOutletContext } from 'react-router-dom';
import img1 from '../../../assets/additionalSkills.png';
const AdditionalSkills = () => {
    let number = 2;
    
    const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
    const navigate = useNavigate();

    function addNewSkills() {
        number++;
        let newNode = document.createElement('input');
        newNode.classList.add('input');
        newNode.classList.add('input-bordered');
        newNode.classList.add('w-full');
        newNode.classList.add('mb-4');
        newNode.classList.add('h-14');
        newNode.classList.add('skills');
        newNode.setAttribute('type','text');
        newNode.setAttribute('placeholder', 'Skills');
        newNode.setAttribute('name', `skills_${number}`);

        let parentFrom = document.getElementById('skillsId');
        parentFrom.appendChild(newNode)
    }


    // Get input field values and store
    let str = {
            name: "Skills",
            value: []
    };// store input values
    const getValue = () => {
        str.value = [];
        const skills = document.getElementsByClassName("skills");
        for (let e of skills) {
            str.value.push(e.value);
        }

        setUsersTemplateInfo([...usersTemplateInfo, str])
        navigate("/resume-builder/languages")
        console.log(usersTemplateInfo); 
    }
    console.log(usersTemplateInfo);

    return (
        <div className='px-12 py-12 bg-[#f4f7f8]'>
            <div className='flex'>
                {/* input section */}
                <div className="w-[100%] md:w-[70%] text-center">
                    <h1 className='text-accent text-xl md:text-4xl font-bold'>Do you have any additional skills?</h1>
                    <p className='text-slate-500 text-xs md:text-lg mt-2'>Enter your Skills one at a time.</p>
                    <div className='flex justify-center'>
                        <form id='skillsId' className='mt-12 w-[100%] md:w-[80%]'>
                            <input name='skills_1' type="text" placeholder="Skills" class="input input-bordered w-full mb-4 h-14 skills" /><br />
                            <input name='skills_2' type="text" placeholder="Skills" class="input input-bordered w-full mb-4 h-14 skills" /><br />
                            <input name='skills_3' type="text" placeholder="Skills" class="input input-bordered w-full mb-4 h-14 skills" />
                        </form>
                    </div>
                    {/* add extra input field dynamically */}
                    <div onClick={addNewSkills} className='flex justify-center items-center text-accent hover:text-primary cursor-pointer'>
                        <AiOutlinePlusCircle className='mr-2 text-xl '/>
                        <p className='text-lg'> Add Skills</p>
                    </div>
                    {/* button */}
                    <div className='flex justify-center'>
                        <div className='w-[80%] flex justify-around items-center mt-10'>
                            <button onClick={()=>navigate('/resume-builder/certifications')} className='relative editor-btn inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all group md:px-24 px-10 text-lg rounded-lg border-[1px] border-solid border-gray-400 text-black'>Back</button>
                            <button onClick={getValue}className='relative inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all bg-primary group md:px-24 px-10 text-lg rounded-lg text-white hover:bg-[#3ba6d4]'>Continue</button>
                        </div>
                    </div>
                </div>
                {/* Tips section */}
                <div className='md:w-[30%] hidden md:flex'>
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AdditionalSkills;