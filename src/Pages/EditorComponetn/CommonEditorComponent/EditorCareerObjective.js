import React, { useState } from "react";
import career from "../../../assets/career-objective.png";
import EditorComponent from "./EditorComponent";

const EditorCareerObjective = () => {
  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };

  return (
    <div className="">
      <div className="md:mx-10">
        {" "}
        <h1 className="text-4xl font-[700] text-[#4a4a4a] mb-10">Career Objective</h1>
        <p className="text-[#989898]">
          This section will usually be one of the first things a hiring manager
          reads. It tells them,
        </p>
        <p className="mb-10 text-[#989898]"> “Here's who I am, and here's what I can do for
          your company”.</p>
      </div>
      <div className="md:flex items-center justify-evenly ">
        <div>
          <EditorComponent initialValue="" getValue={getValue} />
        </div>
        <div>
          <img className="hidden md:block h-[400px] w-[500px]" src={career} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EditorCareerObjective;
