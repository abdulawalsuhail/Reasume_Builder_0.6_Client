import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { FaHammer } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { TbFileCertificate } from "react-icons/tb";
import { FaMagic } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { HiFlag } from "react-icons/hi";
import { BiLink } from "react-icons/bi";
import EditorNavbar from "./CommonEditorComponent/EditorNavbar";

const EditResume = () => {
  const [usersTemplateInfo, setUsersTemplateInfo] = useState([]);
  const editResumeSidebar = (
    <>
      <li className=" hover:text-white ">
        <NavLink
          className="hover:bg-primary uppercase  mx-2 poppins-r"
          to="/resume-builder/editor-contact"
        >
          <IoMdContact className="-mr-1 text-[20px]" />
          Contact
        </NavLink>
      </li>
      <li className=" hover:text-white rounded-md">
        <NavLink
          className="hover:bg-primary uppercase pr-2 mx-2 poppins-r"
          to="/resume-builder/editor-experience"
        >
          <FaHammer className="-mr-1 text-[20px]" />
          Experience
        </NavLink>
      </li>
      <li className=" hover:text-white rounded-md">
        <NavLink
          className="hover:bg-primary poppins-r uppercase pr-2 mx-2"
          to="/resume-builder/editor-education"
        >
          <FaBook className="-mr-1 text-[16px]" />
          Education
        </NavLink>
      </li>
      <li className=" hover:text-white rounded-md">
        <NavLink
          className="hover:bg-primary poppins-r uppercase pr-2 mx-2"
          to="/resume-builder/certifications"
        >
          <TbFileCertificate className="-mr-1 text-[20px]" />
          Certifications
        </NavLink>
      </li>
      <li className=" hover:text-white rounded-md">
        <NavLink
          className="hover:bg-primary poppins-r uppercase pr-2 mx-2"
          to="/resume-builder/additional-skills"
        >
          <FaMagic className="-mr-1 text-[16px]" />
          Additional Skills
        </NavLink>
      </li>
      <li className=" hover:text-white rounded-md">
        <NavLink
          className="hover:bg-primary poppins-r uppercase pr-2 mx-2"
          to="/resume-builder/languages"
        >
          <MdLanguage className="-mr-1 text-[20px]" />
          Languages
        </NavLink>
      </li>
      <li className=" hover:text-white rounded-md">
        <NavLink
          className="hover:bg-primary poppins-r uppercase pr-2 mx-2"
          to="/resume-builder/career-objective"
        >
          <HiFlag className="-mr-1 text-[20px]" />
          Career Objective
        </NavLink>
      </li>
      <li className=" hover:text-white rounded-md">
        <NavLink
          className="hover:bg-primary poppins-r uppercase pr-2 mx-2"
          to="/resume-builder/reference/should_add_reference"
        >
          <BiLink className="-mr-1 text-[20px]" />
          Reference
        </NavLink>
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
          <Outlet context={[usersTemplateInfo, setUsersTemplateInfo]} />
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
