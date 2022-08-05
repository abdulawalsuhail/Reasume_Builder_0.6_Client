import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import EditorComponent from "./EditorComponent";

const EditorCareerObjective = () => {
  const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
  const [editorValue, setEditorValue] = useState("");
  const getCustomEditorValue = (editorValue) => {
    setEditorValue(editorValue);
  };

  const navigate = useNavigate()

  let str = {
    name: "careerObjectives",
    value:[]
  }
  const getValue = () => {
    // console.log(editorValue);
    str.value = [];
    str.value.push(editorValue);
    
    setUsersTemplateInfo([...usersTemplateInfo, str])
    navigate('/resume-builder/reference/should_add_reference');
    console.log(str);
  }

  return (
    <div className="bg-[#f4f7f8] py-6">
      <div className="mx-10">
        {" "}
        <h1 className="text-4xl font-[700] text-[#4a4a4a] mb-10">
          Career Objective
        </h1>
        <p className="text-[#989898]">
          This section will usually be one of the first things a hiring manager
          reads. It tells them,
        </p>
        <p className="mb-10 text-[#989898]">
          {" "}
          “Here's who I am, and here's what I can do for your company”.
        </p>
      </div>

      <div className="mx-10">
        <EditorComponent initialValue="" getValue={getCustomEditorValue} />
      </div>
      <div className="flex items-center justify-center gap-10 mt-12 mb-3">
        <a
        onClick={()=> navigate("/resume-builder/languages")}
          href="#_"
          class="relative inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group md:px-24 px-10 text-lg"
        >
          <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Back
          </span>
        </a>
        <a
          onClick={getValue}
          href="#_"
          class="relative inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group md:px-24 px-10 text-lg"
        >
          <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Continue
          </span>
        </a>
      </div>
    </div>
  );
};

export default EditorCareerObjective;