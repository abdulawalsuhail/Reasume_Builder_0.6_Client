import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import CareerCustomNavbar from "./CarrerCustomNavar/CareerCustomNavbar";

const CarrerNav = () => {
  const articleMenu = (
    <>
      <CareerCustomNavbar
        to="/career-counselling"
        className="text-gray-600 uppercase font-[600] ml-4"
      >
        Counselling
      </CareerCustomNavbar>
      <CareerCustomNavbar
        to="/career-counselling/all-article"
        className="text-gray-600 uppercase font-[600] ml-4"
      >
        All Articles
      </CareerCustomNavbar>
      <CareerCustomNavbar
        to="/career-counselling/resume-write"
        className="text-gray-600 uppercase font-[600] ml-4"
      >
        resume Writing
      </CareerCustomNavbar>
      <CareerCustomNavbar
        to="/career-counselling/cv-write"
        className="text-gray-600 uppercase font-[600] ml-4"
      >
        cv Writing
      </CareerCustomNavbar>
      <CareerCustomNavbar
        to="/career-counselling/inspiring-stories"
        className="text-gray-600 uppercase font-[600] ml-4"
      >
        inspiring stories
      </CareerCustomNavbar>
      <CareerCustomNavbar
        to="/career-counselling/interview-preparation"
        className="text-gray-600 uppercase font-[600] ml-4"
      >
        interview preparation
      </CareerCustomNavbar>
    </>
  );
  return (
    <>
      <div class="navbar bg-base-100">
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
              {articleMenu}
            </ul>
          </div>
          <Link to="/">
            <img className="w-14" src={logo} alt="" />
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{articleMenu}</ul>
        </div>
        <div class="navbar-end">
          <a class="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default CarrerNav;
