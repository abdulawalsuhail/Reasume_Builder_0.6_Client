import React from 'react';
import professionalCV from '../../assets/CVSectionImages/professionalCV.webp'

const ProfessionalTemplate = () => {
    return (
        <div class="hero">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={professionalCV} class="max-w-sm rounded-lg" />
                <div>
                <h1 class="text-3xl">Professional CV/ Resume/ Cover Letter templates for every industry</h1>
                <p class="py-6 text-lg">You'll get to choose between 11 fully editable templates. You can pick one depending on the industry you work in, your level of experience, or the culture of the company you're applying to.</p>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalTemplate;