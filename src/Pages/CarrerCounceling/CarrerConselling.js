import React from "react";
import Footer from "../../Shared/Footer/Footer";
import CarrerCouncelingGurrenty from "./CarrerCouncelingGurrenty";
import CarrerCouncelingPrice from "./CarrerCouncelingPrice";
import CouncellingBanner from "./CouncellingBanner";
import CouncellingSteps from "./CouncellingSteps";
import CounsellingServices from "./CounsellingServices";

const CarrerConselling = () => {
  return (
    <div>
      <CouncellingBanner />
      <CounsellingServices />
      <CouncellingSteps />
      <CarrerCouncelingGurrenty />
      <CarrerCouncelingPrice />
      <Footer />
    </div>
  );
};

export default CarrerConselling;
