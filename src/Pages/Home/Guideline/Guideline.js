import React from 'react';
import img_1 from '../../../assets/Business_deals/bg_shape1.svg';
import img_2 from '../../../assets/Business_deals/bg_shape2.svg';

const Guideline = () => {
    return (
        <div className='bg-[#f4f7f8] py-16'>
            <div className='flex'>
                <img className='w-1/2' src={img_1} alt="" />
                <img className='w-1/2' src={img_2} alt="" />
            </div>
        </div>
    );
};

export default Guideline;