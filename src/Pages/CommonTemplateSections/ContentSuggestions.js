import React from 'react';
import contentSugest from '../../assets/CVSectionImages/contentSugest.webp'

const ContentSuggestions = () => {
    return (
        <div className='bg-slate-50 pt-20'>
            <div className=' md:mx-32'>
                <div class="hero">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src={contentSugest} class="max-w-xs rounded-lg" />
                        <div>
                        <h1 class="text-center md:text-left text-xl md:text-3xl">Content suggestions for a job-winning CV/ Resume/ Cover Letter</h1>
                        <p class="py-6 md:text-lg text-justify">By analyzing your content, our CV maker shows actionable, contextual advice, based on what the experts say. You also get over 10 000 bullet suggestions for different jobs, which you can sort out by level of experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSuggestions;