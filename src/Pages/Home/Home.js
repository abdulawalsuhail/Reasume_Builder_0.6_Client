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
      <Business />
      <Footer />
    </div>
  );
};

export default Home;
