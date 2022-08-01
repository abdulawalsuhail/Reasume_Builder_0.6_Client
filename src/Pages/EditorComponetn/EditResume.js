import React from "react";
import { Link, Outlet } from "react-router-dom";

const EditResume = () => {
  const editResumeSidebar = (
    <>
      <li className=" hover:text-white rounded-md">
        <Link
          className="hover:bg-primary rounded uppercase pl-2 pr-2 mx-2"
          to="/resume-builder/contact-details"
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col  ">
          <Outlet />
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {editResumeSidebar}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EditResume;
