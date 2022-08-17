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

const Resume7 = () => {

    return (
        <div className=''>
            <div className='resume7 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>

                <div className='left-site7'>
                    <div className='profile7'>
                        <div>
                            <h2>JAMES RYAN</h2>
                            <h4>Full-Stack Developer</h4>
                        </div>

                        <ul>
                            <li>
                                <div className='icon7'><MdEmail className='icon7-7'></MdEmail></div>
                                <div className='date7'>jamesryan@email.com</div>
                            </li>
                            <li>
                                <div className='icon7'><AiTwotonePhone className='icon7-7'></AiTwotonePhone></div>
                                <div className='date7'>(123) 456-7890</div>
                            </li>
                            <li>
                                <div className='icon7'><HiLocationMarker className='icon7-7'></HiLocationMarker></div>
                                <div className='date7'>Indianapolis, IN</div>
                            </li>
                            <li>
                                <div className='icon7'><BsLinkedin className='icon7-7'></BsLinkedin></div>
                                <div className='date7'>LinkedIn</div>
                            </li>
                        </ul>
                    </div>
                    <div className='content7'>
                        <div className='resume-item7 resume-info7'>
                            <div className='title7'>
                                <p className='bold7'>EDUCATION</p>
                            </div>
                            <ul>
                                <li>
                                    <div className='date7'>B.S.</div>
                                </li>
                                <li>
                                    <div className='date7'>Computer Science</div>
                                </li>
                                <li>
                                    <div className='date7'>University of Indiana</div>
                                </li>
                                <li>
                                    <div className='icon7'><GiCalendarHalfYear className='icon7-7'></GiCalendarHalfYear></div>
                                    <div className='date7'>September 2016 - June 2020</div>
                                </li>
                                <li>
                                    <div className='icon7'><HiLocationMarker className='icon7-7'></HiLocationMarker></div>
                                    <div className='date7'>Bloomington, IN</div>
                                </li>
                            </ul>
                        </div>
                        <div className='resume-item7 data-structures7'>
                            <div className='title7'>
                                <p className='bold7'>Relevant courses</p>
                            </div>
                            <ul>
                                <li>
                                    <div className='data-name7'>Data Structures</div>
                                </li>
                                <li>
                                    <div className='data-name7'>Algorithm Design</div>
                                </li>
                                <li>
                                    <div className='data-name7'>Database Management Systems</div>
                                </li>
                                <li>
                                    <div className='data-name7'>Computer Vision</div>
                                </li>
                                <li>
                                    <div className='data-name7'>Software Design Methodology</div>
                                </li>
                            </ul>
                        </div>
                        <div className='resume-item7 resume-skills7'>
                            <div className='title7'>
                                <p className='bold7'>SKILLS</p>
                            </div>
                            <ul>
                                <li>
                                    <div className='skill-name7'>HTML</div>
                                    <div className='skill-per7'>80%</div>
                                </li>
                                <li>
                                    <div className='skill-name7'>CSS</div>
                                    <div className='skill-per7'>90%</div>
                                </li>
                                <li>
                                    <div className='skill-name7'>JS</div>
                                    <div className='skill-per7'>60%</div>
                                </li>
                                <li>
                                    <div className='skill-name7'>REACT.JS</div>
                                    <div className='skill-per7'>70%</div>
                                </li>
                                <li>
                                    <div className='skill-name7'>FIREBASE</div>
                                    <div className='skill-per7'>60%</div>
                                </li>
                                <li>
                                    <div className='skill-name7'>NODE JS</div>
                                    <div className='skill-per7'>60%</div>
                                </li>
                                <li>
                                    <div className='skill-name7'>MONGO DB</div>
                                    <div className='skill-per7'>70%</div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='right-ite7'>
                    <div className='resume-item7-7 resume-about7'>
                        <div className='title7'>
                            <p className='bold7-7'>CAREER OBJECTIVE</p>
                        </div>
                        <p>Recent computer science graduate with a passion for developing scalable web applications and working across the full stack. I am looking to join forces with Red Technologies to continue to grow my skill set while contributing to the positive outcome of making people "richer, smarter, and happier."</p>
                    </div>
                    <div className='resume-item7-7 resume-exerience7'>
                        <div className='title7'>
                            <p className='bold7-7'>WORK EXPERIENCE</p>
                            <h3>Full-Stack Developer</h3>
                            <p className='periodic7'>Periodic</p>
                            <div className='year7'>
                                <div className='year-text-icons'>
                                    <div><GiCalendarHalfYear className='icon-7'></GiCalendarHalfYear></div>
                                    <p>January 2021 - current</p>
                                </div>
                                <div className='year-text-icons'>
                                    <div><HiLocationMarker className='icon-7'></HiLocationMarker></div>
                                    <p>Bloomington, IN</p>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <div className='exerience7'>
                                    Built 30+ custom interfaces using the Periodic API
                                </div>
                            </li>
                            <li>
                                <div className='exerience7'>
                                    Implemented 14 new features as defined and scoped by a product team of 12
                                </div>
                            </li>
                            <li>
                                <div className='exerience7'>
                                    Collaborated with 2 different development teams on 4 new project designs and feature improvements
                                </div>
                            </li>
                            <li>
                                <div className='exerience7'>
                                    Diagnosed and fixed report functionality issues by troubleshooting
                                </div>
                            </li>
                            <li>
                                <div className='exerience7'>
                                    Suggested 20+ improvements to product design and functionality as informed by user-experience reporting
                                </div>
                            </li>
                            <li>
                                <div className='exerience7'>
                                    Collaborated with 4 client service teams to understand and solve bottlenecks and proposed feature expansions
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='resume-item7-7 resume-education7'>
                        <div className='title7'>
                            <h3>Full-Stack Developer Intern</h3>
                            <p className='tu-simple7'>TuSimple</p>
                            <div className='year7'>
                            <div className='year-text-icons'>
                                    <div><GiCalendarHalfYear className='icon-7'></GiCalendarHalfYear></div>
                                    <p>June 2020 - January 2021</p>
                                </div>
                                <div className='year-text-icons'>
                                    <div><HiLocationMarker className='icon-7'></HiLocationMarker></div>
                                    <p>West Lafayette, IN</p>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <div className='exerience7'>
                                    Built pipeline scheduling and execution platform and corresponding front-end to manage and interact with the platform
                                </div>
                            </li>
                            <li>
                                <div className='exerience7'>
                                    Developed 10+ cluster projects and utilized public cloud, computing infrastructure services
                                </div>
                            </li>
                            <li>
                                <div className='exerience7'>
                                    Designed 20+ front-end Web Interface for engineers and testops to control and monitor the onboard system
                                </div>
                            </li>
                            <li>
                                <div className='exerience7'>
                                    Analyzed and optimized performance bottlenecks in 8+ existing back-end systems, such as database queries and storage solutions, to increase responsiveness
                                </div>
                            </li>
                            <li>
                                <div className='exerience7'>
                                    Architected, implemented, and maintained 5 performant and scalable data-processing back-end systems
                                </div>
                            </li>
                            <li>
                                <div className='exerience7'>
                                    Worked with 8+ teams to build web-based tools to facilitate their development lifecycle
                                </div>
                            </li>
                            <li>
                                <div className='exerience7'>
                                    Collaborated with 3 SRE teams of 6 to identify issues and increase the stability, performance, and efficiency of private computing services
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume7;