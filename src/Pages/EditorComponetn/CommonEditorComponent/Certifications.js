import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import img1 from '../../../assets/certificationInstruction.png'

const Certifications = () => {
    return (
        <div className='mx-12 my-8'>
            <div className='flex'>
                {/* input section */}
                <div style={{width:"67%"}}>
                    <h1 style={{width:"70%"}} className='text-accent text-5xl font-bold'>Do you have any licenses or certifications?</h1>
                    <p>Enter your licenses or certifications one at a time.</p>
                    <form className='mt-12'>
                        <input type="text" placeholder="License/Certification #1" class="input input-bordered w-full max-w-xs md:max-w-lg mb-4" />
                        <input type="text" placeholder="License/Certification #2" class="input input-bordered w-full max-w-xs md:max-w-lg mb-4" />
                        <input type="text" placeholder="License/Certification #3" class="input input-bordered w-full max-w-xs md:max-w-lg mb-4" />
                    </form>
                    {/* add extra input field dynamically */}
                    <div className='flex items-center text-accent hover:text-primary cursor-pointer'>
                        <AiOutlinePlusCircle className='mr-2 text-xl '/>
                        <p> Add License / certifications</p>
                    </div>
                    <div style={{width:"90%"}} className='flex justify-around items-center mt-12'>
                        <button className='text-white text-lg hover:bg-accent w-52 py-2 rounded-full bg-secondary'>Back</button>
                        <button className='text-white text-lg hover:bg-accent w-52 py-2 rounded-full bg-secondary'>Continue</button>
                    </div>
                </div>
                {/* Tips section */}
                <div style={{width:"30%"}}>
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Certifications;