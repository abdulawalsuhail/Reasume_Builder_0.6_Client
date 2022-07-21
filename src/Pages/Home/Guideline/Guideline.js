import React from 'react';
import img_1 from '../../../assets/Business_deals/bg_shape1.svg';
import img_2 from '../../../assets/Business_deals/bg_shape2.svg';

import img_3 from '../../../assets/Business_deals/template-step-01.svg'
import img_4 from '../../../assets/Business_deals/template-step-02.svg'
import img_5 from '../../../assets/Business_deals/template-step-03.svg'

const Guideline = () => {
    return (
        <div className='bg-[#f4f7f8]'>
            <div className='flex'>
                <img className='w-1/2' src={img_1} alt="" />
                <img className='w-1/2' src={img_2} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-16 pb-28'>
                <div>
                    <img className='mx-auto' style={{width:"60%"}} src={img_3} alt="" srcset="" />
                    <h1 className='text-center pt-4 pb-2 text-4xl font-semibold text-secondary'>Step 1</h1>
                    <p className='px-6 mx-auto text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, cumque?</p>
                </div>
                <div>
                    <img className='mx-auto' style={{width:"50%"}} src={img_4} alt="" srcset="" />
                    <h1 className='text-center pt-4 pb-2 text-4xl font-semibold text-secondary'>Step 2</h1>
                    <p className='px-6 mx-auto text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, cumque?</p>
                </div>
                <div>
                    <img className='mx-auto' style={{width:"40%"}} src={img_5} alt="" srcset="" />
                    <h1 className='text-center pt-4 pb-2 text-4xl font-semibold text-secondary'>Step 3</h1>
                    <p className='px-6 mx-auto text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, cumque?</p>
                </div>
                
            </div>
        </div>
    );
};

export default Guideline;