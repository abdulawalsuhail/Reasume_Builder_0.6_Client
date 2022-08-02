import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Business from "./Business/Business";
import Guideline from "./Guideline/Guideline";
import Hero from "./Hero/Hero";
import Review from "./Review/Review";
import Templates from "./Templates/Templates";
import WhyResumeBuilder from "./WhyResumeBuilder/WhyResumeBuilder";
import WriteResume from "./WriteResume/WriteResume";

const Home = () => {
  return (
    <div className="bg-[#f4f7f8]">
      <Navbar />
      <Hero />
      <WriteResume />
      <WhyResumeBuilder />
      <Templates />
      <Guideline />
      <Review />
      <Business />
    </div>
  );
};

export default Home;
