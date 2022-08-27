import React from 'react';
import img_1 from '../../../assets/Business_deals/bg_shape1.svg';
import img_2 from '../../../assets/Business_deals/bg_shape2.svg';
import img_3 from '../../../assets/Business_deals/template-step-01.svg';
import img_4 from '../../../assets/Business_deals/template-step-02.svg';
import img_5 from '../../../assets/Business_deals/template-step-03.svg';

const Guideline = () => {
    return (
        <section className='py-12 h-[80vh] flex justify-center items-center guidelineBackground'>
            <div className=' md:w-[70%] mx-auto  pt-6 px-6'>
                <div className='text-center pb-20 2xl:pb-32'>
                    <h1 className='text-4xl md:text-5xl font-bold pb-6 front-crimson'>Three Simple steps to Follow</h1>
                    <p className='md:text-lg text-md '>Read the instruction and make your resume or CV</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3  pb-20'>
                    <div className='mb-12 md:mb-0'>
                        <img className='mx-auto w-[160px] 2xl:w-[250px]' src={img_3} alt="" srcset="" />
                        <h1 className='text-center pt-4 pb-2 text-4xl text-accent'>Step 1</h1>
                        <p className='px-12 md:px-4 2xl:px-6 mx-auto text-md text-center'>Select a Template which you want to use for your Resume Or CV</p>
                    </div>
                    <div className='mb-16 md:mb-0'>
                        <img className='mx-auto w-[112px] 2xl:w-[175px]' src={img_4} alt="" srcset="" />
                        <h1 className='text-center pt-4 pb-2 text-4xl text-accent'>Step 2</h1>
                        <p className='px-12 md:px-4 2xl:px-6 mx-auto text-md text-center'>Edit template by giving information of Which Information need to add your Resume or CV</p>
                    </div>
                    <div>
                        <img className='mx-auto w-[98px] 2xl:w-[150px]' src={img_5} alt="" srcset="" />
                        <h1 className='text-center pt-4 pb-2 text-4xl text-accent'>Step 3</h1>
                        <p className='px-12 md:px-4 2xl:px-6 mx-auto text-md text-center'>After editing template you can download your Resume or CV by clicking Download Button</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Guideline;