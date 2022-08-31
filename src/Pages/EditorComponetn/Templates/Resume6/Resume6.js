import React from 'react';
import './Resume6.css'
import { FaMap } from "react-icons/fa"
import { AiTwotonePhone } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { TbWorld } from "react-icons/tb"
import { ImFacebook2 } from "react-icons/im"
import { BsTwitter } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BiBook } from "react-icons/bi"
import { FaGamepad } from "react-icons/fa"
import { FaMusic } from "react-icons/fa"
import { FaCanadianMapleLeaf } from "react-icons/fa"
import { MdLocationCity } from "react-icons/md"
import { BsGithub } from "react-icons/bs"
import { useOutletContext } from 'react-router-dom';


const Resume6 = () => {
    const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();

    return (
        <div className=''>
            <div className='resume6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 border'>
                <div className='resume-header6'>
                    <div className='header-text6'>
                        <h2 className='resume-title6' style={{ letterSpacing: "4px" }}>
                            {usersTemplateInfo?.contactDetails?.value?.firstName} {usersTemplateInfo?.contactDetails?.value?.lastName}
                        </h2>
                        <p className='resume-title6-2'>{usersTemplateInfo?.contactDetails?.value?.jobTitle}</p>
                    </div>
                </div>
                <div className='left-side6'>
                    <div className='resume-info6'>
                        <h3 className='title6-1'>CONTACT</h3>
                        <ul>
                            <li>
                                <div className='icon6'><MdEmail className='icon6-1'></MdEmail></div>
                                <div className='date6'>
                                    {
                                        usersTemplateInfo?.contactDetails?.value?.email
                                            ?
                                            <>
                                                <div className='flex items-center gap-2'>
                                                    <div className=''>
                                                        {usersTemplateInfo?.contactDetails?.value?.email}
                                                    </div>
                                                </div>
                                            </>
                                            : ""
                                    }
                                </div>
                            </li>
                            <li>
                                <div className='icon6'><AiTwotonePhone className='icon6-1'></AiTwotonePhone></div>
                                <div className='date6'>
                                    {
                                        usersTemplateInfo?.contactDetails?.value?.email
                                            ?
                                            <>
                                                <div className='flex items-center gap-2'>
                                                    <div className=''>
                                                        {usersTemplateInfo?.contactDetails?.value?.phoneNo}
                                                    </div>
                                                </div>
                                            </>
                                            : ""
                                    }
                                </div>
                            </li>
                            <li>
                                {
                                    usersTemplateInfo?.contactDetails?.value?.country
                                        ?
                                        <>
                                            <div className='flex items-center gap-2'>
                                                <div><MdLocationCity></MdLocationCity></div>
                                                <div className='whitespace-pre-wrap'>
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
                            <li>
                                <div><BsLinkedin></BsLinkedin></div>
                                <div className='date6'><a href={usersTemplateInfo?.socialLinks?.value?.linkedIn}>LinkedIn</a></div>
                            </li>
                        </ul>
                    </div>
                    <div className='resume-education6'>
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
                    <div className='resume-skills6'>
                        <h1 className='uppercase tracking-widest text-lg font-bold'>
                            {
                                usersTemplateInfo?.languages?.name
                            }
                        </h1>
                        <hr className='mb-5 w-1/6'></hr>
                        {
                            usersTemplateInfo?.languages?.value?.map(language => {
                                return <li className='py-2'>{language}</li>
                            })
                        }
                    </div>

                    <div>
                        <h1 className='uppercase tracking-widest text-lg font-bold'>
                            {
                                usersTemplateInfo?.skills?.name
                            }
                        </h1>
                        <hr className='mb-5 w-1/6'></hr>
                        {
                            usersTemplateInfo?.skills?.value?.map(skill => {
                                return <li className='py-2'>{skill}</li>
                            })
                        }
                    </div>
                </div>
                <div className='right-site6'>
                    <div className='experience6'>
                        <div className='resume-item7-7 resume-about7'>
                            <div className='title7'>
                                <p className='bold7-7 font-bold'>{usersTemplateInfo?.careerObjective?.name}</p>
                            </div>
                            <p>{usersTemplateInfo?.careerObjective?.value}</p>
                        </div>
                        <div className='experience-title6  py-5'>
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
        </div>
    );
};

export default Resume6;