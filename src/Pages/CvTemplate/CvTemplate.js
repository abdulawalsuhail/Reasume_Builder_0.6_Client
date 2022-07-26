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
import step1 from '../../assets/CVSectionImages/step1.webp'
import step2 from '../../assets/CVSectionImages/step2.webp'
import step3 from '../../assets/CVSectionImages/step3.webp'
import step4 from '../../assets/CVSectionImages/step4.webp'
import professionalCV from '../../assets/CVSectionImages/professionalCV.webp'
import drag_drop from '../../assets/CVSectionImages/drag-drop.webp'
import contentSugest from '../../assets/CVSectionImages/contentSugest.webp'
import generate from '../../assets/CVSectionImages/generate.webp'
import importCV from '../../assets/CVSectionImages/importCV.webp'

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
            <div className='flex mt-24 justify-between mx-24 mb-16'>
                <div className='flex items-end'><img style={{width:"80px"}} src={left} alt="" /></div>
                <p className='text-center w-2/3'><br /><br /> CV Builder will help you create a CV to be proud of. The wizard packs modern templates that people remember. The CV tool guides you through every step of the process, so you can highlight your achievements, attitude, and personality. It’s easy. And, actually, fun! <br /><br />

                Plus,CV tool will encourage you to think beyond the obvious sections like education and work experience. You will build a CV that shows exactly what drives you and what you’re made of. <br /><br />

                CV Builder has helped users stand out even in companies such as Spotify, Tesla, Google, and many others. <br /><br />

                Take a look at all our CV templates, and learn more about in what situations each of them excels. <br /><br /></p>
                <div className='flex items-start'><img style={{width:"80px"}} src={right} alt="" /></div>
            </div>
            {/* Download cv in 4 steps */}
            <div className='bg-slate-100 p-12'>
                <h1 className='text-4xl font-bold mb-16'>Download your CV in 4 simple steps</h1>
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
            </div>
            {/* Learning curve */}
            <div className='bg-slate-50 pt-32'>
                <div className=' mx-32'>
                    <h1 className='text-4xl font-bold text-center pb-20'>A CV Builder with no learning curve:</h1>
                    <div class="hero">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <img src={professionalCV} class="max-w-sm rounded-lg" />
                            <div>
                            <h1 class="text-3xl">Professional CV templates for every industry</h1>
                            <p class="py-6 text-lg">You'll get to choose between 11 fully editable templates. You can pick one depending on the industry you work in, your level of experience, or the culture of the company you're applying to.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Drag and Drop CV builder */}
            <div className='bg-slate-50'>
                <div className='mx-32'>
                    <div class="hero">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <div className='md:mt-16 md:ml-12'>
                                <h1 class="text-3xl">Drag & drop CV builder</h1>
                                <p class="py-6 text-lg">Creating your CV doesn't feel like a tough job anymore. Our CV editor helps you make the best use of the space and choose what content to include. With the option to drag-and-drop sections, it's easy to rearrange the template and make it truly yours.</p>
                            </div>
                            <img src={drag_drop} class="max-w-sm rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Content Suggest */}
            <div className='bg-slate-50 pt-20'>
                <div className=' mx-32'>
                    <div class="hero">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <img src={contentSugest} class="max-w-sm rounded-lg" />
                            <div>
                            <h1 class="text-3xl">Content suggestions for a job-winning CV</h1>
                            <p class="py-6 text-lg">By analyzing your content, our CV maker shows actionable, contextual advice, based on what the experts say. You also get over 10 000 bullet suggestions for different jobs, which you can sort out by level of experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Generate your Cv in pdf or text */}
            <div className='bg-slate-50'>
                <div className='mx-32'>
                    <div class="hero">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <div className='md:mt-16 md:ml-12'>
                                <h1 class="text-3xl">Generate your CV in PDF or TXT</h1>
                                <p class="py-6 text-lg">You need your CV in a PDF format so that you keep the nice design you’ve just created. And, if you simply want to export the text, you can download your CV in a TXT format.</p>
                            </div>
                            <img src={generate} class="max-w-sm rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Import your old CV or LinkedIn profile */}
            <div className='bg-slate-50 pt-20 pb-16'>
                <div className=' mx-32'>
                    <div class="hero">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <img src={importCV} class="max-w-sm rounded-lg" />
                            <div>
                            <h1 class="text-3xl">Import your old CV or LinkedIn profile</h1>
                            <p class="py-6 text-lg">Starting from scratch can be intimidating, so we added the option to import your CV or your LinkedIn profile. The CV wizard will take care of extracting the content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CvTemplate;