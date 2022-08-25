import React from 'react';
import './Resume8.css'
import { AiTwotonePhone } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { BsLinkedin } from "react-icons/bs"
import { MdLocationCity } from "react-icons/md"
import { BsGithub } from "react-icons/bs"
import { useOutletContext } from 'react-router-dom';

const Resume8 = () => {
    const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
    console.log(usersTemplateInfo);
    return (
        <div className='Resume8body'>
            <div className='resume8 bg-white mx-auto text-left'>
                <div className='bg-slate-100'>
                    <div className='p-10'>
                        <h1 className='text-6xl'>{usersTemplateInfo?.contactDetails?.value?.firstName} {usersTemplateInfo?.contactDetails?.value?.lastName}</h1>
                        <h1 style={{letterSpacing:"4px"}} className='text-2xl mt-2 uppercase'>{usersTemplateInfo?.contactDetails?.value?.jobTitle}</h1>

                    </div>
                </div>
                <div className='flex items-center p-10'>
                    <div className='w-96'>
                        <div className='mb-5 w-1.6'></div>
                        <ul>
                            <li className='flex gap-2'>
                                {
                                    usersTemplateInfo?.contactDetails?.value?.email
                                    ? 
                                    <>
                                        <div className='flex items-center gap-2'>
                                            <div><AiTwotonePhone></AiTwotonePhone></div>
                                            <div className=''>
                                                {usersTemplateInfo?.contactDetails?.value?.phoneNo}
                                            </div>
                                        </div>
                                    </>
                                    : ""
                                }
                            </li>
                            <li className='flex gap-2'>
                                {
                                    usersTemplateInfo?.contactDetails?.value?.email
                                    ? 
                                    <>
                                        <div className='flex items-center gap-2'>
                                            <div><MdEmail></MdEmail></div>
                                            <div className=''>
                                                {usersTemplateInfo?.contactDetails?.value?.email}
                                            </div>
                                        </div>
                                    </>
                                    : ""
                                }
                            </li>
                            <li className='flex gap-2'>
                                {
                                    usersTemplateInfo?.contactDetails?.value?.country
                                    ? 
                                    <>
                                        <div className='flex items-center gap-2'>
                                            <div><MdLocationCity></MdLocationCity></div>
                                            <div className=''>
                                                {usersTemplateInfo?.contactDetails?.value?.country}, 
                                                {usersTemplateInfo?.contactDetails?.value?.city}, 
                                                {usersTemplateInfo?.contactDetails?.value?.state}, 
                                                {usersTemplateInfo?.contactDetails?.value?.zipCode}
                                            </div>
                                        </div>
                                    </>
                                    : ""
                                }
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='flex gap-2'>
                                {
                                    usersTemplateInfo?.contactDetails?.value?.email
                                    ? 
                                    <>
                                        <div className='flex items-center gap-2'>
                                            <div><BsGithub></BsGithub></div>
                                            <div className=''>GitHub Profile</div>
                                        </div>
                                    </>
                                    : ""
                                }
                            </li>
                            <li className='flex gap-2'>
                                {
                                    usersTemplateInfo?.contactDetails?.value?.email
                                    ? 
                                    <>
                                        <div className='flex items-center gap-2'>
                                            <div><BsLinkedin></BsLinkedin></div>
                                            <div className=''>LinkedIn Profile</div>
                                        </div>
                                    </>
                                    : ""
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='bg-black w-full h-px'></div>
                <div className='container8 flex justify-center'>

                    <div className='flex'>
                        <div className='w-1/7 h-auto p-10'>

                            <div>
                                <h1 className='uppercase tracking-widest text-lg font-bold'>
                                    {
                                        usersTemplateInfo?.skills?.name
                                    }
                                </h1>
                                <hr className='mb-5 w-1/6'></hr>
                                {
                                    usersTemplateInfo?.skills?.value?.map(skill => {
                                         return <li className=''>{skill}</li>
                                    })
                                }
                            </div>
                            <div>
                                <hr className='my-5'></hr>
                                <h1 className='uppercase tracking-widest text-lg font-bold'>
                                    {
                                        usersTemplateInfo?.educationsDetails?.name
                                    }
                                </h1>
                                <hr className='mb-5 w-1/6'></hr>
                                {
                                    usersTemplateInfo?.educationsDetails?.value?.map(edu => {
                                        return (
                                        <>
                                            <h1 className='text-sm font-semibold tracking-wider'>{edu?.name}</h1>
                                            <h1 className='my-2'>{edu?.value?.institutionName}</h1>
                                            <h1 className=''>
                                                {edu?.value?.startDate} - {edu?.value?.endDate}
                                            </h1>
                                        </>
                                        )
                                    })
                                }
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