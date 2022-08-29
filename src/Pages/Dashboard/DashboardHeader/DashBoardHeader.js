import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const DashBoardHeader = () => {

    
    return (
        <div className="px-6 md:px-20 sticky top-0 z-50 lg:px-24 bg-[#f4f7f8]">
      {/* Navbar start source code from Daisy UI */}
      <div className="navbar py-4">
        {/* Navbar left portion */}
        <div className="navbar-start">
          <div className="dropdown">
            <label htmlFor='dashboard-nav' tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* {navItem} */}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center">
              <img className="w-48" src={logo} alt="logo" />
            </div>
          </Link>
        </div>
        {/* End Navbar left Portion */}

        {/* Navbar center portion */}
        <div className="navbar-center hidden lg:flex">
          {/* <ul className="menu menu-horizontal p-0">{navItem}</ul> */}
        </div>
        {/* End Navbar center portion */}

        {/* Navbar end portion */}
        {/* End navbar end portion */}
      </div>
    </div>
    );
};

export default DashBoardHeader;