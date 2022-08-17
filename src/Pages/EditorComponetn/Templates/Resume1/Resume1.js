import React from 'react';
import './Resume.css'
import Image from '../Images/image.jpg';

const Resume = () => {

    return (
        <div className='bg-slate-300'>
            <div className='container grid grid-cols-2'>
                <div className='left-side'>
                    <div className='profile-text'>
                        <div className='img-box'>
                            <img src={Image} alt='' />
                        </div>
                        <h2>Nurul Huda<br /><span>Web Developer</span></h2>
                    </div>
                    <div className='contactInfo'>
                        <h3 className='title'>Contact Info</h3>
                        <ul>
                            <li>
                                <span className='icon'></span>
                                <span className='text'>+880 1779955946</span>
                            </li>
                            <li>
                                <span className='icon'></span>
                                <span className='text'>nurulhuda22dev@gmail.com</span>
                            </li>
                            <li>
                                <span className='icon'></span>
                                <span className='text'>www.mywebsite.com</span>
                            </li>
                            <li>
                                <span className='icon'></span>
                                <span className='text'>www.linkedin.com</span>
                            </li>
                            <li>
                                <span className='icon'></span>
                                <span className='text'>Bangladesh</span>
                            </li>
                        </ul>
                    </div>
                    <div className='contactInfo education'>
                        <h3 className='title'>Education</h3>
                        <ul>
                            <li>
                                <h5>2011-2012</h5>
                                <h4>SSC</h4>
                                <h4>School Name</h4>
                            </li>
                            <li>
                                <h5>2013-2015</h5>
                                <h4>Intermediate complete</h4>
                                <h4>College name</h4>
                            </li>
                            <li>
                                <h5>2019-2022</h5>
                                <h4>BBS final year</h4>
                                <h4>College name</h4>
                            </li>
                        </ul>
                    </div>
                    <div className='contactInfo languag'>
                        <h3 className='title'>Languag</h3>
                        <ul>
                            <li>
                                <span className='text'>English</span>
                                <span className='percent'>
                                    <div className='languag-skill1'></div>
                                </span>
                            </li>
                            <li>
                                <span className='text'>Bangla</span>
                                <span className='percent'>
                                    <div className='languag-skill2'></div>
                                </span>
                            </li>
                            <li>
                                <span className='text'>Hindi</span>
                                <span className='percent'>
                                    <div className='languag-skill3'></div>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='right-side'>
                    <div className='about'>
                        <h2 className='title2'>Profile</h2>
                        <p className='profile-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /><br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className='about'>
                        <h2 className='title2'>Experience</h2>
                        <div className='box'>
                            <div className='year-company'>
                                <h5>2019 - Present</h5>
                                <h5>Company Name</h5>
                            </div>
                            <div className='text'>
                                <h4>Senior UX Designer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='year-company'>
                                <h5>2016 - 2019</h5>
                                <h5>Company Name</h5>
                            </div>
                            <div className='text'>
                                <h4>UX/UI Designer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='year-company'>
                                <h5>2014 - 2016</h5>
                                <h5>Company Name</h5>
                            </div>
                            <div className='text'>
                                <h4>Junior UX Designer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className='about skill'>
                        <h2 className='title2'>Professional Skill</h2>
                        <div className='box'>
                            <h4>Html</h4>
                            <div className='percent'>
                                <div className='work-skill1'></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h4>Css</h4>
                            <div className='percent'>
                            <div className='work-skill2'></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h4>Bootstrap 5</h4>
                            <div className='percent'>
                            <div className='work-skill3'></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h4>Tailwind Css</h4>
                            <div className='percent'>
                            <div className='work-skill4'></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h4>JavaScript</h4>
                            <div className='percent'>
                            <div className='work-skill5'></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h4>React.js</h4>
                            <div className='percent'>
                            <div className='work-skill6'></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h4>Node.jS</h4>
                            <div className='percent'>
                            <div className='work-skill7'></div>
                            </div>
                        </div>
                        <div className='box'>
                            <h4>Mongo DB</h4>
                            <div className='percent'>
                            <div className='work-skill8'></div>
                            </div>
                        </div>
                    </div>
                    <div className='about interest'>
                        <h2 className='title2'>Interest</h2>
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

export default Resume;