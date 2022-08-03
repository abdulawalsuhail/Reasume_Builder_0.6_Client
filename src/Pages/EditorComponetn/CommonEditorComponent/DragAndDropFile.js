import React from 'react';
import { useNavigate } from 'react-router-dom';

const DragAndDropFile = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-center text-5xl font-bold'>This page is under construction</h1>
            <button onClick={()=> navigate('/resume-builder/how-to-start')} className='btn btn-primary btn-outline btn-md mt-12'>Back to Home</button>
        </div>
    );
};

export default DragAndDropFile;