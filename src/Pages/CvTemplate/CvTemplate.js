import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import image from '../../assets/CVSectionImages/website banner image.png'
import brand_1 from '../../assets/CVSectionImages/tesla.webp'
import brand_2 from '../../assets/CVSectionImages/google.webp'
import brand_3 from '../../assets/CVSectionImages/spotify.webp'
import brand_4 from '../../assets/CVSectionImages/pinterest.webp'
import Cv from '../Home/Templates/Cv';
import right from '../../assets/CVSectionImages/rightTick.webp'
import left from '../../assets/CVSectionImages/leftTick.webp'

const CvTemplate = () => {
    return (
        <div className='md:pt-6 text-gray-700'>
            <div style={{width:"94%"}} class="hero mx-auto">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} class="max-w-xl rounded-lg" />
                    <div className=''>
                        <h1 class="text-5xl font-bold">Online CV Maker</h1>
                        <p class="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae, voluptatum blanditiis maxime vero fugiat laborum ex provident dignissimos temporibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quibusdam.</p>
                        <button class="btn btn-primary btn-md px-8 text-white">Get Started</button>
                        <div className='flex mt-8'>
                            <div className='flex'>
                                < AiFillStar className='text-blue-300 text-xl' />
                                < AiFillStar className='text-blue-300 text-xl' />
                                < AiFillStar className='text-blue-300 text-xl' />
                                < AiFillStar className='text-blue-300 text-xl' />
                                < AiFillStar className='text-blue-300 text-xl'/>
                            </div>
                            <div className='flex justify-center items-center ml-16'>
                                <AiFillStar className='text-blue-700 text-sm inline-block' />
                                <p>REVIEWS<span>.io</span></p>
                            </div>
                        </div>
                        <p className='text-lg mt-1 w-1/2'>1,195 happy customers shared their experience.</p>
                        <p className='text-sm mt-8 w-1/2'>Our CVs get people hired at top companies:</p>
                        <div className='flex justify-between items-center mt-2'>
                            <img style={{width:"100px"}} src={brand_1} alt="" />
                            <img style={{width:"80px"}} src={brand_2} alt="" />
                            <img style={{width:"100px"}} src={brand_3} alt="" />
                            <img style={{width:"90px"}} src={brand_4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Cv section */}
            <div>
                <h1 className='text-center text-4xl font-bold mt-20 pb-12'>Create a CV online. First, select a template:</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-8">
                    <Cv></Cv>
                </div>
            </div>
            <div className='flex mt-24 justify-between mx-24'>
                <div className='flex items-end'><img style={{width:"80px"}} src={left} alt="" /></div>
                <p className='text-center w-2/3'><br /><br /> CV Builder will help you create a CV to be proud of. The wizard packs modern templates that people remember. The CV tool guides you through every step of the process, so you can highlight your achievements, attitude, and personality. It’s easy. And, actually, fun! <br /><br />

                Plus,CV tool will encourage you to think beyond the obvious sections like education and work experience. You will build a CV that shows exactly what drives you and what you’re made of. <br /><br />

                CV Builder has helped users stand out even in companies such as Spotify, Tesla, Google, and many others. <br /><br />

                Take a look at all our CV templates, and learn more about in what situations each of them excels. <br /><br /></p>
                <div className='flex items-start'><img style={{width:"80px"}} src={right} alt="" /></div>
            </div>
        </div>
    );
};

export default CvTemplate;