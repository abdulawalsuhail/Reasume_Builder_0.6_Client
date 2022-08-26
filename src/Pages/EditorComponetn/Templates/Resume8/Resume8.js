import React, { useRef } from 'react';
import './Resume8.css'
import { AiTwotonePhone } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { BsLinkedin } from "react-icons/bs"
import { MdLocationCity } from "react-icons/md"
import { BsGithub } from "react-icons/bs"
import { useOutletContext } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { FiArrowDown } from 'react-icons/fi';

const Resume8 = () => {
    const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
    console.log(usersTemplateInfo);

    // download resume8 letter
    const componentRef = useRef();
    const handelDownload = useReactToPrint({
        content: () => componentRef.current,
    });
    
    return (
        <div className='Resume8body'>
            <div className='flex justify-end mr-40 mt-6'>
                <button
                onClick={handelDownload}
                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-5 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-primary rounded-md cursor-pointer group ring-offset-2 ring-1 hover:bg-secondary ease focus:outline-none"
                >
                <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span class="relative z-20 flex items-center gap-2 text-sm">
                <FiArrowDown className="animate-bounce font-extrabold text-[20px]" />
                Download
                </span>
                </button>
            </div>
          
            <div ref={componentRef} className='resume8 bg-white mx-auto text-left'>
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