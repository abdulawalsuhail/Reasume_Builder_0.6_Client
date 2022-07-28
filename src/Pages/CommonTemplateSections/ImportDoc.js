import React from 'react';
import importCV from '../../assets/CVSectionImages/importCV.webp'

const ImportDoc = () => {
    return (
        <div className='bg-slate-50 pt-20 pb-16'>
            <div className=' mx-32'>
                <div class="hero">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src={importCV} class="max-w-sm rounded-lg" />
                        <div>
                        <h1 class="text-3xl">Import your old CV/ Resume/ Cover Letter or LinkedIn profile</h1>
                        <p class="py-6 text-lg">Starting from scratch can be intimidating, so we added the option to import your CV or your LinkedIn profile. The CV wizard will take care of extracting the content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImportDoc;