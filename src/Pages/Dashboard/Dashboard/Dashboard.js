import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsChatLeftText } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaChalkboardTeacher, FaFirstOrder, FaHistory } from 'react-icons/fa';
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineEdit, MdReviews } from "react-icons/md";
import { RiAdminLine, RiFileUserLine } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import "../../../Css/CarrerCounceling.css";
import auth from "../../../firebase.init";
import useAdmin from "../../../Hook/useAdmin";
import useExpert from "../../../Hook/useExpert";
import UserInformation from "../../../Hook/UserInformation";
import "../Dashboard/Dashboard.css";
import DashboardCustomLink from "../DashBoardCustomLink/DashboardCustomLink";


const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [expert] = useExpert(user);
  const [users] = UserInformation(user);
  return (
    <>
      <Navbar />
      <div class="drawer drawer-mobile  bg-[#f6f5f8]">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content no-scroll  ">
          {/* <!-- Page content here --> */}

          <Outlet />
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side md:px-6 lg:shadow-2xl mr-6">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu overflow-y-auto  w-52 bg-[#f8f8fa] mb-4">
            <DashboardCustomLink
              className="flex items-center py-3 text-gray-500 "
              to="/dashboard"
            >
              <CgProfile className=" ml-2 text-[20px] mr-2 " />
              <span className="uppercase font-bold text-gray-700">Profile</span>
            </DashboardCustomLink>
            {admin && (
              <>
                <DashboardCustomLink
                  className="flex items-center py-3 text-gray-500 "
                  to="/dashboard/all-user"
                >
                  <HiUserGroup className=" ml-2 text-[20px] mr-2 " />
                  <span className="uppercase font-bold text-gray-700">
                    All user
                  </span>
                </DashboardCustomLink>
                <DashboardCustomLink
                  className="flex items-center py-3 text-gray-500 "
                  to="/dashboard/all-admin"
                >
                  <RiAdminLine className=" ml-2 text-[20px] mr-2 " />
                  <span className="uppercase font-bold text-gray-700">
                    All Admin
                  </span>
                </DashboardCustomLink>
                <DashboardCustomLink
                  className="flex items-center py-3 text-gray-500 "
                  to="/dashboard/chat"
                >
                  <BsChatLeftText className=" ml-2 text-[20px] mr-2 " />
                  <span className="uppercase font-bold text-gray-700">
                    Chat
                  </span>
                </DashboardCustomLink>
                <DashboardCustomLink
                  className="flex items-center py-3 text-gray-500 "
                  to="/dashboard/booking-service"
                >
                  <FaFirstOrder className=" ml-2 text-[20px] mr-2 " />
                  <span className="uppercase font-bold text-gray-700">
                    BOOKING SERVICE
                  </span>
                </DashboardCustomLink>
                <DashboardCustomLink
                  className="flex items-center py-3 text-gray-500 "
                  to="/dashboard/all-expert"
                >
                  <FaChalkboardTeacher  className=" ml-2 text-[20px] mr-2 "/>
                  <span className="uppercase font-bold text-gray-700">
                    {" "}
                    All-Expert
                  </span>
                </DashboardCustomLink>
              </>
            )}
            {expert && (
              <>
                <DashboardCustomLink
                  className="flex items-center py-3 text-gray-500 "
                  to="/dashboard/write-blog"
                >
                  <MdOutlineEdit className=" ml-2 text-[20px] mr-2 " />
                  <span className="uppercase font-bold text-gray-700">
                    {" "}
                    Write Blog
                  </span>
                </DashboardCustomLink>
                <DashboardCustomLink
                  className="flex items-center py-3 text-gray-500 "
                  to="/dashboard/my-blog-post"
                >
                  <RiFileUserLine className=" ml-2 text-[20px] mr-2 " />
                  <span className="uppercase font-bold text-gray-700">
                    {" "}
                    My Blog post
                  </span>
                </DashboardCustomLink>
              </>
            )}
            {!admin && (
              <>
                 <DashboardCustomLink
                  className="flex items-center py-3 text-gray-500 "
                  to="/dashboard/order"
                >
                  <FaHistory className=" ml-2 text-[20px] mr-2 " />
                  <span className="uppercase font-bold text-gray-700">
                    {" "}
                    Order History
                  </span>
                </DashboardCustomLink>
                 <DashboardCustomLink
                  className="flex items-center py-3 text-gray-500 "
                  to="/dashboard/add-review"
                >
                  <MdReviews className=" ml-2 text-[20px] mr-2 " />
                  <span className="uppercase font-bold text-gray-700">
                    {" "}
                    Add-Review
                  </span>
                </DashboardCustomLink>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
