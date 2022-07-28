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

const CvTemplate = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='md:pt-6 text-gray-700'>
                <h1 class="text-5xl font-bold ml-12 mt-6">Online CV Maker</h1>
                <TemplateBanner/>
                {/* Cv section */}
                <div>
                    <h1 className='text-center text-4xl font-bold mt-20 pb-12'>Create a CV online. First, select a template:</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-8">
                        <Cv></Cv>
                    </div>
                </div>
                {/* Quotation */}
                <Quotation/>
                {/* Download cv in 4 steps */}
                <div className='bg-slate-100 p-12'>
                    <h1 className='text-4xl font-bold mb-16'>Download your CV in 4 simple steps</h1>
                    <DownloadSteps/>
                </div>
                {/* Learning curve */}
                <div className='bg-slate-50 pt-32'>
                    <div className=' mx-32'>
                        <h1 className='text-4xl font-bold text-center pb-20'>A CV Builder with no learning curve:</h1>
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

export default CvTemplate;