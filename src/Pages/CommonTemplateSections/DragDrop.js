import React from 'react';
import drag_drop from '../../assets/CVSectionImages/drag-drop.webp'

const DragDrop = () => {
    return (
        <div className='bg-slate-50'>
            <div className='mx-32'>
                <div class="hero">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div className='md:mt-16 md:ml-12'>
                            <h1 class="text-3xl">Drag & drop CV/ Resume/ Cover Letter builder</h1>
                            <p class="py-6 text-lg">Creating your CV doesn't feel like a tough job anymore. Our CV editor helps you make the best use of the space and choose what content to include. With the option to drag-and-drop sections, it's easy to rearrange the template and make it truly yours.</p>
                        </div>
                        <img src={drag_drop} class="max-w-sm rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DragDrop;