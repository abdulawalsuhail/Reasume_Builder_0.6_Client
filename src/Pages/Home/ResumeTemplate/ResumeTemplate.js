import React from 'react';
import './ResumeTemplate.css'
import template_1 from '../../../assets/demo1.png'
import template_2 from '../../../assets/demo2.png'

const ResumeTemplate = () => {
    return (
        <div className = 'pt-32 pb-8 bg-[#f4f7f8]' >
            {/* menu section */}
            <div class="border md:1/2 border-blue-300 md:rounded-full mx-auto">
                <div class="">
                    <ul class="flex flex-col md:flex-row justify-around p-4 md:py-1">
                        <li className='py-2 px-4 cursor-pointer hover:bg-primary hover:text-white font-bold rounded-full text-primary text-center'><a>Resume Templates</a></li>
                        <li className='py-2 px-4 cursor-pointer hover:bg-primary hover:text-white font-bold rounded-full text-primary text-center'><a>CV Templates</a></li>
                        <li className='py-2 px-4 cursor-pointer hover:bg-primary hover:text-white font-bold rounded-full text-primary text-center'><a>Cover Letter Templates</a></li>
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