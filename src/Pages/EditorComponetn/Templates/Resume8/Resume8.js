import React from 'react';
import './Resume8.css'
import { AiTwotonePhone } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { BsLinkedin } from "react-icons/bs"
import { MdLocationCity } from "react-icons/md"
import { BsGithub } from "react-icons/bs"

const Resume8 = () => {

    return (
        <div className='Resume8body'>
            <div className='resume8 bg-white mx-auto text-left'>
                <div className='bg-slate-100'>
                    <div className='p-10'>
                        <h1 className='text-6xl'>MD. ABU TAHER SARKER</h1>
                        <h1 className='text-2xl mt-2'>W E B D E V E L O P E R</h1>

                    </div>
                </div>
                <div className='flex p-10'>
                    <div className='w-96'>
                        <div className='mb-5 w-1.6'></div>
                        <ul>
                            <li className='flex gap-2'>
                                <div><AiTwotonePhone></AiTwotonePhone></div>
                                <div className=''>+880 1749-531677</div>
                            </li>
                            <li className='flex gap-2'>
                                <div><MdEmail></MdEmail></div>
                                <div className=''>ashiksarker89@gmail.com</div>
                            </li>
                            <li className='flex gap-2'>
                                <div><MdLocationCity></MdLocationCity></div>
                                <div className=''>Dhanmondi 15/A, Dhaka City</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='flex gap-2'>
                                <div><BsGithub></BsGithub></div>
                                <div className=''>LinkedIn Profile</div>
                            </li>
                            <li className='flex gap-2'>
                                <div><BsLinkedin></BsLinkedin></div>
                                <div className=''>GitHub Profile</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='bg-black w-full h-px'></div>
                <div className='container8 flex justify-center'>

                    <div className='flex'>
                        <div className='w-1/7 h-auto p-10'>

                            <div>
                                <h1 className='uppercase tracking-widest text-lg font-bold'>SKILLS</h1>
                                <hr className='mb-5 w-1/6'></hr>
                                <li className=''>Web Design & Development</li>
                                <li className=''>Front End Developement</li>
                                <li className=''>Back End Developement</li>
                                <li className=''>React Js</li>
                                <li className=''>Node Express</li>
                                <li className=''>MongoDB</li>
                                <li className=''>Firebase</li>
                                <li className=''>Stripe</li>
                                <li className=''>JWT</li>
                                <li className=''>Rest API</li>
                                <li className=''>Heroku</li>
                                <li className=''>ES6</li>
                                <li className=''>C Programming</li>
                                <li className=''>Data Structure</li>
                            </div>
                            <div>
                                <hr className='my-5'></hr>
                                <h1 className='uppercase tracking-widest text-lg font-bold'>Education</h1>
                                <hr className='mb-5 w-1/6'></hr>
                                <h1 className='text-sm font-semibold tracking-wider'>BACHELOR OF CSE</h1>
                                <h1 className='my-2'>United International University</h1>
                                <h1 className=''>2014 - 2019</h1>
                                <h1 className='text-sm font-semibold tracking-wider mt-5'>SECONDARY SCHOOL</h1>
                                <h1 className='my-2'>Rajshahi Gov. Model School & College</h1>
                                <h1 className=''>2010 - 2012</h1>
                            </div>

                        </div>
                        
                    </div>
                    
                    <div className='bg-black w-px'></div>

                    <div className='right-site8 p-10'>
                        <div>
                            <h1 className='font-bold text-lg'>P R O J E C T S</h1>
                            <h1 className='font-thin'>Tools Manufacturer</h1>
                            <div className='flex gap-3'>
                                <h1>Live Site</h1>
                                <h1>Client Code</h1>
                                <h1>Server Code</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className='mt-5 font-bold'>Features and Functionality</h1>
                            <li>Authentication and Authorization</li>
                            <li>Users can purchase Tools and complete payment</li>
                            <li>Admin can create and manage Products also handle orders and
                                shipment</li>
                            <li>Make unique UI and simple UX</li>
                        </div>
                        <div>
                            <h1 className='mt-5 font-bold'>Technology Used</h1>
                            <div className='flex gap-2'>
                                <h1 className='font-bold'>Client Side:</h1>
                                <p>ReactJs, React Router, DaisyUI, Tailwind, Firebase,
                                    Firebase authentication hooks, React Hook Form, React Query.</p>
                            </div>
                            <div className='flex gap-2'>
                                <h1 className='font-bold'>Server Side:</h1>
                                <p>Side: NodeJs, ExpressJs, MongoDB, Heroku deploy,
                                    JWT
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-thin'>Warehouse Management System</h1>
                            <div className='flex gap-3'>
                                <h1>Live Site</h1>
                                <h1>Client Code</h1>
                                <h1>Server Code</h1>
                            </div>
                            <div>
                                <h1 className='mt-5 font-bold'>Features and Functionality</h1>
                                <li>Authentication and Authorization</li>
                                <li>Users can purchase Tools and complete payment</li>
                                <li>Admin can create and manage Products also handle orders and
                                    shipment</li>
                                <li>Make unique UI and simple UX</li>
                            </div>

                        </div>
                        <div>
                            <h1 className='mt-5 font-bold'>Technology Used</h1>
                            <div className='flex gap-2'>
                                <h1 className='font-bold'>Client Side:</h1>
                                <p>ReactJs, React Router, DaisyUI, Tailwind, Firebase,
                                    Firebase authentication hooks, React Hook Form, React Query.</p>
                            </div>
                            <div className='flex gap-2'>
                                <h1 className='font-bold'>Server Side:</h1>
                                <p>Side: NodeJs, ExpressJs, MongoDB, Heroku deploy,
                                    JWT
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Resume8;