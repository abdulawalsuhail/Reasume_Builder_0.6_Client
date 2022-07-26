import React from 'react';
import CarrerGuide from './CarrerGuide';
import CouncellingBanner from './CouncellingBanner';
import CounsellingServices from './CounsellingServices';

const CarrerConselling = () => {
    return (
        <div>
          <CouncellingBanner/>
          <CounsellingServices/>
          <CarrerGuide/>
        </div>
    );
};

export default CarrerConselling;