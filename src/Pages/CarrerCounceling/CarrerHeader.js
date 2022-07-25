import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import logo from "../../../src/assets/logo.png";

const CarrerHeader = () => {
  return (
    <div>
      {/* sidebar */}
      <div class="drawer drawer-end">
        <input id="career-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <div className="px-4 bg-[#f4f7f8]">
            {/* Navbar start source code from Daisy UI */}
            <div class="navbar py-4">
              {/* Navbar left portion */}
              <div class="navbar-start">
                <div class="dropdown">
                  <ul
                    tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  ></ul>
                </div>
                <div className="flex items-center">
                  <img className="w-14" src={logo} alt="logo" />
                  <div className="flex gap-2 text-xl">
                    <p>Resume</p>
                    <p>Builder</p>
                  </div>
                </div>
              </div>
              {/* End Navbar left Portion */}

              {/* Navbar center portion */}
              <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0"></ul>
              </div>
              {/* End Navbar center portion */}

              {/* Navbar end portion */}
              <div class="navbar-end">
                <label
                  htmlFor="career-drawer"
                  class=" swap swap-rotate"
                >
                  <input type="checkbox" />

                <AiOutlineMenu className="text-4xl"></AiOutlineMenu>
                </label>
              </div>
              {/* End navbar end portion */}
            </div>
          </div>
        </div>
        <div class="drawer-side">
          <label for="career-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <label
              htmlFor="career-drawer"
              class=" btn-circle swap swap-rotate"
            >
              <MdCancel className="text-4xl"></MdCancel>
            </label>
            <li>
              <span>Sidebar Item 1</span>
            </li>
            <li>
              <span>Sidebar Item 2</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarrerHeader;
