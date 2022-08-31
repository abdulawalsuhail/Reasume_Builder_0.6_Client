import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BusinessPartner from "../../Shared/BusinessPartner";
import Footer from "../../Shared/Footer/Footer";
import Business from "./Business/Business";
import Guideline from "./Guideline/Guideline";
import Hero from "./Hero/Hero";
import Review from "./Review/Review";
import Templates from "./Templates/Templates";
import WhyResumeBuilder from "./WhyResumeBuilder/WhyResumeBuilder";
import WriteResume from "./WriteResume/WriteResume";

import FAQ from "../FAQ/FAQ";

import Jump from "../Jump-Start/Jump.js";


const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <BusinessPartner />
      <WriteResume />
      <Templates />
      <Guideline />
      <WhyResumeBuilder />
      <Review />

      <FAQ />


      <Jump />

      <Footer />
    </div>
  );
};

export default Home;
