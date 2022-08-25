import React, { useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { FaHammer } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { TbFileCertificate } from "react-icons/tb";
import { FaMagic } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { HiFlag } from "react-icons/hi";
import { BiLink } from "react-icons/bi";
import EditorNavbar from "./CommonEditorComponent/EditorNavbar";
import logo from "../../assets/logo.png";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import toast from "react-hot-toast";
import { GrDocumentText } from "react-icons/gr";
import { AiFillSignal } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";


const EditResume = () => {
  const [usersTemplateInfo, setUsersTemplateInfo] = useState({});
  const {_id} = useParams();
  console.log("from parent",usersTemplateInfo);
  const editResumeSidebar = (
    <>
      <li className="mb-2 hidden md:block">
        <Link to="/" className="hover:bg-white">
          <div className="flex items-center">
            <img className="w-full" src={logo} alt="logo" />
          </div>
        </Link>
      </li>

      <li className=" hover:text-white mb-2 ">
        <NavLink
          className="hover:bg-primary uppercase  mx-2 poppins-r"
          to={`/resume-builder/${_id}/editor-contact`}
        >
          <IoMdContact className="-mr-1 text-[20px]" />
          Contact
        </NavLink>
      </li>
      <li className=" hover:text-white rounded-md mb-2">
        <NavLink
          className="hover:bg-primary uppercase pr-2 mx-2 poppins-r"
          to={`/resume-builder/${_id}/editor-experience`}
        >
          {/* <FaHammer className="-mr-1 text-[20px]" /> */}
          <AiFillSignal className="-mr-2 text-[20px]"/>
          Experience
        </NavLink>
      </li>
      <li className=" hover:text-white rounded-md mb-2">
        <NavLink
          className="hover:bg-primary poppins-r uppercase pr-2 mx-2"
          to={`/resume-builder/${_id}/editor-education`}
        >
          <FaBook className="-mr-1 text-[16px]" />
          Education
        </NavLink>
      </li>
      <li className=" hover:text-white rounded-md mb-2">
        <NavLink
          className="hover:bg-primary poppins-r uppercase pr-2 mx-2"
          to={`/resume-builder/${_id}/certifications`}
        >
          <TbFileCertificate className="-mr-1 text-[20px]" />
          Certifications
        </NavLink>
      </li>
      <li className=" hover:text-white rounded-md mb-2">
        <NavLink
          className="hover:bg-primary poppins-r uppercase pr-2 mx-2"
          to={`/resume-builder/${_id}/additional-skills`}
        >
          {/* <FaMagic className="-mr-1 text-[16px]" /> */}
          <GiSkills className="-mr-1 text-[16px]"/>
          Additional Skills
        </NavLink>
      </li>
      <li className=" hover:text-white rounded-md mb-2">
        <NavLink
          className="hover:bg-primary poppins-r uppercase pr-2 mx-2"
          to={`/resume-builder/${_id}/languages`}
        >
          <MdLanguage className="-mr-1 text-[20px]" />
          Languages
        </NavLink>
      </li>
      <li className=" hover:text-white rounded-md mb-2">
        <NavLink
          className="hover:bg-primary poppins-r uppercase pr-2 mx-2"
          to={`/resume-builder/${_id}/career-objective`}
        >
          <HiFlag className="-mr-1 text-[20px]" />
          Career Objective
        </NavLink>
      </li>
      <li className=" hover:text-white rounded-md mb-2">
        <NavLink
          className="hover:bg-primary poppins-r uppercase pr-2 mx-2"
          to={`/resume-builder/${_id}/reference`}
        >
          <BiLink className="-mr-1 text-[20px]" />
          Reference
        </NavLink>
      </li>
      <li className=" hover:text-white rounded-md">
        <NavLink
          className="hover:bg-primary poppins-r uppercase pr-2 mx-2"
          to={`/resume-builder/${_id}/template${_id}`}
        >
          <GrDocumentText className="-mr-1 text-[20px]"/>
          Template
        </NavLink>
      </li>
      
    </>
  );
  return (
    <div>
      <EditorNavbar />
      <div class="drawer drawer-mobile md:pt-6">
        <input id="editor-nav" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col bg-[#edf2f591]">
          {/* editor content */}
          <Outlet context={[usersTemplateInfo, setUsersTemplateInfo]} />
        </div>
        <div class="drawer-side bg-[#f9fbfa]">
          <label for="editor-nav" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
            {editResumeSidebar}
           {/*  */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EditResume;

