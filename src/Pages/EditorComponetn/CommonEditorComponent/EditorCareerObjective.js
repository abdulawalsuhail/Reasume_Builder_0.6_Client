import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import EditorComponent from "./EditorComponent";

const EditorCareerObjective = () => {
  const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
  // const [editorValue, setEditorValue] = useState("");
  // const getCustomEditorValue = (editorValue) => {
  //   setEditorValue(editorValue);
  // };
  const navigate = useNavigate()


  let str = {
    name: "Career Objectives",
    value:{}
  }
  const getValue = () => {
    str.value = document.getElementById("career-objective")?.value;
    setUsersTemplateInfo({...usersTemplateInfo, careerObjective:str})
    navigate('/resume-builder/reference');
    console.log(str);

  }
  // const getValue = () => {
  //   // console.log(editorValue);
  //   str.value = [];
  //   str.value.push(editorValue);
    
  //   setUsersTemplateInfo([...usersTemplateInfo, str])
  //   navigate('/resume-builder/reference/should_add_reference');
  //   console.log(str);
  // }

  return (
    <div className="bg-[#f4f7f8]  mx-auto">
      <div className="w-[390px] md:w-[650px] mt-12 text-center">
        {" "}
        <h1 className="text-4xl font-[700] text-[#4a4a4a] mb-6">
          Career Objective
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          This section will usually be one of the first things a hiring manager
          reads. It tells them,
        </p>
      </div>

      {/* <div className="mx-10">
        <EditorComponent initialValue="" getValue={getCustomEditorValue} />
      </div> */}

      <div>
        <textarea name="career-objective" id="career-objective" placeholder="Write your career objectives" className="p-8 h-[200px] w-[390px] md:w-[650px]"></textarea>
      </div>

      <div className="flex w-[390px] md:w-[650px] justify-center gap-4 md:gap-10 mt-12 mb-3">
        <a
        onClick={()=> navigate("/resume-builder/languages")}
          href="#_"
          class="relative editor-btn inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all group md:px-16 px-10 text-lg rounded-lg border-[1px] border-solid border-gray-400 text-black"
          >
            <span class="relative w-full  text-left ">Back</span>
        </a>
        <a
          onClick={getValue}
          href="#_"
          class="relative inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all bg-primary group md:px-16 px-10 text-lg rounded-lg text-white hover:bg-[#3ba6d4]"
          >
            <span class="relative w-full  text-left ">Save and continue</span>
        </a>
      </div>
    </div>
  );
};

export default EditorCareerObjective;