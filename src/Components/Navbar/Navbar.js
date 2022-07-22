import React from "react";
import logo from "../../../src/assets/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navItem = (
    <>
      <li className="hover:bg-primary hover:text-white rounded-md">
        <a>FEATURE</a>
      </li>
      <li className="hover:bg-primary hover:text-white rounded-md">
        <a>RESUME</a>
      </li>
      <li className="hover:bg-primary hover:text-white rounded-md">
        <a>CV</a>
      </li>
      <li className="hover:bg-primary hover:text-white rounded-md">
        <a>COVER LETTER</a>
      </li>
      <li className="hover:bg-primary hover:text-white rounded-md">
        <a>CAREER COUNSELLING</a>
      </li>
      <li className="hover:bg-primary hover:text-white rounded-md">
        <a>PRICING</a>
      </li>
      <a class="btn btn-primary btn-outline btn-sm md:btn-md mr-6 md:hidden">
        Create My Resume
      </a>
    </>
  );

  return (
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
              {navItem}
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
          <ul class="menu menu-horizontal p-0">{navItem}</ul>
        </div>
        {/* End Navbar center portion */}

        {/* Navbar end portion */}
        <div class="navbar-end">
          <a class="btn btn-primary btn-outline btn-sm md:btn-md hidden md:flex">
            <p>Create My Resume</p>
          </a>
          {user ? (
            <div class="dropdown dropdown-end ml-2">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabindex="0"
                class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a class="justify-between">
                    Profile
                    <span class="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <p
                    onClick={async () => {
                      await signOut(auth);
                      toast.success("Sign Out Successfully");
                    }}
                  >
                    Sign Out
                  </p>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              class="btn btn-secondary btn-xs md:btn-md ml-2 modal-button"
            >
              Login
            </Link>
          )}
        </div>
        {/* End navbar end portion */}
      </div>
    </div>
  );
};

export default Navbar;
