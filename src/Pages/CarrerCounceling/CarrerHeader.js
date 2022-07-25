import React from "react";
import logo from "../../../src/assets/logo.png";

const CarrerHeader = () => {
  return (
    <div>
        {/* navbar */}

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
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
            </ul>
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
          <label for="career-drawer" class="drawer-button btn btn-primary">
            Open drawer
          </label>
        </div>
        {/* End navbar end portion */}
      </div>
    </div>
        </div>
        <div class="drawer-side">
          <label for="career-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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
