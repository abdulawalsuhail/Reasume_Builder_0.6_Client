import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import ContentSuggestions from '../CommonTemplateSections/ContentSuggestions';
import DownloadSteps from '../CommonTemplateSections/DownloadSteps';
import DragDrop from '../CommonTemplateSections/DragDrop';
import GenerateDoc from '../CommonTemplateSections/GenerateDoc';
import ImportDoc from '../CommonTemplateSections/ImportDoc';
import ProfessionalTemplate from '../CommonTemplateSections/ProfessionalTemplate';
import Quotation from '../CommonTemplateSections/Quotation';
import TemplateBanner from '../CommonTemplateSections/TemplateBanner';
import Resume from '../Home/Templates/Resume';

const ResumeTemplate = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='md:pt-6 text-gray-700'>
                <h1 class="text-2xl md:text-5xl font-bold ml-12 my-8 text-center">Online Resume Maker</h1>
                <TemplateBanner/>
                {/* Cv section */}
                <div className=' 2xl:w-3/4 mx-auto'>
                    <h1 className='text-center text-xl md:text-4xl font-bold mt-24 pb-24 px-2'>Create a Resume online. First, select a template:</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:mx-16">
                        <Resume/>
                    </div>
                </div>
                {/* Quotation */}
                <Quotation/>
                {/* Download cv in 4 steps */}
                <div className='bg-slate-100 px-12 md:py-24'>
                    <h1 className='text-xl md:text-4xl font-bold mb-16 text-center'>Download your Resume in 4 simple steps</h1>
                    <DownloadSteps/>
                </div>
                {/* Learning curve */}
                <div className='bg-slate-50 py-12 md:pt-32'>
                    <div className='md:mx-32'>
                        <h1 className='text-xl md:text-4xl font-bold text-center md:pb-20'>A Resume Builder with no learning curve:</h1>
                        <ProfessionalTemplate/>
                    </div>
                </div>
                {/* Drag and Drop CV builder */}
                <DragDrop/>
                {/* Content Suggest */}
                <ContentSuggestions/>
                {/* Generate your Cv in pdf or text */}
                <GenerateDoc/>
                {/* Import your old CV or LinkedIn profile */}
                <ImportDoc/>
            </div>
        </div>
    );
};

export default ResumeTemplate;