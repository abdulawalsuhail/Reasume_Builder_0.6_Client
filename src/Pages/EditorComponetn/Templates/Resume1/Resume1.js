import React from 'react';
import './Resume1.css'
import Image from '../Images/image.jpg';
import { useOutletContext } from 'react-router-dom';

const Resume1 = () => {
    const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
    
    return (
        <div className='flex justify-center items-center'>
            <div className='md:w-[50%]'>
            <div className='container grid '>
                <div className='left-side'>
                    <div className='profile-text'>
                        <div className='img-box'>
                            <img src={Image} alt='' />
                        </div>
                        <h2>{usersTemplateInfo[0]?.value[0]?.firstName} <span className='mx-1'></span>   {usersTemplateInfo[0]?.value[1]?.lastName}</h2>
                    </div>
                    <div className='contactInfo'>
                        <h3 className='title'>{usersTemplateInfo[0]?.name}</h3>
                        <ul>
                            <li>
                                <span className='icon'></span>
                                <span className='text'>{usersTemplateInfo[0]?.value[3]?.phoneNo}</span>
                            </li>
                            <li>
                                <span className='icon'></span>
                                <span className='text'>{usersTemplateInfo[0]?.value[8]?.email}</span>
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
                        <h3 className='title'>{usersTemplateInfo[2]?.name}</h3>
                        {/* onekgula education hobe pore map kore value bosate hobe */}
                        <ul>
                            <li>
                                <h5>{usersTemplateInfo[2]?.value[0].name}</h5>
                                <h4>{usersTemplateInfo[2]?.value[0]?.value?.schoolName}</h4>
                                <h4>{usersTemplateInfo[2]?.value[0]?.value?.country},{usersTemplateInfo[2]?.value[0]?.value?.city},{usersTemplateInfo[2]?.value[0]?.value?.state}</h4>
                                <h4>{usersTemplateInfo[2]?.value[0]?.value?.graduationYear},{usersTemplateInfo[2]?.value[0]?.value?.graduationMonth}</h4>
                            </li>
                        </ul>
                    </div>
                    {/* Languages area */}
                    <div className='contactInfo language'>
                        <h3 className='title'>{usersTemplateInfo[5]?.name}</h3>
                        <ul>
                            {usersTemplateInfo[5]?.value.map((language) => (
                                <div>
                                    <li>
                                        <span className='text'>{language}</span>
                                        <span className='percent'>
                                            <div className='languag-skill1'></div>
                                        </span>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='right-side'>
                    {/* Reference area */}
                    <div className='about'>
                        <h2 className='title2'>{usersTemplateInfo[6]?.name}</h2>
                        <p className='profile-description'>{usersTemplateInfo[6]?.value}</p>
                    </div>
                    {/* Experience area */}
                    <div className='about'>
                        <h2 className='title2'>{usersTemplateInfo[1]?.name}</h2>
                        <div className='box'>
                            {
                                usersTemplateInfo[1]?.value.map(experience => (
                                    <>
                                        <div className='year-company'>
                                            <h5>{usersTemplateInfo[1]?.value[0]?.value?.startYear}-{usersTemplateInfo[1]?.value[0]?.value?.endYear}</h5>
                                            <h5>{usersTemplateInfo[1]?.value[0]?.value?.companyName}</h5>
                                        </div>
                                        <div className='text'>
                                            <h4>{usersTemplateInfo[1]?.value[0]?.value?.jobTitle}</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                    {/* skills area */}
                    <div className='about skill'>
                        <h2 className='title2'>{usersTemplateInfo[4]?.name}</h2>
                        {
                            usersTemplateInfo[4]?.value.map(skill => (
                                <div className='box'>
                                    <h4>{skill}</h4>
                                    <div className='percent'>
                                        <div className='work-skill1'></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* Interest are */}

                    {/* <div className='about interest'>
                        <h2 className='title2'>Interest</h2>
                        <ul>
                            <li>Gaming</li>
                            <li>Singing</li>
                            <li>Reading</li>
                            <li>Cooking</li>
                        </ul>
                    </div> */}
                </div>
            </div>
            </div>
            <div className='md:w-[30%] flex flex-col'>
                <div className='mb-12 text-center'>
                    <h1 className='text-4xl font-bold text-slate-700'>Hy! Download your awesome Resume Now</h1>
                </div>
                <button className='btn btn-md btn-accent w-[50%] mx-auto hover:text-primary'>Download</button>
            </div>
        </div>
    );
};

export default Resume1;




// import React from 'react';
// import { useOutletContext } from 'react-router-dom';

// const Resume1 = () => {
//     const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
//     const setData = () => {
//         const pretty = JSON.stringify(usersTemplateInfo, undefined, 4);
//         document.getElementById("getData").value = pretty;
//         console.log("pretty", pretty);
//     }
//     return (
//         <div className='p-12'>
//             <textarea className="text-pink-700" name="" id="getData" cols="100" rows="20"></textarea><br />
//             <button className='btn btn-primary' onClick={()=>setData()}>Show data</button>
//         </div>
//     );
// };

// export default Resume1;