import React from 'react';
import './Resume5.css'
import Image from '../Images/image02.jpg';
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

const Resume5 = () => {

    return (
        <div className=''>
            <div className='resume5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
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
                            <p className='bold5'>Stephen colbert</p>
                            <p className='regular5'>Designer</p>
                        </div>
                        <div className='info-text5'>
                            <div className='info-text5-5'>
                                <ul>
                                    <li>
                                        <div className='icon5'><FaMap className='icon5-5'></FaMap></div>
                                        <div className='date5'>
                                            21 Street, Texas USA
                                        </div>
                                    </li>
                                    <li>
                                        <div className='icon5'><AiTwotonePhone className='icon5-5'></AiTwotonePhone></div>
                                        <div className='date5'>
                                            +324 4456899
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='info-text5-5'>
                                <ul>

                                    <li>
                                        <div className='icon5'><MdEmail className='icon5-5'></MdEmail></div>
                                        <div className='date5'>
                                            stephen@gmail.com
                                        </div>
                                    </li>
                                    <li>
                                        <div className='icon5'><TbWorld className='icon5-5'></TbWorld></div>
                                        <div className='date5'>
                                            www.stephen.com
                                        </div>
                                    </li>
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
                            <div className='title5'>
                                <p className='bold5'>Skills</p>
                            </div>
                            <ul>
                                <li>
                                    <div className='skill-name5'>
                                        HTML
                                    </div>
                                    <div className='skill-progress5'>
                                        <span className='progress5-1'></span>
                                    </div>
                                    <div className='skill-per5'>80%</div>
                                </li>
                                <li>
                                    <div className='skill-name5'>
                                        CSS
                                    </div>
                                    <div className='skill-progress5'>
                                        <span className='progress5-2'></span>
                                    </div>
                                    <div className='skill-per5'>90%</div>
                                </li>
                                <li>
                                    <div className='skill-name5'>
                                        JS
                                    </div>
                                    <div className='skill-progress5'>
                                        <span className='progress5-3'></span>
                                    </div>
                                    <div className='skill-per5'>70%</div>
                                </li>
                                <li>
                                    <div className='skill-name5'>
                                        REACT.JS
                                    </div>
                                    <div className='skill-progress5'>
                                        <span className='progress5-4'></span>
                                    </div>
                                    <div className='skill-per5'>70%</div>
                                </li>
                                <li>
                                    <div className='skill-name5'>
                                        FIREBASE
                                    </div>
                                    <div className='skill-progress5'>
                                        <span className='progress5-5'></span>
                                    </div>
                                    <div className='skill-per5'>60%</div>
                                </li>
                                <li>
                                    <div className='skill-name5'>
                                        NODE JS
                                    </div>
                                    <div className='skill-progress5'>
                                        <span className='progress5-6'></span>
                                    </div>
                                    <div className='skill-per5'>70%</div>
                                </li>
                                <li>
                                    <div className='skill-name5'>
                                        MONGO DB
                                    </div>
                                    <div className='skill-progress5'>
                                        <span className='progress5-7'></span>
                                    </div>
                                    <div className='skill-per5'>70%</div>
                                </li>
                            </ul>
                        </div>
                        <div className='resume-item5 resume-social5'>
                            <div className='title5'>
                                <p className='bold5'>Social</p>
                            </div>
                            <ul>
                                <li>
                                    <div className='icon5'>
                                        <ImFacebook2 className='icon5-5'></ImFacebook2>
                                    </div>
                                    <div className='date5'>
                                        <p className='semi-bold5'>
                                            Facebook
                                        </p>
                                        <p>stephen@facebook</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='icon5'>
                                        <BsTwitter className='icon5-5'></BsTwitter>
                                    </div>
                                    <div className='date5'>
                                        <p className='semi-bold5-5'>
                                            Twitter
                                        </p>
                                        <p>stephen@twitter</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='icon5'>
                                        <BsYoutube className='icon5-5'></BsYoutube>
                                    </div>
                                    <div className='date5'>
                                        <p className='semi-bold5-5'>
                                            YouTube
                                        </p>
                                        <p>stephen@youtube</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='icon5'>
                                        <BsLinkedin className='icon5-5'></BsLinkedin>
                                    </div>
                                    <div className='date5'>
                                        <p className='semi-bold5-5'>
                                            Linkedin
                                        </p>
                                        <p>stephen@linkedin</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='right-side5'>
                    <div className='resume-item5 resume-about5'>
                        <div className='title5'>
                            <p className='bold5'>
                                About Me
                            </p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                    <div className='resume-item5 resume-work5'>
                        <div className='title5'>
                            <p className='bold5'>
                                Work Exerience
                            </p>
                        </div>
                        <ul>
                            <li>
                                <div className='date5'>2013 - 2015</div>
                                <div className='info5'>
                                    <p className='semi-bol5'>Lorem ipsum dolor sit amet</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                            <li>
                                <div className='date5'>2013 - 2017</div>
                                <div className='info5'>
                                    <p className='semi-bol5'>Lorem ipsum dolor sit amet</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                            <li>
                                <div className='date5'>2013 - Present</div>
                                <div className='info5'>
                                    <p className='semi-bol5'>Lorem ipsum dolor sit amet</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='resume-item5 resume-education5'>
                        <div className='title5'>
                            <p className='bold5'>
                                Education
                            </p>
                        </div>
                        <ul>
                            <li>
                                <div className='date5'>2010 - 2013</div>
                                <div className='info5'>
                                    <p className='semi-bol5'>Web Designing (Texas University)</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                            <li>
                                <div className='date5'>2000 - 2010</div>
                                <div className='info5'>
                                    <p className='semi-bol5'>Texas International School</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                        </ul>
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