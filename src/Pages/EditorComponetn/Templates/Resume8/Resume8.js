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
            <button className='btn btn-accent flex mx-auto pt-6'>Download Now</button>
            <div className='resume8 bg-white mx-auto text-left'>
                <div className='bg-slate-100'>
                    <div className='p-10'>
                        <h1 className='text-5xl'>{usersTemplateInfo?.contactDetails?.value?.firstName} {usersTemplateInfo?.contactDetails?.value?.lastName}</h1>
                        <h1 style={{letterSpacing:"4px"}} className='text-xl mt-2 uppercase'>{usersTemplateInfo?.contactDetails?.value?.jobTitle}</h1>

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
                                    usersTemplateInfo?.socialLinks?.value?.github
                                    ? 
                                    <>
                                        <div className='flex items-center gap-2'>
                                            <div><BsGithub></BsGithub></div>
                                            <div className=''><a href={usersTemplateInfo?.socialLinks?.value?.github}>Github</a></div>
                                        </div>
                                    </>
                                    : ""
                                }
                            </li>
                            <li className='flex gap-2'>
                                {
                                    usersTemplateInfo?.socialLinks?.value?.linkedIn
                                    ? 
                                    <>
                                        <div className='flex items-center gap-2'>
                                            <div><BsLinkedin></BsLinkedin></div>
                                            <div className=''><a href={usersTemplateInfo?.socialLinks?.value?.linkedIn}>LinkedIn</a></div>
                                        </div>
                                    </>
                                    : ""
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='bg-black w-full h-px'></div>
                <div className='flex'>

                    <div className='flex'>
                        <div className='w-1/7 h-auto p-10'>

                            {/* skills */}
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
                                            <h1 className='text-xs'>{edu?.value?.institutionName}</h1>
                                            <h1 className='mb-2 text-md'>
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
                        <h1 style={{ letterSpacing: "5px" }} className='font-bold text-lg mb-5'>
                            {
                                usersTemplateInfo?.projects?.name
                            }
                        </h1>
                        {/* Project details */}
                        {
                            usersTemplateInfo?.projects?.value?.map(project => {
                                return (
                                    <div className='mb-6'>
                                        {/* Name and Link */}
                                        <div className='mb-[-12px]'>
                                            <h1 className='font-bold text-orange-700 text-md'>
                                                {
                                                    project?.name
                                                }
                                            </h1>
                                            <div className='flex gap-3'>
                                                <h1>
                                                    <a href={project?.value?.liveLink}>Live Site</a>
                                                </h1>
                                                <h1>
                                                    <a href={project?.value?.clientSideLink}>Client Code</a>
                                                </h1>
                                                <h1>
                                                    <a href={project?.value?.clientSideLink}>Server Code</a>
                                                </h1>
                                            </div>
                                        </div>
                                        {/* Features and functionality */}
                                        {
                                            project?.value?.fnf
                                            ?
                                            <div className='mb-[-12px]'>
                                                <h1 className='mt-5 font-bold'>Features and Functionality</h1>
                                                {
                                                    project?.value?.fnf.split(',').map(item => {
                                                        return (<li>{item}</li>)
                                                    }) 
                                                }
                                            </div>
                                            :
                                            ""
                                        }
                                        {/* Technology Used */}
                                        {
                                            project?.value?.technology
                                            ?
                                            <div>
                                                <h1 className='mt-5 font-bold'>Technology Used</h1>
                                                {
                                                    project?.value?.technology.split(',').map(item => {
                                                        return (<p className='inline-block mr-1'> {item},</p>)
                                                    }) 
                                                }
                                            </div>
                                            :
                                            ""
                                        }

                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Resume8;