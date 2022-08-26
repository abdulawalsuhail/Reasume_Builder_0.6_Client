import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import img1 from '../../../assets/additionalSkills.png';

const SocialNetwork = () => {

    let number = 2;
    const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
    const navigate = useNavigate();
    const { _id } = useParams();
    

    // Get input field values and store
    let str = {
            name: "Social Links",
            value: {}
    };// store input values
    const getValue = () => {
        str.value = {};
        str.value.linkedIn = document.getElementById("linkedIn")?.value;
        str.value.github = document.getElementById("github")?.value;
        str.value.portfolio = document.getElementById("portfolio")?.value;
        
        setUsersTemplateInfo({...usersTemplateInfo, socialLinks:str})
        navigate(`/resume-builder/${_id}/editor-experience`)
        console.log(usersTemplateInfo); 
    }
    console.log(usersTemplateInfo);

    return (
        <div className='px-12 py-12 bg-[#f4f7f8]'>
            <div className='flex'>
                {/* input section */}
                <div className="w-[100%] md:w-[70%] text-center">
                    <h1 className='text-accent text-xl md:text-4xl font-bold'>Do you have any Social Connections?</h1>
                    <p className='text-slate-500 text-xs md:text-lg mt-2'>Enter your social connections link one at a time.</p>
                    <div className='flex justify-center'>
                        <form id='skillsId' className='mt-12 w-[100%] md:w-[80%]'>
                            <input id='linkedIn' name='linkedIn' type="text" placeholder="LinkedIn Link" class="input input-bordered w-full mb-4 h-14 skills" /><br />
                            <input id='github' name='github' type="text" placeholder="Github Link" class="input input-bordered w-full mb-4 h-14 skills" /><br />
                            <input id='portfolio' name='portfolio' type="text" placeholder="Personal Website Link" class="input input-bordered w-full mb-4 h-14 skills" />
                        </form>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center gap-10 mt-6">
                        <a
                        onClick={() =>
                            navigate(`/resume-builder/${_id}/`)
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
                {/* Tips section */}
                <div className='md:w-[30%] hidden md:flex'>
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SocialNetwork;