import React from 'react';
// import './FAQ.css'
import Image1 from '../../assets/FAQ/faq01.png'
import Image2 from '../../assets/FAQ/faq02.png'
import Image3 from '../../assets/FAQ/faq03.png'
import Image4 from '../../assets/FAQ/faq04.png'
import Image5 from '../../assets/FAQ/faq05.png'
import Image6 from '../../assets/FAQ/faq06.png'
import Image7 from '../../assets/FAQ/faq07.png'
 
const FAQ = () => {
 
    return (
        <div className='mt-6'>
            <h1 className='text-center text-4xl font-bold py-4 poppins-b'>WritoRcc FAQ.</h1>
            <h1 className='bg-blue-800 w-24 h-2 mx-auto rounded-lg'></h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 w-10/12 m-auto mt-5'>
                
                <div className=''>
                    <h1 className='text-3xl text-blue-800 poppins-b'>Why should I use a Writo Rcc?</h1>
                    <div className='poppins-t'>
                        <p className='mt-4'>Using a resume builder makes the process of creating a resume significantly faster and easier. Ever tried building your resume with Word?</p>
                        <p className='mt-2'>The whole process is a huge pain – you make a TINY change to your resume, and the entire resume layout gets completely messed up.</p>
                        <p className='mt-2'>With a resume builder, you don’t have to worry about the nitty gritty of resume creation, like font selection, layout, formatting, etc.</p>
                        <p className='mt-2'>All you have to do is pick a resume template, fill it in, and then you’re ready to start applying for jobs!</p>
                    </div>
                </div>
                <div className='m-auto'>
                    <img className='w-60' src={Image1} alt=""/>
                </div>
            </div>
            {/* <div className='bg-black w-4/5 h-px m-auto mt-4'></div> */}
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 w-10/12 m-auto mt-5'>
                <div className='m-auto'>
                    <img className='w-60' src={Image2} alt=""/>
                </div>
                <div className=''>
                    <h1 className='text-3xl text-blue-800 poppins-b'>What is the best resume builder?</h1>
                    <div className='poppins-t'>
                        <p className='mt-4'>Over the past 7 years, we’ve been working hard to make Novorésumé the best resume builder out there.</p>
                        <p className='mt-4'>And we’d say we succeeded! Here’s what sets us apart from the rest of the competition:</p>
                        <div className='mt-2'>
                            <div className='flex items-center gap-2'>
                            <div className='bg-black w-2 h-2 rounded-full'></div>
                                <h2 className='text-lg font-bold'>Easy to Use -</h2>
                            </div>
                            <p>Our builder is very easy to use, even if you're not too tech-friendly.</p>
                        </div>
                        <div className='mt-2'>
                            <div className='flex items-center gap-2'>
                            <div className='bg-black w-2 h-2 rounded-full'></div>
                                <h2 className='text-lg font-bold'>Get Started in under 5 Minutes -</h2>
                            </div>
                            <p>Just pick one of our resume templates, and you're good to go!</p>
                        </div>
                        <div className='mt-2'>
                            <div className='flex items-center gap-2'>
                            <div className='bg-black w-2 h-2 rounded-full'></div>
                                <h2 className='text-lg font-bold'>It's 100% free -</h2>
                            </div>
                            <p>Some resume builders out there pretend to be free… and then they hit you with a paywall once you’re done writing your resume! We don’t do that. Our builder will instantly notify you if you’re using any of our premium features.</p>
                        </div>
                        <div className='mt-2'>
                            <div className='flex items-center gap-2'>
                            <div className='bg-black w-2 h-2 rounded-full'></div>
                                <h2 className='text-lg font-bold'>Cover Letter Builder -</h2>
                            </div>
                            <p> If you’re using Novorésumé Premium, you gain access to our cover letter builder for free (including matching cover letter templates).</p>
                        </div>
                        <div className='mt-2'>
                            <div className='flex items-center gap-2'>
                            <div className='bg-black w-2 h-2 rounded-full'></div>
                                <h2 className='text-lg font-bold'>Tons of Customization and Design Options -</h2>
                            </div>
                            <p>Our builder offers a ton of customization. You can make changes to the layout, color schemes, and much more.</p>
                        </div>
                        <div className='mt-2'>
                            <div className='flex items-center gap-2'>
                            <div className='bg-black w-2 h-2 rounded-full'></div>
                                <h2 className='text-lg font-bold'>ATS-Friendly Resume Templates -</h2>
                            </div>
                            <p>Our resume templates are built on top of some of the most popular applicant tracking systems out there. Meaning, your resume won't automatically get rejected by any ATS.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='bg-black w-4/5 h-px m-auto mt-4'></div> */}
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 w-10/12 m-auto mt-5'>
                
                <div className=''>
                    <h1 className='text-3xl text-blue-800 poppins-b'>Is this a completely free Resume CV and also Cover Letter?</h1>
                    <div className='poppins-t'>
                        <p className='mt-4'>Yes, Novorésumé is a 100% free resume builder.</p>
                        <p className='mt-2'>If you’re on a budget, you can use it to create your resume completely free of charge. And no, unlike some other resume builders out there, we don’t hit you with a paywall once you’ve completed your resume.</p>
                        <p className='mt-2'>If you use any of our premium features, the software will let you know about it. It will then ask if you did it accidentally, or if you would like to upgrade to Novorésumé Premium. You're in control!</p>
                    </div>
                </div>
                <div className='m-auto'>
                    <img className='w-60' src={Image3} alt=""/>
                </div>
            </div>
            {/* <div className='bg-black w-4/5 h-px m-auto mt-4'></div> */}
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 w-10/12 m-auto mt-5'>
                <div className='m-auto'>
                    <img className='w-60' src={Image4} alt=""/>
                </div>
                <div className=''>
                    <h1 className='text-3xl text-blue-800 poppins-b'>What is a Resume?</h1>
                    <div className='poppins-t'>
                        <p className='mt-4'>A resume (also known as a CV, or curriculum vitae) is a 1-2 page document that summarizes your work experience and career history.</p>
                        <p className='mt-2'>It usually includes information about the following:</p>
                        <li>Your work history</li>
                        <li>Educational background</li>
                        <li>Achievements</li>
                        <li>Contact information</li>
                        <li>Resume summary or resume objective</li>
                    </div>
                </div>
            </div>
            {/* <div className='bg-black w-4/5 h-px m-auto mt-4'></div> */}
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 w-10/12 m-auto mt-5'>
                
                <div className=''>
                    <h1 className='text-3xl text-blue-800 poppins-b'>What's the difference between a CV and a resume?</h1>
                    <div className='poppins-t'>
                        <p className='mt-4'>In the EU, the words "CV" and "resume" are used interchangeably</p>
                        <p className='mt-2'>In the United States, however, a resume is a document you use to apply for jobs, while a CV is mainly used by academics.</p>
                        <p className='mt-2'>Want to learn more? Check out our article on the differences between CVs and resumes.</p>
                    </div>
                </div>
                <div className='m-auto'>
                    <img className='w-60' src={Image5} alt=""/>
                </div>
            </div>
            {/* <div className='bg-black w-4/5 h-px m-auto mt-4'></div> */}
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 w-10/12 m-auto mt-5'>
                <div className='m-auto'>
                    <img className='w-60' src={Image6} alt=""/>
                </div>
                <div className=''>
                    <h1 className='text-3xl text-blue-800 poppins-b'>How can I create my resume?</h1>
                    <div className='poppins-t'>
                        <p className='mt-4'>Making a resume with Novorésumé is very straightforward.</p>
                        <p className='mt-2'>Just pick one of our professional resume templates.</p>
                        <p className='mt-2'>Then, you’ll be forwarded to our resume builder, where all you have to do is fill in your resume content!</p>
                    </div>
                </div>
            </div>
            {/* <div className='bg-black w-4/5 h-px m-auto mt-4'></div> */}
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 w-10/12 m-auto mt-5'>
                
                <div className=''>
                    <h1 className='text-3xl text-blue-800 poppins-b'>What should a resume include?</h1>
                    <div className='poppins-t'>
                        <p className='mt-4'>The must-have contents in your resume include the following sections:</p>
                        <li>Work Experience</li>
                        <li>Educational Background</li>
                        <li>Contact Information</li>
                        <li>Resume summary or Resume Objective</li>
                        <p className='mt-4'>The optional ones are:</p>
                        <li>Hobbies & Interests</li>
                        <li>Skills</li>
                        <li>Volunteering Experience</li>
                    </div>
                </div>
                <div className='m-auto'>
                    <img className='w-60' src={Image7} alt=""/>
                </div>
            </div>
            {/* <div className='bg-black w-4/5 h-px m-auto mt-4'></div> */}
        </div>
    );
};
 
export default FAQ;
