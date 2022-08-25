import React from 'react';
import './Resume4.css'
import Image from '../Images/image04.jpg';
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
import { useOutletContext } from 'react-router-dom';

const Resume4 = () => {
    const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();

    return (
        <div className=''>
            <div className='resume4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='left-site4'>
                    <div className='profile4'>
                        <img src={Image} alt='' />
                    </div>
                    <div className='content4'>
                        <div className='resume-item4 resume-info4'>
                            <div className='title4'>
                                <p className='bold4'>STEPHEN COLBERT</p>
                            </div>
                            <ul>
                                <li>
                                    <div className='icon4'><FaMap className='icon4-4'></FaMap></div>
                                    <div className='date4'>21 Street, Texas
                                        USA</div>
                                </li>
                                <li>
                                    <div className='icon4'><AiTwotonePhone className='icon4-4'></AiTwotonePhone></div>
                                    <div className='date4'>+324 4456899</div>
                                </li>
                                <li>
                                    <div className='icon4'><MdEmail className='icon4-4'></MdEmail></div>
                                    <div className='date4'>stephen@gmail.com</div>
                                </li>
                                <li>
                                    <div className='icon4'><TbWorld className='icon4-4'></TbWorld></div>
                                    <div className='date4'>www.stephen.com</div>
                                </li>
                            </ul>
                        </div>
                        <div className='resume-item4 resume-skills4'>
                            <div className='title4'>
                                <p className='bold4'>SKILLS</p>
                            </div>
                            <ul>
                                <li>
                                    <div className='skill-name4'>HTML</div>
                                    <div className='skill-progress4'>
                                        <span className='progress4-1'></span>
                                    </div>
                                    <div className='skill-per4'>80%</div>
                                </li>
                                <li>
                                    <div className='skill-name4'>CSS</div>
                                    <div className='skill-progress4'>
                                        <span className='progress4-2'></span>
                                    </div>
                                    <div className='skill-per4'>90%</div>
                                </li>
                                <li>
                                    <div className='skill-name4'>JS</div>
                                    <div className='skill-progress4'>
                                        <span className='progress4-3'></span>
                                    </div>
                                    <div className='skill-per4'>60%</div>
                                </li>
                                <li>
                                    <div className='skill-name4'>REACT.JS</div>
                                    <div className='skill-progress4'>
                                        <span className='progress4-4'></span>
                                    </div>
                                    <div className='skill-per4'>70%</div>
                                </li>
                                <li>
                                    <div className='skill-name4'>FIREBASE</div>
                                    <div className='skill-progress4'>
                                        <span className='progress4-5'></span>
                                    </div>
                                    <div className='skill-per4'>60%</div>
                                </li>
                                <li>
                                    <div className='skill-name4'>NODE JS</div>
                                    <div className='skill-progress4'>
                                        <span className='progress4-6'></span>
                                    </div>
                                    <div className='skill-per4'>60%</div>
                                </li>
                                <li>
                                    <div className='skill-name4'>MONGO DB</div>
                                    <div className='skill-progress4'>
                                        <span className='progress4-7'></span>
                                    </div>
                                    <div className='skill-per4'>70%</div>
                                </li>
                            </ul>
                        </div>
                        <div className='resume-item4 resume-social4'>
                            <div className='title4'>
                                <p className='bold4'>SOCIAL</p>
                            </div>
                            <ul>
                                <li>
                                    <div className='icon4'><ImFacebook2 className='icon4-4'></ImFacebook2></div>
                                    <div className='date4'>
                                        <p className='semi-bold4'>Facebook</p>
                                        <p>stephen@facebook</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='icon4'><BsTwitter className='icon4-4'></BsTwitter></div>
                                    <div className='date4'>
                                        <p className='semi-bold4'>Twitter</p>
                                        <p>stephen@twitter</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='icon4'><BsYoutube className='icon4-4'></BsYoutube></div>
                                    <div className='date4'>
                                        <p className='semi-bold4'>YouTube</p>
                                        <p>stephen@youtube</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='icon4'><BsLinkedin className='icon4-4'></BsLinkedin></div>
                                    <div className='date4'>
                                        <p className='semi-bold4'>Linkedin</p>
                                        <p>stephen@linkedin</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='right-ite4'>
                    <div className='resume-item4-2 resume-about4'>
                        <div className='title4'>
                            <p className='bold4-2'>About Me</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                    <div className='resume-item4-2 resume-exerience4'>
                        <div className='title4'>
                            <p className='bold4-2'>Work Exerience</p>
                        </div>
                        <ul>
                            <li>
                                <div className='exerience4'>
                                    <div className='info4'>2019 - Present
                                        Company Name</div>
                                    <div className='semi-bol4'>
                                        <p className='title4-3'>SENIOR UX DESIGNER</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='exerience4'>
                                    <div className='info4'>2016 - 2019
                                        Company Name</div>
                                    <div className='semi-bol4'>
                                        <p className='title4-3'>UX/UI DESIGNER</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='exerience4'>
                                    <div className='info4'>2014 - 2016
                                        Company Name</div>
                                    <div className='semi-bol4'>
                                        <p className='title4-3'>JUNIOR UX DESIGNER</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='resume-item4-2 resume-education4'>
                        <div className='title4'>
                            <p className='bold4-2'> Education</p>
                        </div>
                        <ul>
                            <li>
                                <div className='info4-3'>2010 - 2013</div>
                                <div className='semi-bol4-3'>
                                    <p className='title4-3'>Web Designing (Texas University)</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                            <li>
                                <div className='info4-3'>2000 - 2010</div>
                                <div className='semi-bol4-3'>
                                    <p className='title4-3'>Texas International School</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='resume-item4-2 resume-hobby4'>
                        <div className='title4'>
                            <p className='bold4-2'>Hobby</p>
                        </div>
                        <ul>
                            <li><BiBook className='icon4'></BiBook></li>
                            <li><FaGamepad className='icon4'></FaGamepad></li>
                            <li><FaMusic className='icon4'></FaMusic></li>
                            <li><FaCanadianMapleLeaf className='icon4'></FaCanadianMapleLeaf></li>
                        </ul>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Resume4;