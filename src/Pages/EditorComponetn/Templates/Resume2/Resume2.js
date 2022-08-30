import React, { useRef } from 'react';
import './Resume2.css'
import Image from '../Images/image02.jpg';
import { useOutletContext } from 'react-router-dom';
import { MdEmail, MdLocationCity } from 'react-icons/md';
import { AiTwotonePhone } from 'react-icons/ai';
import { FiArrowDown } from 'react-icons/fi';
import { useReactToPrint } from 'react-to-print';

const Resume2 = () => {
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
            <div ref={componentRef} className='container2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='left-side2'>

                    <div className='contactInfo2'>
                        <h3 className='titele2 contactInfo-2'>Contact</h3>
                        <ul className='text-white'>
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
                    <div className='contactInfo2 work2 '>
                        <h3 className='titele2 work-skills2'>Skills</h3>
                        <ul>
                            {
                                usersTemplateInfo?.skills?.value?.map(skill => {
                                    return <li className='text-white'>{skill}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='contactInfo2 work2'>
                        <h3 className='titele2 work-skills2'>Certifications</h3>
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
                    <div className='contactInfo2 language2'>
                        <h3 className='titele2 language-skills2'>Language</h3>
                        <ul>
                            {
                                usersTemplateInfo?.languages?.value?.map(language => {
                                    return (
                                        <>
                                            <h1 className='text-sm font-semibold tracking-wider text-blue-100'>{language}</h1>

                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='right-side2'>
                    <div className='about2-2'>
                        <div className='name'>
                            <h2 className='title2-2'>{usersTemplateInfo?.contactDetails?.value?.firstName} {usersTemplateInfo?.contactDetails?.value?.lastName}</h2>
                        </div>
                        <h1 style={{ letterSpacing: "4px" }} className='text-xl mt-2 uppercase'>{usersTemplateInfo?.contactDetails?.value?.jobTitle}</h1>
                    </div>
                    <div className='about2'>
                        <h2 className='title2-2 summary'>Summary</h2>
                        <div className='box2'>
                            <div className='summary2'>
                                <p>{usersTemplateInfo?.careerObjective?.value}</p>
                            </div>
                        </div>

                    </div>
                    <div className='about2 skill2'>
                        <h2 className='title2-2 experience'>{usersTemplateInfo?.projects?.name}</h2>
                        <div className='box2'>
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
                    <div className='about2'>
                        <h2 className='title2-2 education'>Education</h2>
                        <div className='box2'>
                            <div className='education2'>
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
                            </div>
                        </div>

                    </div>
                    <div className='about2 interest2'>
                        <h2 className='title2-2'>Reference</h2>
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

export default Resume2;