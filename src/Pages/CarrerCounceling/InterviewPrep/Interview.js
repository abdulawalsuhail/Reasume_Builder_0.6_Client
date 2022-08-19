import React, { useState } from "react";
import axiosPrivate from "../../Api/axiosPrivate";
import InterviewCard from "./InterviewCard";

const Interview = () => {
  const [interviews,setInterviews] = useState([])
  axiosPrivate.get('/all-blog?blogType=interview-prep')
  .then(res => {
    setInterviews(res.data)
  })
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-black-300 text-center mt-8">
        All Interview Tips
      </h1>
      <div className=" m-12">
        <hr className=" " style={{ height: "2px", background: "#c6c6c6" }} />
      </div>
      <div className="md:grid grid-cols-2 px-12">
      {
        interviews.map(interview => <InterviewCard key={interview._id} interview={interview}/>)
      }
    </div>
    </div>
  );
};

export default Interview;
