import React from 'react';
import './Resume7.css'
import Image from '../Images/image.jpg';
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
import { HiLocationMarker } from "react-icons/hi"
import { GiCalendarHalfYear } from "react-icons/gi"
import { useOutletContext } from 'react-router-dom';

const Resume7 = () => {
    const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();

    return (
        <div className=''>
            <div className='resume7 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>

                <div className='left-site7'>
                    <div className='profile7'>
                        <div>
                            <h2>{usersTemplateInfo?.contactDetails?.value?.firstName} {usersTemplateInfo?.contactDetails?.value?.lastName}</h2>
                            <h4>{usersTemplateInfo?.contactDetails?.value?.jobTitle}</h4>
                        </div>

                        <ul>
                            <li>
                                <div className='icon7'><MdEmail className='icon7-7'></MdEmail></div>
                                <div className='date7'>{usersTemplateInfo?.contactDetails?.value?.email}</div>
                            </li>
                            <li>
                                <div className='icon7'><AiTwotonePhone className='icon7-7'></AiTwotonePhone></div>
                                <div className='date7'>{usersTemplateInfo?.contactDetails?.value?.phoneNo}</div>
                            </li>
                            <li>
                                <div className='icon7'><HiLocationMarker className='icon7-7'></HiLocationMarker></div>
                                <div className='date7'>{usersTemplateInfo?.contactDetails?.value?.country},
                                    {usersTemplateInfo?.contactDetails?.value?.city},
                                    {usersTemplateInfo?.contactDetails?.value?.state},
                                    {usersTemplateInfo?.contactDetails?.value?.zipCode}</div>
                            </li>
                            <li>
                                <div className='icon7'><BsLinkedin className='icon7-7'></BsLinkedin></div>
                                <div className='date7'>{usersTemplateInfo?.socialLinks?.value?.linkedIn}</div>
                            </li>
                        </ul>
                    </div>
                    <div className='content7'>
                        <div>
                            <hr className='my-5'></hr>
                            <h1 className='uppercase text-lg font-bold text-lime-50'>
                                {
                                    usersTemplateInfo?.educationsDetails?.name
                                }
                            </h1>
                            <hr className='mb-5 w-1/6'></hr>
                            {
                                usersTemplateInfo?.educationsDetails?.value?.map(edu => {
                                    return (
                                        <>
                                            <h1 className='text-sm font-semibold tracking-wider text-lime-50'>{edu?.name}</h1>
                                            <h1 className='text-xs text-lime-50'>{edu?.value?.institutionName}</h1>
                                            <h1 className='mb-2 text-md text-lime-50'>
                                                {edu?.value?.startDate} - {edu?.value?.endDate}
                                            </h1>
                                        </>
                                    )
                                })
                            }
                        </div>
                        {/* Skills */}
                        <div className='text-light'>
                            <h1 className='uppercase text-lime-50 text-lg font-bold'>
                                {
                                    usersTemplateInfo?.skills?.name
                                }
                            </h1>
                            <hr className='mb-5 w-1/6'></hr>
                            {
                                usersTemplateInfo?.skills?.value?.map(skill => {
                                    return <li className='text-lime-50'>{skill}</li>
                                })
                            }
                        </div>

                    </div>
                </div>
                <div className='right-ite7'>
                    <div className='resume-item7-7 resume-about7'>
                        <div className='title7'>
                            <p className='bold7-7 font-bold'>{usersTemplateInfo.careerObjective.name}</p>
                        </div>
                        <p>{usersTemplateInfo.careerObjective.value}</p>
                    </div>
                    <div className='right-site8 pt-3'>
                        <h1 className='font-bold text-lg mb-3'>
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
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume7;