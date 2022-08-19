import React, { useState } from "react";
import axiosPrivate from "../../Api/axiosPrivate";
import ResumeCard from "./ResumeCard";

const CarrerResume = () => {
  const [resumes,setResumes] = useState([])
  axiosPrivate.get('/all-blog?blogType=Resume')
  .then(res => {
    setResumes(res.data)
  })
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-black-300 text-center mt-8">
        Resume Writing
      </h1>
      <div className=" m-12">
        <hr className=" " style={{ height: "2px", background: "#c6c6c6" }} />
      </div>

      <div className="md:grid grid-cols-2 px-12">
      {
        resumes.map(resume => <ResumeCard key={resume._id} resume={resume}/>)
      }
    </div>
    </div>
  );
};

export default CarrerResume;
