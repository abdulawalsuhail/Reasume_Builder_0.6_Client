import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Navbar from "../../Components/Navbar/Navbar";
import Guideline from "./Guideline/Guideline";
import Hero from "./Hero/Hero";
import Review from "./Review/Review";
import Templates from "./Templates/Templates";
import WhyResumeBuilder from "./WhyResumeBuilder/WhyResumeBuilder";
import WriteResume from "./WriteResume/WriteResume";

const Home = () => {
  return (
    <div className="bg-[#f4f7f8]">
      <Navbar/>
      <Hero/>
      <WriteResume/>
      <WhyResumeBuilder />
      <Templates/>
      <Guideline />
      <Review />
      <MessengerCustomerChat
        pageId="105555438910537"
        appId="1225310258009219"
      />
      ,
    </div>
  );
};

export default Home;
