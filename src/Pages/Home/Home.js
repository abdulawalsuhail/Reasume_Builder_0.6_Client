import React from "react";
import Hero from "./Hero/Hero";
import WhyResumeBuilder from "./WhyResumeBuilder/WhyResumeBuilder";
import WriteResume from "./WriteResume/WriteResume";

const Home = () => {
  return (
    <div>
      <Hero />
      <WriteResume />
      <WhyResumeBuilder />
    </div>
  );
};

export default Home;
