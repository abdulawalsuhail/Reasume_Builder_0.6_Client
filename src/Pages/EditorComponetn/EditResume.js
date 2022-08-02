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
<<<<<<< HEAD
          to="/resume-builder/certifications">Certifications</Link>
=======
          to="/resume-builder/editor-experience"
        >
          Experience
        </Link>
>>>>>>> d9a1cdf4c19407bdd67c41059dce673362f293ff
      </li>
      <li className=" hover:text-white rounded-md">
        <Link
          className="hover:bg-primary rounded uppercase pl-2 pr-2 mx-2"
<<<<<<< HEAD
          to="/resume-builder/additional-skills">Additional Skills</Link>
      </li>
      <li className=" hover:text-white rounded-md">
        <Link
          className="hover:bg-primary rounded uppercase pl-2 pr-2 mx-2"
          to="/resume-builder/languages">Languages</Link>
=======
          to="/resume-builder/editor-education"
        >
          Education
        </Link>
>>>>>>> d9a1cdf4c19407bdd67c41059dce673362f293ff
      </li>
    </>
  );
  return (
    <div>
      <EditorNavbar />
      <div class="drawer drawer-mobile">
        <input id="editor-nav" type="checkbox" class="drawer-toggle" />
<<<<<<< HEAD
        <div class="drawer-content flex flex-col  bg-[#f4f7f8]">

            {/* editor content */}
=======
        <div class="drawer-content flex flex-col  ">
          {/* editor content */}
>>>>>>> d9a1cdf4c19407bdd67c41059dce673362f293ff
          <Outlet />
        </div>
        <div class="drawer-side">
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
