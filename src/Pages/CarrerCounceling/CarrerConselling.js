import React from 'react';
import CarrerCouncelingPrice from './CarrerCouncelingPrice';
import CarrerGuide from './CarrerGuide';
import CouncellingBanner from './CouncellingBanner';
import CouncellingSteps from './CouncellingSteps';
import CounsellingServices from './CounsellingServices';

const CarrerConselling = () => {
    return (
        <div>
          <CouncellingBanner/>
          <CounsellingServices/>
          <CarrerGuide/>
          <CouncellingSteps/>
          <CarrerCouncelingPrice></CarrerCouncelingPrice>
        </div>
    );
};

export default CarrerConselling;