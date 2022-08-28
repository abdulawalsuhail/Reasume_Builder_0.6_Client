import React from 'react';
import generate from '../../assets/CVSectionImages/generate.webp'

const GenerateDoc = () => {
    return (
        <div className='bg-slate-50'>
            <div className='md:mx-32'>
                <div class="hero">
                    <div class="hero-content flex-col-reverse lg:flex-row-reverse">
                        <div className='md:mt-16 md:ml-12'>
                            <h1 class="text-center md:text-left text-xl md:text-3xl">Generate your CV/ Resume/ Cover Letter in PDF or TXT</h1>
                            <p class="py-6 md:text-lg text-justify">You need your CV in a PDF format so that you keep the nice design you’ve just created. And, if you simply want to export the text, you can download your CV in a TXT format.</p>
                        </div>
                        <img src={generate} class="max-w-xs rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenerateDoc;