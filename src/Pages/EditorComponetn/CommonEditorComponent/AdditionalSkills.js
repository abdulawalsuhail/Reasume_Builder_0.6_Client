import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import img1 from '../../../assets/additionalSkills.png'
const AdditionalSkills = () => {
    let number = 2;

    function addNewSkills() {
        number++;
        let newNode = document.createElement('input');
        newNode.classList.add('input');
        newNode.classList.add('input-bordered');
        newNode.classList.add('w-full');
        newNode.classList.add('mb-4');
        newNode.classList.add('h-14');
        newNode.setAttribute('type','text');
        newNode.setAttribute('placeholder', 'Skills');
        newNode.setAttribute('name', `skills_${number}`);

        let parentFrom = document.getElementById('skillsId');
        parentFrom.appendChild(newNode)
    }

    return (
        <div className='px-12 py-12 bg-[#f4f7f8]'>
            <div className='flex'>
                {/* input section */}
                <div className="w-[100%] md:w-[70%] text-center">
                    <h1 className='text-accent text-xl md:text-4xl font-bold'>Do you have any licenses or certifications?</h1>
                    <p className='text-slate-500 text-xs md:text-lg mt-2'>Enter your licenses or certifications one at a time.</p>
                    <div className='flex justify-center'>
                        <form id='skillsId' className='mt-12 w-[100%] md:w-[80%]'>
                            <input name='skills_1' type="text" placeholder="Skills" class="input input-bordered w-full mb-4 h-14" /><br />
                            <input name='skills_2' type="text" placeholder="Skills" class="input input-bordered w-full mb-4 h-14" /><br />
                            <input name='skills_3' type="text" placeholder="Skills" class="input input-bordered w-full mb-4 h-14" />
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
                            <button className='text-white text-lg hover:bg-accent rounded-xl bg-secondary w-[100px] md:w-[250px] py-2 md:py-3'>Back</button>
                            <button className='text-white text-lg hover:bg-accent rounded-xl bg-secondary w-[100px] md:w-[250px] py-2 md:py-3'>Continue</button>
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