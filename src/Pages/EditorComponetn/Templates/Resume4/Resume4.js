import React, { useRef } from 'react';
import './Resume4.css'
import Image from '../Images/image04.jpg';
import { FaMap } from "react-icons/fa"
import { AiTwotonePhone } from "react-icons/ai"
import { MdEmail, MdLocationCity } from "react-icons/md"
import { TbWorld } from "react-icons/tb"
import { ImFacebook2 } from "react-icons/im"
import { BsGithub, BsTwitter } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BiBook } from "react-icons/bi"
import { FaGamepad } from "react-icons/fa"
import { FaMusic } from "react-icons/fa"
import { FaCanadianMapleLeaf } from "react-icons/fa"
import { useOutletContext } from 'react-router-dom';
import { FiArrowDown } from 'react-icons/fi';
import { useReactToPrint } from 'react-to-print';

const Resume4 = () => {
    const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();


    // download resume8 letter
    const componentRef = useRef();
    const handelDownload = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className=''>
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
            <div ref={componentRef} className='resume4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='left-site4'>
                    <div className='content4'>
                        <div className='resume-item4 resume-info4 pt-3 text-blue-100'>
                            <div className='title4'>
                                <h1 className='text-3xl'>{usersTemplateInfo?.contactDetails?.value?.firstName} {usersTemplateInfo?.contactDetails?.value?.lastName}</h1>
                            </div>
                            <ul>
                                <li className='flex gap-2 pt-2'>
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
                        <div className='resume-item4 resume-skills4'>
                            <p className='bold4'>Certifications</p>
                            <ul>
                                {
                                    usersTemplateInfo?.certifications?.value?.map(item => {
                                        return (
                                            <>
                                                <h1 className='text-sm font-semibold tracking-wider text-blue-100'>{item}</h1>

                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='resume-item4 resume-social4 text-blue-100'>
                            <div className='title4'>
                                <p className='bold4'>SOCIAL</p>
                            </div>
                            <ul>
                                <li>
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
                        <div className='resume-item4 resume-skills4'>

                            <ul>
                                <h1 className='uppercase bold4 tracking-widest text-lg font-bold text-blue-100'>
                                    {
                                        usersTemplateInfo?.skills?.name
                                    }
                                </h1>
                                {
                                    usersTemplateInfo?.skills?.value?.map(skill => {
                                        return <li className=''>{skill}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='right-ite4'>
                    <div className='resume-item4-2 resume-about4'>
                        <div className='title4'>
                            <p className='bold4-2'>About Me</p>
                        </div>
                        <p>{usersTemplateInfo?.careerObjective?.value}</p>
                    </div>
                    <div className='resume-item4-2 resume-exerience4'>
                        <div className='title4'>
                            <p className='bold4-2'>Work Exerience</p>
                        </div>
                        <ul>
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
                        </ul>
                    </div>
                    <div className='resume-item4-2 resume-education4'>
                        <div className='title4'>
                            <p className='bold4-2'> Education</p>
                        </div>
                        <ul>
                            {
                                usersTemplateInfo?.educationsDetails?.value?.map(edu => {
                                    return (
                                        <>
                                            <h1 className='text-sm font-semibold tracking-wider text-black'>{edu?.name}</h1>
                                            <h1 className='text-xs text-black'>{edu?.value?.institutionName}</h1>
                                            <h1 className='mb-2 text-md text-black'>
                                                {edu?.value?.startDate} - {edu?.value?.endDate}
                                            </h1>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='resume-item4-2 resume-hobby4'>
                        <div className='title4'>
                            <p className='bold4-2'>Reference</p>
                        </div>
                        <ul>
                            {
                                usersTemplateInfo?.reference?.value?.map(ref => {
                                    return (
                                        <>
                                            <h1 className='text-sm font-semibold pr-2 text-black'>{ref?.name}</h1>
                                            <h1 className='text-xs text-black'>{ref?.value?.name}</h1>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume4;