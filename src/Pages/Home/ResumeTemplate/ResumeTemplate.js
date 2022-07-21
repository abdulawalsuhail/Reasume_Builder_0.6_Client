import React from 'react';
import template_1 from '../../../assets/demo1.png';
import template_2 from '../../../assets/demo2.png';
import './ResumeTemplate.css';

const ResumeTemplate = () => {
    return (
        < div className = 'pt-32 pb-8 bg-[#f4f7f8]' >
            {/* menu section */}
            <div style={{maxWidth:"500px"}} class="border border-blue-300 rounded-full md:mx-auto mx-8">
                <div class="">
                    <ul class="flex justify-around md:py-1">
                        <li className='py-2 px-4 cursor-pointer hover:bg-primary hover:text-white font-bold rounded-full text-primary'><a>Resume Templates</a></li>
                        <li className='py-2 px-4 cursor-pointer hover:bg-primary hover:text-white font-bold rounded-full text-primary'><a>CV Templates</a></li>
                        <li className='py-2 px-4 cursor-pointer hover:bg-primary hover:text-white font-bold rounded-full text-primary'><a>Cover Letter Templates</a></li>
                    </ul>
                </div>
            </div>
            {/* template section */}
            <div className='mx-12 my-12 '>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    <div style={{letterSpacing:"3px"}} className='hover:drop-shadow-[0_20px_15px_rgba(65,105,144,.6)]'>
                        <h1 className='mb-4 text-md text-primary mt-1'>Professional</h1>
                        <img className='w-full' src={template_1} alt="" />
                    </div>
                    <div style={{letterSpacing:"3px"}} className='hover:drop-shadow-[0_20px_15px_rgba(65,105,144,.6)]'>
                        <h1 className='mb-4 text-md text-primary mt-1'>Professional</h1>
                        <img className='w-full' src={template_2} alt="" />
                    </div>
                    <div style={{letterSpacing:"3px"}} className='hover:drop-shadow-[0_20px_15px_rgba(65,105,144,.6)]'>
                        <h1 className='mb-4 text-md text-primary mt-1'>Professional</h1>
                        <img className='w-full' src={template_1} alt="" />
                    </div>
                    <div style={{letterSpacing:"3px"}} className='hover:drop-shadow-[0_20px_15px_rgba(65,105,144,.6)]'>
                        <h1 className='mb-4 text-md text-primary mt-1'>Professional</h1>
                        <img className='w-full' src={template_2} alt="" />
                    </div>
                    <div style={{letterSpacing:"3px"}} className='hover:drop-shadow-[0_20px_15px_rgba(65,105,144,.6)]'>
                        <h1 className='mb-4 text-md text-primary mt-1'>Professional</h1>
                        <img className='w-full' src={template_1} alt="" />
                    </div>
                    <div style={{letterSpacing:"3px"}} className='hover:drop-shadow-[0_20px_15px_rgba(65,105,144,.6)]'>
                        <h1 className='mb-4 text-md text-primary mt-1'>Professional</h1>
                        <img className='w-full' src={template_2} alt="" />
                    </div>
                    <div style={{ letterSpacing: "3px" }} className='hover:drop-shadow-[0_20px_15px_rgba(65,105,144,.6)]'>
                        <h1 className='mb-4 text-md text-primary mt-1'>Professional</h1>
                        <img className='w-full' src={template_1} alt="" />
                    </div>
                    <div style={{ letterSpacing: "3px" }} className='hover:drop-shadow-[0_20px_15px_rgba(65,105,144,.6)]'>
                        <h1 className='mb-4 text-md text-primary mt-1'>Professional</h1>
                        <img className='w-full' src={template_2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeTemplate;