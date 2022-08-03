import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import img1 from '../../../assets/language.webp'

const Languages = () => {
    return (
        <div className='mx-12 my-8'>
            <div className='flex'>
                {/* input section */}
                <div style={{width:"67%"}}>
                    <h1 className='text-accent text-4xl font-bold'>Add Languages which you are comfortable</h1>
                    <p className='text-slate-500 mt-2 text-lg'>Enter your skilled languages</p>
                    <form className='mt-12'>
                        <input type="text" placeholder="Language #1" class="input input-bordered w-full max-w-xs md:max-w-lg mb-4" />
                        <input type="text" placeholder="Language #2" class="input input-bordered w-full max-w-xs md:max-w-lg mb-4" />
                    </form>
                    {/* add extra input field dynamically */}
                    <div className='flex items-center text-accent hover:text-primary cursor-pointer'>
                        <AiOutlinePlusCircle className='mr-2 text-xl '/>
                        <p> Add Language</p>
                    </div>
                    <div style={{width:"90%"}} className='flex justify-around items-center mt-10'>
                        <button className='text-white text-lg hover:bg-accent w-52 py-3 rounded-full bg-secondary'>Back</button>
                        <button className='text-white text-lg hover:bg-accent w-52 py-3 rounded-full bg-secondary'>Continue</button>
                    </div>
                </div>
                {/* Tips section */}
                <div style={{ width: "30%" }}>
                    <div>
                        <img src={img1} style={{width:"100%"}} alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl my-3'>How to set Languages</h1>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus eius magnam qui eaque adipisci, facere asperiores laboriosam quae suscipit sub.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Languages;