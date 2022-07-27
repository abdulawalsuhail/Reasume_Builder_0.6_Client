import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import image from '../../assets/CVSectionImages/website banner image.png'
import brand_1 from '../../assets/CVSectionImages/tesla.webp'
import brand_2 from '../../assets/CVSectionImages/google.webp'
import brand_3 from '../../assets/CVSectionImages/spotify.webp'
import brand_4 from '../../assets/CVSectionImages/pinterest.webp'

const TemplateBanner = () => {
    return (
        <div style={{width:"94%"}} class="hero mx-auto">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={image} class="max-w-xl rounded-lg" />
                <div className=''>
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
    );
};

export default TemplateBanner;