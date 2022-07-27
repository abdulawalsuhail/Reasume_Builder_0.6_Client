import React from 'react';
import CarrerCouncelingPrice from './CarrerCouncelingPrice';
import CouncellingBanner from './CouncellingBanner';
import CouncellingSteps from './CouncellingSteps';
import CounsellingServices from './CounsellingServices';

const CarrerConselling = () => {
    return (
        <div>
          <CouncellingBanner/>
          <CounsellingServices/>
          <CouncellingSteps/>
          <CarrerCouncelingPrice/>
        </div>
    );
};

export default CarrerConselling;