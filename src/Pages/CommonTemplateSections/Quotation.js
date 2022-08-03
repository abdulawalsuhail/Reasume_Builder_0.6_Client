import React from 'react';
import right from '../../assets/CVSectionImages/rightTick.webp'
import left from '../../assets/CVSectionImages/leftTick.webp'

const Quotation = () => {
    return (
        <div className='flex my-24 justify-between md:mx-24'>
            <div className='flex items-end'><img style={{width:"80px"}} src={left} alt="" /></div>
            <p className=' w-2/3 text-justify md:text-center'><br /><br /> CV Builder will help you create a CV to be proud of. The wizard packs modern templates that people remember. The CV tool guides you through every step of the process, so you can highlight your achievements, attitude, and personality. It’s easy. And, actually, fun! <br /><br />

            Plus,CV tool will encourage you to think beyond the obvious sections like education and work experience. You will build a CV that shows exactly what drives you and what you’re made of. <br /><br />

            CV Builder has helped users stand out even in companies such as Spotify, Tesla, Google, and many others. <br /><br />

            Take a look at all our CV templates, and learn more about in what situations each of them excels. <br /><br /></p>
            <div className='flex items-start'><img style={{width:"80px"}} src={right} alt="" /></div>
        </div>
    );
};

export default Quotation;