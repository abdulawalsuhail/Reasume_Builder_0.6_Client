import React from "react";
import { Link, Outlet } from "react-router-dom";
import EditorNavbar from "./CommonEditorComponent/EditorNavbar";

const EditResume = () => {
  const editResumeSidebar = (
    <>
      <li className=" hover:text-white rounded-md">
        <Link
          className="hover:bg-primary rounded uppercase pl-2 pr-2 mx-2"
          to="/resume-builder/editor-contact"
        >
          Contact
        </Link>
      </li>
      <li className=" hover:text-white rounded-md">
        <Link
          className="hover:bg-primary rounded uppercase pl-2 pr-2 mx-2"
          to="/resume-builder/editor-experience"
        >
          Experience
        </Link>
      </li>
      <li className=" hover:text-white rounded-md">
        <Link
          className="hover:bg-primary rounded uppercase pl-2 pr-2 mx-2"
          to="/resume-builder/editor-education"
        >
          Education
        </Link>
      </li>
      <li className=" hover:text-white rounded-md">
        <Link
          className="hover:bg-primary rounded uppercase pl-2 pr-2 mx-2"
          to="/resume-builder/career-objective"
        >
          Career Objective
        </Link>
      </li>
      <li className=" hover:text-white rounded-md">
        <Link
          className="hover:bg-primary rounded uppercase pl-2 pr-2 mx-2"
          to="/resume-builder/reference/should_add_reference"
        >
          Reference
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <EditorNavbar />
      <div class="drawer drawer-mobile">
        <input id="editor-nav" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col  ">
          {/* editor content */}
          <Outlet />
        </div>
        <div class="drawer-side bg-[#f9fbfa]">
          <label for="editor-nav" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
            {editResumeSidebar}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EditResume;
