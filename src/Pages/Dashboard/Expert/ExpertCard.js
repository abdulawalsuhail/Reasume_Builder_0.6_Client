import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import axiosPrivate from "../../Api/axiosPrivate";

const ExpertCard = ({ expert,currentUser }) => {
  const { img, name, _id } = expert;
  const [user] = useAuthState(auth)
  const [users, setUsers] = useState({});
  console.log();





  const navigate = useNavigate()
  const handleMessage = (msgId) => {
    if (currentUser) {
      axiosPrivate
        .post("/admin/chat", {
          senderId: currentUser,
          receiverId: msgId,
        })
        .then((res) => {
         
          if(res.data){
            navigate("/dashboard/chat");
          }
        });
    }
  };
  return (
    <div>
      <a className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={img} alt="" />
          </div>
        </div>

        <h3 className="mt-3 mb-2 text-xl font-bold text-left capitalize ">
          {name}
        </h3>

        <button
          onClick={()=> handleMessage(_id)}
          className="btn btn-primary text-white"
        >
          Start Chat
        </button>
      </a>
    </div>
  );
};

export default ExpertCard;
