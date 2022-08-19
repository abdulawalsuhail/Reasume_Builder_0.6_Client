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


const Resume6 = () => {

    return (
        <div className=''>
            <div className='resume6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='resume-header6'>
                    <div className='header-text6'>
                        <h2 className='resume-title6'>KARLIE BERKLEY</h2>
                        <p className='resume-title6-2'>FRONT-END WEB DEVELOPER</p>
                    </div>
                </div>
                <div className='left-side6'>
                    <div className='resume-info6'>
                        <h3 className='title6-1'>CONTACT</h3>
                        <ul>
                            <li>
                                <div className='icon6'><MdEmail className='icon6-1'></MdEmail></div>
                                <div className='date6'>karlieb@email.com</div>
                            </li>
                            <li>
                                <div className='icon6'><AiTwotonePhone className='icon6-1'></AiTwotonePhone></div>
                                <div className='date6'>(123) 456-7890
                                </div>
                            </li>
                            <li>
                                <div className='icon6'><MdLocationCity className='icon6-1'></MdLocationCity></div>
                                <div className='date6'>Houston, TX
                                </div>
                            </li>
                            <li>
                                <div className='icon6'><BsLinkedin className='icon6-1'></BsLinkedin></div>
                                <div className='date6'>linkedin.com/in/karlie-b
                                </div>
                            </li>
                            <li>
                                <div className='icon6'><BsGithub className='icon6-1'></BsGithub></div>
                                <div className='date6'>github.com/karlieb
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='resume-education6'>
                        <h3 className='title6-1'>EDUCATION</h3>
                        <ul>
                            <li>
                                <div className='date6'>Bachelor of Science</div>
                            </li>
                            <li>
                                <div className='date6'>Computer Science
                                </div>
                            </li>
                            <li>
                                <div className='date6'>University of Houston
                                </div>
                            </li>
                            <li>
                                <div className='date6'>2014 - 2018
                                </div>
                            </li>
                            <li>
                                <div className='date6'>Houston, TX
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='resume-skills6'>
                        <h3 className='title6-1'>SKILLS</h3>
                        <ul>
                            <li>
                                <div className='date6'>JavaScript</div>
                            </li>
                            <li>
                                <div className='date6'>HTML
                                </div>
                            </li>
                            <li>
                                <div className='date6'>CSS
                                </div>
                            </li>
                            <li>
                                <div className='date6'>React
                                </div>
                            </li>
                            <li>
                                <div className='date6'>Angular
                                </div>
                            </li>
                            <li>
                                <div className='date6'>Flutter
                                </div>
                            </li>
                            <li>
                                <div className='date6'>Vue.js
                                </div>
                            </li>
                            <li>
                                <div className='date6'>BootStrap
                                </div>
                            </li>
                            <li>
                                <div className='date6'>Enzyme
                                </div>
                            </li>
                            <li>
                                <div className='date6'>MongoDB
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='right-site6'>
                    <div className='experience6'>
                        <div className='experience-title6'>
                            <h4>Front-End Developer</h4>
                            <p className='instagram6'>Instagram</p>
                            <p className='text6'>January 2020 - current/Remote</p>
                            <ul>
                                <li>
                                    <div>Monitored social media and Google SEO analytics to adjust post time, location, and various media to grow target platform by 20,000+ followers in less than a year.</div>
                                </li>
                                <li>
                                    <div>Created a Mobile Responsive User Experience with CSS Flexbox that allowed cross-platform accessibility to the website on any device with primary use on mobile. This increased the number of 5 star User Experience/User Interface reviews by 360%</div>
                                </li>
                                <li>
                                    <div>Built API following RESTful standards to allow users to submit information by storing data in MongoDB.</div>
                                </li>
                                <li>
                                    <div>Partnered with data scientists to develop the front end for a product recommendation engine that increased user engagement on page by over 200%.</div>
                                </li>
                                <li>
                                    <div>Curated over 50 website changes to increase the user flow and understanding of all platform capabilities and features.</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='intern6'>
                        <div className='intern-title6'>
                            <h4>Full Stack Software Engineer Intern</h4>
                            <p className='zoom6'>Zoom</p>
                            <p className='text6-1'>June 2018 - January 2020/Pittsburgh, PA</p>
                            <ul>
                                <li>
                                    <div>Developed applications using React while managing the State through Redux and Redux-Forms saving 5+ hours of users' time.</div>
                                </li>
                                <li>
                                    <div>Designed an integrated database using MongoDB that leveraged the React architecture to yield on-demand, detailed feedback.</div>
                                </li>
                                <li>
                                    <div>Simplified reporting to deliver actionable information to servers, resulting in multiple servers achieving financial stability by coming in under budget by 2% or more.</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='barista6'>
                        <div className='barista-title6'>
                            <h4>Barista</h4>
                            <p className='zoom6'>Sentient Bean</p>
                            <p className='text6-2'>December 2014 - January 2018/Houston, TX</p>
                            <ul>
                                <li>
                                    <div>Took 50+ customer orders and processed payments in a timely and cheerful manner each shift.</div>
                                </li>
                                <li>
                                    <div>Kept service areas clear and sanitized, and restocked coffee bar 3 times each shift.</div>
                                </li>
                                <li>
                                    <div>Responsible for scheduling of 10+ employees at all times.</div>
                                </li>
                                <li>
                                    <div>Created a new system to order, receive, and sort domestic and international shipments of small-batch roasted coffee beans. This decreased shipment and reception time by 30%.</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume6;