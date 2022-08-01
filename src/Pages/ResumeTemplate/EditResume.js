import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar';

const EditResume = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    );
};

export default EditResume;