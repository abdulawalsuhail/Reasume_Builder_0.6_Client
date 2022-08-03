import React from 'react';

import Cv from '../Home/Templates/Cv';
import Navbar from '../../Components/Navbar/Navbar';
import TemplateBanner from '../CommonTemplateSections/TemplateBanner';
import Quotation from '../CommonTemplateSections/Quotation';
import DownloadSteps from '../CommonTemplateSections/DownloadSteps';
import ProfessionalTemplate from '../CommonTemplateSections/ProfessionalTemplate';
import DragDrop from '../CommonTemplateSections/DragDrop';
import ContentSuggestions from '../CommonTemplateSections/ContentSuggestions';
import GenerateDoc from '../CommonTemplateSections/GenerateDoc';
import ImportDoc from '../CommonTemplateSections/ImportDoc';
import Footer from '../../Shared/Footer/Footer';

const CvTemplate = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='md:py-12 text-gray-700'>
                <h1 class="text-2xl md:text-5xl text-center font-bold my-8">Online CV Maker</h1>
                <TemplateBanner/>
                {/* Cv section */}
                <div className='2xl:w-3/4 mx-auto'>
                    <h1 className='text-xl md:text-4xl text-center font-bold px-12 md:px-0 mt-24 pb-24'>Create a CV online. First, select a template:</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:mx-16">
                        <Cv></Cv>
                    </div>
                </div>
                {/* Quotation */}
                <Quotation/>
                {/* Download cv in 4 steps */}
                <div className='bg-slate-100 p-12'>
                    <h1 className='text-2xl md:text-4xl text-center font-bold md:my-16 mb-8'>Download your CV in 4 simple steps</h1>
                    <DownloadSteps/>
                </div>
                {/* Learning curve */}
                <div className='bg-slate-50 pt-12 md:pt-32'>
                    <div className=' md:mx-32'>
                        <h1 className='text-2xl md:text-4xl text-center font-bold pb-4 md:pb-20'>A CV Builder with no learning curve:</h1>
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
            {/* Footer section */}
                <Footer/>
        </div>
    );
};

export default CvTemplate;