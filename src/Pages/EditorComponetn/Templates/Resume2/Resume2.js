import React from 'react';
import './Resume2.css'
import Image from '../Images/image02.jpg';
import { useOutletContext } from 'react-router-dom';

const Resume2 = () => {
    const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();

    return (
        <div className=''>
            <div className='container2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='left-side2'>
                    <div className='profile-text2'>
                        <div className='img-box2'>
                            <img src={Image} alt='' />
                        </div>
                        
                    </div>
                    <div className='contactInfo2'>
                        <h3 className='titele2 contactInfo-2'>Contact</h3>
                        <ul>
                            <li>
                                <span className='icon'></span>
                                <span className='text2'>info@resumekraft.com</span>
                            </li>
                            <li>
                                <span className='icon'></span>
                                <span className='text2'>202-555-0120</span>
                            </li>
                            <li>
                                <span className='icon'></span>
                                <span className='text2'>Chicago, Illinois, US</span>
                            </li>
                            <li>
                                <span className='icon'></span>
                                <span className='text2'>linkedin.com/resumekraft</span>
                            </li>
                        </ul>
                    </div>
                    <div className='contactInfo2 work2'>
                        <h3 className='titele2 work-skills2'>Skills</h3>
                        <ul>
                            <li>
                                <span className='text2'>Html</span>
                                <span className='percent2'>
                                    <div className='work-skill2-1'></div>
                                </span>
                            </li>
                            <li>
                                <span className='text2'>Css</span>
                                <span className='percent2'>
                                    <div className='work-skill2-2'></div>
                                </span>
                            </li>
                            <li>
                                <span className='text2'>Bootstrap 5</span>
                                <span className='percent2'>
                                    <div className='work-skill2-3'></div>
                                </span>
                            </li>
                            <li>
                                <span className='text2'>Telling Css</span>
                                <span className='percent2'>
                                    <div className='work-skill2-4'></div>
                                </span>
                            </li>
                            <li>
                                <span className='text2'>JavaScript</span>
                                <span className='percent2'>
                                    <div className='work-skill2-5'></div>
                                </span>
                            </li>
                            <li>
                                <span className='text2'>React.Js</span>
                                <span className='percent2'>
                                    <div className='work-skill2-6'></div>
                                </span>
                            </li>
                            <li>
                                <span className='text2'>Node.Js</span>
                                <span className='percent2'>
                                    <div className='work-skill2-7'></div>
                                </span>
                            </li>
                            <li>
                                <span className='text2'>Mongo DB</span>
                                <span className='percent2'>
                                    <div className='work-skill2-8'></div>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className='contactInfo2 language2'>
                        <h3 className='titele2 language-skills2'>Language</h3>
                        <ul>
                            <li>
                                <span className='text2'>English</span>
                                <span className='percent2-2'>
                                    <div className='language-skill2-1'></div>
                                </span>
                            </li>
                            <li>
                                <span className='text2'>Bangla</span>
                                <span className='percent2-2'>
                                    <div className='language-skill2-2'></div>
                                </span>
                            </li>
                            <li>
                                <span className='text2'>Hindi</span>
                                <span className='percent2-2'>
                                    <div className='language-skill2-3'></div>
                                </span>
                            </li>
                            </ul>
                            </div>
                </div>
                <div className='right-side2'>
                    <div className='about2-2'>
                        <div className='name'>
                        <h2 className='title2-2'>Nurul Huda</h2>
                        </div>
                        <h4>Web Developer</h4>
                    </div>
                    <div className='about2'>
                        <h2 className='title2-2 summary'>Summary</h2>
                        <div className='box2'>
                           <div className='summary2'>
                           <ul>
                            <li>Self-independent, reliable and friendly individual who works hard to achieve his goals.</li>
                            <li>Adaptable quickly, and organized well. Interested in learning the latest web & software technologies quickly.</li>
                            <li>Able to work well in teams as well as individually. My future goal is to become a senior full-stack developer.</li>
                            </ul>
                           </div>
                        </div>
                        
                    </div>
                    <div className='about2 skill2'>
                        <h2 className='title2-2 experience'>Experience</h2>
                        <div className='box2'>
                            <div className='year-company2'>
                                <h5>2019 - Present</h5>
                                <h5>Company Name</h5>
                            </div>
                            <div className='text2'>
                                <h4>Senior UX Designer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className='box2'>
                            <div className='year-company2'>
                                <h5>2016 - 2019</h5>
                                <h5>Company Name</h5>
                            </div>
                            <div className='text2'>
                                <h4>UX/UI Designer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className='box2'>
                            <div className='year-company2'>
                                <h5>2014 - 2016</h5>
                                <h5>Company Name</h5>
                            </div>
                            <div className='text2'>
                                <h4>Junior UX Designer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className='about2'>
                        <h2 className='title2-2 education'>Education</h2>
                        <div className='box2'>
                           <div className='education2'>
                            <h4>Intermediate complete</h4>
                            <h4>Degree final year</h4>
                           </div>
                        </div>
                        
                    </div>
                    <div className='about2 interest2'>
                        <h2 className='title2-2'>Interest</h2>
                        <ul>
                            <li>Gaming</li>
                            <li>Singing</li>
                            <li>Reading</li>
                            <li>Cooking</li>
                        </ul>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Resume2;