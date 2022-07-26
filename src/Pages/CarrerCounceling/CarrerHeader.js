import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../src/assets/logo.png";

const CarrerHeader = () => {
  const [click,setClick]  = useState(false)

  const articleMenu = (
    <>
      <li className=" hover:text-white rounded-md">
        <Link className="hover:bg-primary rounded uppercase pl-2 pr-2 mx-2" to="/career-counselling">
          Counselling
        </Link>
      </li>
      <li className=" hover:text-white rounded-md">
        <Link className="hover:bg-primary rounded uppercase pl-2 pr-2 mx-2" to="/career-counselling/all-article">
          All Articles
        </Link>
      </li>
      <li className=" hover:text-white rounded-md">
        <Link className="hover:bg-primary rounded uppercase pl-2 pr-2 mx-2" to="/career-counselling/resume-write">
          resume Writing
        </Link>
      </li>
      <li className=" hover:text-white rounded-md">
        <Link className="hover:bg-primary rounded uppercase pl-2 pr-2 mx-2" to="/career-counselling/cv-write">
          cv Writing
        </Link>
      </li>
      <li className=" hover:text-white rounded-md">
        <Link className="hover:bg-primary rounded uppercase pl-2 pr-2 mx-2" to="/career-counselling/inspiring-stories">
            inspiring stories
        </Link>
      </li>
      <li className=" hover:text-white rounded-md">
        <Link className="hover:bg-primary rounded uppercase pl-2 pr-2 mx-2" to="/career-counselling/interview-preparation">
            interview preparation
        </Link>
      </li>
    </>
  );
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
                <Link to="/">
                <div className="flex items-center">
                

               <img className="w-14" src={logo} alt="logo" /> 
              
                  <div className="flex gap-2 text-xl">
                    <p>Resume</p>
                    <p>Builder</p>
                  </div>
                </div>
                </Link>
              </div>
              {/* End Navbar left Portion */}

              {/* Navbar center portion */}
              <div class="navbar-center  ml-[85px] hidden lg:flex">
                <ul class="menu horizontal">{click ? "": articleMenu}</ul>
              </div>
              {/* End Navbar center portion */}

              <div class="navbar navbar-end">
                <label htmlFor="career-drawer" class=" swap swap-rotate">
                  <input type="checkbox" />

                  <AiOutlineMenu onClick={()=> setClick(!false)} className="text-4xl"></AiOutlineMenu>
                </label>
              </div>
            </div>
          </div>
            <Outlet/>
        </div>
        <div class="drawer-side">
          <label for="career-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-[#f4f7f8] text-base-content">
            <label htmlFor="career-drawer" class=" btn-circle swap swap-rotate">
              <MdCancel onClick={()=> setClick(false) } className="text-4xl"></MdCancel>
            </label>
            {articleMenu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarrerHeader;
