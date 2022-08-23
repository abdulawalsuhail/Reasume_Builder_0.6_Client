import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import auth from "../../../firebase.init";
import axiosPrivate from "../../Api/axiosPrivate";
import AdminConvarsation from "./ConvarSation/AdminConvarsation";
import Message from "./Message/Message";
import StartConverSatio from "./StartConverSation/StartConverSatio";

const AdminChat = () => {
  const [admins, setAdmin] = useState([]);
  const [currentChat,setCurrentChat] = useState(null)

  const { data, isLoading, refetch } = useQuery(["admin"], () => {
    axiosPrivate
      .get("/admin?role=admin")
      .then((res) => {
        setAdmin(res.data);
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status) {
          signOut(auth);
          Navigate("/");
          localStorage.removeItem("userToken");
        }
      });
  });

  const handleUserChatView = (admin) => {
    console.log(admin);
    setCurrentChat(admin)
  }
  return (
    <>
      <div className="grid grid-cols-[25%_minmax(70%,_1fr)_100px] h-[100px]">
        <div className="shadow h-[100vh] overflow-y-scroll">
          <h1 className="text-center text-2xl mb-10">All Admin</h1>
          {admins.map((admin) => (
            <AdminConvarsation key={admin._id} admin={admin} handleUserChatView={handleUserChatView} />
          ))}
        </div>
        <div>
         {
          currentChat ? <Message own={false}/> :  <StartConverSatio></StartConverSatio>
         }
        </div>
      </div>
    </>
  );
};

export default AdminChat;
