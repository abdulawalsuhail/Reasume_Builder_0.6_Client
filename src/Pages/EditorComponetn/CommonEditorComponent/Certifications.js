import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import img1 from '../../../assets/certificationInstruction.png';

const Certifications = () => {
    const [number, setNumber] = useState(2);
    const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
    const navigate = useNavigate();
    const { _id } = useParams();
    // make dynamic input field
    function addNewCertification() {
        setNumber(number + 1);
        let newNode = document.createElement('input');
        newNode.classList.add('input', 'input-bordered', 'w-full', 'mb-4', 'h-14', 'cer');
        newNode.setAttribute('type','text');
        newNode.setAttribute('placeholder', 'License/Certificate');
        newNode.setAttribute('name', `certificate_${number}`);
        
        let parentFrom = document.getElementById('certificateId');
        parentFrom.appendChild(newNode)
    }

    // Get input field values and store
    let str = {
            name: "License/ Certifications",
            value: []
    };// store input values
    const getValue = () => {
        str.value = [];
        const certifications = document.getElementsByClassName("cer");
        for (let e of certifications) {
            str.value.push(e.value);
        }
        
        setUsersTemplateInfo({...usersTemplateInfo,certifications:str});

        console.log(usersTemplateInfo); 
        navigate(`/resume-builder/${_id}/additional-skills`);
    }
    console.log(usersTemplateInfo); 

    
    return (
        <div className = 'px-12 py-12 bg-[#f4f7f8]' >
            <div className='md:flex'>
                {/* input section */}
                <div className="w-[100%] md:w-[70%] text-center">
                    <h1 className='text-accent text-xl md:text-4xl font-bold'>Do you have any licenses or certifications?</h1>
                    <p className='text-slate-500 text-xs md:text-lg mt-2'>Enter your licenses or certifications one at a time.</p>
                    <div className='flex justify-center'>
                        <form id='certificateId' className='mt-12 w-[100%] md:w-[80%]'>
                            <input name='certificate_1' type="text" placeholder="License/Certification" class="input input-bordered w-full mb-4 h-14 cer" /><br />
                            <input name='certificate_2' type="text" placeholder="License/Certification" class="input input-bordered w-full mb-4 h-14 cer" /><br />
                            <input name='certificate_3' type="text" placeholder="License/Certification" class="input input-bordered w-full mb-4 h-14 cer" />
                        </form>
                    </div>
                    {/* add extra input field dynamically */}
                    <div onClick={addNewCertification} className='flex justify-center items-center text-accent hover:text-primary cursor-pointer'>
                        <AiOutlinePlusCircle className='mr-2 text-xl '/>
                        <p className='text-lg'> Add License / certifications</p>
                    </div>
                    {/* button
                    <div className='flex justify-center'>
                        <div className='md:w-[50%] w-[100%] flex justify-around items-center mt-10'>
                            <button onClick={() => navigate(`/resume-builder/${_id}/editor-education`)} className='relative editor-btn inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all group md:px-16 px-10 text-lg rounded-lg border-[1px] border-solid border-gray-400 text-black'>Back</button>
                            
                            <button onClick={getValue} className='relative inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all bg-primary group md:px-16 px-10 text-lg rounded-lg text-white hover:bg-[#3ba6d4]'>Save and continue</button>
                        </div>
                    </div> */}

                    {/* Button */}
                    <div className="flex justify-center gap-10 mt-6">
                        <a
                        onClick={() =>
                            navigate(`/resume-builder/${_id}/editor-education`)
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
                <div className="md:w-[30%] hidden md:flex">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Certifications;