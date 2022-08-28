import React from 'react';
import './Resume3.css'
import Image from '../Images/image03.jpg';
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

const Resume3 = () => {

    const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();

    return (
        <div className=''>
            <div className='resume3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='left-side3'>
                    <div className='profile3'>
                        <img src={Image} alt='' />
                        <div className='content'>
                            <div className='resume-item resume-info'>
                                <div className='title3'>
                                    <p className='bold'>Stephen colbert</p>
                                    <p className='regular'>Designer</p>
                                </div>
                                <ul>
                                    <li>
                                        <div className='icon'><FaMap className='icon3'></FaMap></div>
                                        <div className='date3'>
                                            21 Street, Texas <br /> USA
                                        </div>
                                    </li>
                                    <li>
                                        <div className='icon'><AiTwotonePhone className='icon3'></AiTwotonePhone></div>
                                        <div className='date3'>
                                            +324 4456899
                                        </div>
                                    </li>
                                    <li>
                                        <div className='icon'><MdEmail className='icon3'></MdEmail></div>
                                        <div className='date3'>
                                            stephen@gmail.com
                                        </div>
                                    </li>
                                    <li>
                                        <div className='icon'><TbWorld className='icon3'></TbWorld></div>
                                        <div className='date3'>
                                            www.stephen.com
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='resume-item resume-skills'>
                                <div className='title3'>
                                    <p className='bold'>Skills</p>
                                </div>
                                <ul>
                                    <li>
                                        <div className='skill-name3'>
                                            HTML
                                        </div>
                                        <div className='skill-progress3'>
                                            <span className='progress1'></span>
                                        </div>
                                        <div className='skill-per'>80%</div>
                                    </li>
                                    <li>
                                        <div className='skill-name3'>
                                            CSS
                                        </div>
                                        <div className='skill-progress3'>
                                            <span className='progress2'></span>
                                        </div>
                                        <div className='skill-per'>90%</div>
                                    </li>
                                    <li>
                                        <div className='skill-name3'>
                                            JS
                                        </div>
                                        <div className='skill-progress3'>
                                            <span className='progress3'></span>
                                        </div>
                                        <div className='skill-per'>70%</div>
                                    </li>
                                    <li>
                                        <div className='skill-name3'>
                                            REACT.JS
                                        </div>
                                        <div className='skill-progress3'>
                                            <span className='progress4'></span>
                                        </div>
                                        <div className='skill-per'>70%</div>
                                    </li>
                                    <li>
                                        <div className='skill-name3'>
                                            FIREBASE
                                        </div>
                                        <div className='skill-progress3'>
                                            <span className='progress5'></span>
                                        </div>
                                        <div className='skill-per'>60%</div>
                                    </li>
                                    <li>
                                        <div className='skill-name3'>
                                            NODE JS
                                        </div>
                                        <div className='skill-progress3'>
                                            <span className='progress6'></span>
                                        </div>
                                        <div className='skill-per'>70%</div>
                                    </li>
                                    <li>
                                        <div className='skill-name3'>
                                            MONGO DB
                                        </div>
                                        <div className='skill-progress3'>
                                            <span className='progress7'></span>
                                        </div>
                                        <div className='skill-per'>70%</div>
                                    </li>
                                </ul>
                            </div>
                            <div className='resume-item resume-social'>
                                <div className='title3'>
                                    <p className='bold'>Social</p>
                                </div>
                                <ul>
                                    <li>
                                        <div className='icon'>
                                        <ImFacebook2 className='icon3'></ImFacebook2>
                                        </div>
                                        <div className='date3'>
                                            <p className='semi-bold'>
                                                Facebook
                                            </p>
                                            <p>stephen@facebook</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='icon'>
                                        <BsTwitter className='icon3'></BsTwitter>
                                        </div>
                                        <div className='date3'>
                                            <p className='semi-bold'>
                                                Twitter
                                            </p>
                                            <p>stephen@twitter</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='icon'>
                                        <BsYoutube className='icon3'></BsYoutube>
                                        </div>
                                        <div className='date3'>
                                            <p className='semi-bold'>
                                                YouTube
                                            </p>
                                            <p>stephen@youtube</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='icon'>
                                        <BsLinkedin className='icon3'></BsLinkedin>
                                        </div>
                                        <div className='date3'>
                                            <p className='semi-bold'>
                                                Linkedin
                                            </p>
                                            <p>stephen@linkedin</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-side3'>
                    <div className='resume-item resume-about3'>
                        <div className='title3'>
                            <p className='bold'>
                                About Me
                            </p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                    <div className='resume-item resume-work3'>
                        <div className='title3'>
                            <p className='bold'>
                                Work Exerience
                            </p>
                        </div>
                        <ul>
                            <li>
                                <div className='date3'>2013 - 2015</div>
                                <div className='info3'>
                                    <p className='semi-bol'>Lorem ipsum dolor sit amet</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                            <li>
                                <div className='date3'>2013 - 2017</div>
                                <div className='info3'>
                                    <p className='semi-bol'>Lorem ipsum dolor sit amet</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                            <li>
                                <div className='date3'>2013 - Present</div>
                                <div className='info3'>
                                    <p className='semi-bol'>Lorem ipsum dolor sit amet</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='resume-item resume-education3'>
                        <div className='title3'>
                            <p className='bold'>
                                Education
                            </p>
                        </div>
                        <ul>
                            <li>
                                <div className='date3'>2010 - 2013</div>
                                <div className='info3'>
                                    <p className='semi-bol'>Web Designing (Texas University)</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                            <li>
                                <div className='date3'>2000 - 2010</div>
                                <div className='info3'>
                                    <p className='semi-bol'>Texas International School</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='resume-item resume-hobby3'>
                    <div className='title3'>
                            <p className='bold'>
                                Hobby
                            </p>
                        </div>
                        <ul>
                            <li><BiBook className='icon3'></BiBook></li>
                            <li><FaGamepad className='icon3'></FaGamepad></li>
                            <li><FaMusic className='icon3'></FaMusic></li>
                            <li><FaCanadianMapleLeaf className='icon3'></FaCanadianMapleLeaf></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume3;