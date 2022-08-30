import React, { useRef } from 'react';
import './Resume5.css'
import Image from '../Images/image02.jpg';
import { FaMap } from "react-icons/fa"
import { AiTwotonePhone } from "react-icons/ai"
import { MdEmail, MdLocationCity } from "react-icons/md"
import { TbWorld } from "react-icons/tb"
import { ImFacebook2 } from "react-icons/im"
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BiBook } from "react-icons/bi"
import { FaGamepad } from "react-icons/fa"
import { FaMusic } from "react-icons/fa"
import { FaCanadianMapleLeaf } from "react-icons/fa"
import { useOutletContext } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { FiArrowDown } from 'react-icons/fi';

const Resume5 = () => {
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
            <div ref={componentRef} className='resume5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='resume5-5'>
                    <div className='left-5'>
                        <div className='profile-text5'>
                            <div className='img-box5'>
                                <img src={Image} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='right5 resume-info5'>
                        <div className='title5'>
                            <p className='bold5'>{usersTemplateInfo?.contactDetails?.value?.firstName} {usersTemplateInfo?.contactDetails?.value?.lastName}</p>
                            <p className='regular5'>{usersTemplateInfo?.contactDetails?.value?.jobTitle}</p>
                        </div>
                        <div className='info-text5'>
                            <div className='info-text5-5'>
                                <ul>
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
                            <div className='info-text5-5'>
                                <ul>

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
                                    {/* <li>
                                        <div className='icon5'><TbWorld className='icon5-5'></TbWorld></div>
                                        <div className='date5'>
                                            www.stephen.com
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='left-side5'>
                    <div className='content5'>
                        <div className='resume-item5'>

                        </div>
                        <div className='resume-item5 resume-skills5'>

                            <ul>
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
                            </ul>
                        </div>
                        <div className='resume-item5 resume-social5'>
                            <div className='title5'>
                                <p className='bold5'>Social</p>
                            </div>
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
                                {/* <li className='flex gap-2'>
                                    {
                                        usersTemplateInfo?.socialLinks?.value?.facebook
                                            ?
                                            <>
                                                <div className='flex items-center gap-2'>
                                                    <div><BsFacebook></BsFacebook></div>
                                                    <div className=''><a href={usersTemplateInfo?.socialLinks?.value?.facebook}>Facebook</a></div>
                                                </div>
                                            </>
                                            : ""
                                    }
                                </li> */}
                            </ul>
                        </div>
                        <div className='resume-item5 resume-education5'>
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
                    </div>
                </div>
                <div className='right-side5'>
                    <div className='resume-item5 resume-about5'>
                        <div className='resume-item7-7 resume-about7'>
                            <div className='title7'>
                                <p className='bold7-7 font-bold'>{usersTemplateInfo?.careerObjective?.name}</p>
                            </div>
                            <p>{usersTemplateInfo?.careerObjective?.value}</p>
                        </div>
                    </div>
                    <div className='resume-item5 resume-work5'>
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

                    <div className='resume-item resume-hobby5'>
                        <div className='title5'>
                            <p className='bold5'>
                                Hobby
                            </p>
                        </div>
                        <ul>
                            <li><BiBook className='icon5'></BiBook></li>
                            <li><FaGamepad className='icon5'></FaGamepad></li>
                            <li><FaMusic className='icon5'></FaMusic></li>
                            <li><FaCanadianMapleLeaf className='icon5'></FaCanadianMapleLeaf></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume5;