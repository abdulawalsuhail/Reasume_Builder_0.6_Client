import React from "react";
import profileImg from "../../../assets/icon/profile.png";

const AdminMessage = () => {
  return (
    <div>
      <div className="flex items-center">
        <img className="w-[50px]" src={profileImg} alt="" />
        <h2 className="text-[15px] capitalize font-[500]">Shariar Hossain</h2>
      </div>
    </div>
  );
};

export default AdminMessage;
