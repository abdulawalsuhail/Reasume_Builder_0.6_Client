import React from 'react';
import step1 from '../../assets/CVSectionImages/step1.webp'
import step2 from '../../assets/CVSectionImages/step2.webp'
import step3 from '../../assets/CVSectionImages/step3.webp'
import step4 from '../../assets/CVSectionImages/step4.webp'

const DownloadSteps = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-4'>
            <div className='border-red-200'>
                <img style={{width:"80%"}} className="mx-auto" src={step1} alt="" />
                <div className='bg-blue-200 flex justify-center items-center mx-auto my-4 text-3xl font-bold w-12 h-12 rounded-full'><p>1</p></div>
                <p className='text-center text-lg'>Select a template</p>
            </div>
            <div className='border-red-200'>
                <img style={{width:"96%"}} className="mx-auto" src={step2} alt="" />
                <div className='bg-blue-200 flex justify-center items-center mx-auto my-4 text-3xl font-bold mx-auto w-12 h-12 rounded-full'><p>2</p></div>
                <p className='text-center text-lg'>Fill in your details</p>
            </div>
            <div className='border-red-200'>
                <img style={{width:"74%"}} className="mx-auto" src={step3} alt="" />
                <div className='bg-blue-200 flex justify-center items-center mx-auto my-4 text-3xl font-bold mx-auto w-12 h-12 rounded-full'><p>3</p></div>
                <p className='text-center text-lg'>Customize your design</p>
            </div>
            <div className='border-red-200'>
                <img style={{width:"83%"}} className="mx-auto" src={step4} alt="" />
                <div className='bg-blue-200 flex justify-center items-center mx-auto my-4 text-3xl font-bold mx-auto w-12 h-12 rounded-full'><p>4</p></div>
                <p className='text-center text-lg'>Tailor, Check for Errors, and Download</p>
            </div>
        </div>
    );
};

export default DownloadSteps;