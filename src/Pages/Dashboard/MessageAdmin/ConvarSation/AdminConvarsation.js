import React, { useEffect, useState } from "react";
import profileImg from "../../../../assets/icon/profile.png";
import axiosPrivate from "../../../Api/axiosPrivate";
import "./ConverSation.css";

const AdminConvarsation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (currentUser?._id) {
      const adminId = conversation.members.find((m) => m !== currentUser._id);
      const getUser = () => {
        axiosPrivate.get(`/getuser?userId=${adminId}`).then((res) => {
          setUser(res.data);
        });
      };
      getUser();
    }
  }, [conversation, currentUser]);


  return (
    <div className="conversation gap-2">
      {user?.img ? (
        <div class="avatar ">
          <div class="w-10 rounded-full">
            <img src={user?.img} />
          </div>
        </div>
      ) : (
        <div class="avatar offline">
          <div class="10 rounded-full">
            <img src={profileImg} />
          </div>
        </div>
      )}
      <span className="conversationName">{user?.name}</span>
    </div>
  );
};

export default AdminConvarsation;
