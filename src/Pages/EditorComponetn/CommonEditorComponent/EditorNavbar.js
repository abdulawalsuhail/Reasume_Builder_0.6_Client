import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const EditorNavbar = () => {
  
  return (
    <div class="navbar bg-[#f4f7f8] block md:hidden">
      <div class="flex-none">
        <label for="editor-nav" class=" drawer-button lg:hidden">
          <AiOutlineMenu
            className="text-4xl"
          />
        </label>
      </div>
      <div class="flex-1">
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
      {/* <div class="flex-none">
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
      </div> */}
    </div>
  );
};

export default EditorNavbar;
