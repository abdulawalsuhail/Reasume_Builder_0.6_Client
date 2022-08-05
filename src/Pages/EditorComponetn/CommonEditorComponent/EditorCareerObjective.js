import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import EditorComponent from "./EditorComponent";

const EditorCareerObjective = () => {
  const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
  const [editorValue, setEditorValue] = useState("");
  const getCustomEditorValue = (editorValue) => {
    setEditorValue(editorValue);
  };

  const navigate = useNavigate();

  let str = {};
  const getValue = () => {
    // console.log(editorValue);
    str.careerObjectives = editorValue;

    setUsersTemplateInfo([...usersTemplateInfo, str]);
    navigate("/resume-builder/reference/should_add_reference");
    console.log(str);
  };

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
          onClick={() => navigate("/resume-builder/languages")}
          href="#_"
          class="relative editor-btn inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all group md:px-24 px-10 text-lg rounded-full border-[1px] border-solid border-gray-400 text-black"
        >
          <span class="relative w-full  text-left ">Back</span>
        </a>
        <a
          onClick={getValue}
          href="#_"
          class="relative inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all bg-primary group md:px-24 px-10 text-lg rounded-full text-white hover:bg-[#3ba6d4]"
        >
          <span class="relative w-full  text-left ">Continue</span>
        </a>
      </div>
    </div>
  );
};

export default EditorCareerObjective;
