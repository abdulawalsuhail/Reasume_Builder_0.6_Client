import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import UserInformation from "../../../../Hook/UserInformation";
import axiosPrivate from "../../../Api/axiosPrivate";
import ChatBox from "../ChatBox/ChatBox";
import Conversation from "../Conversation/Conversation";
import "./Chat.css";

const Chat = () => {
  const [user] = useAuthState(auth);
  const [users] = UserInformation(user);
  const [chats, setChat] = useState([]);
  const [currentChat,setCurrentChat] = useState(null)

  useEffect(() => {
    const getChats = () => {
      try {
        axiosPrivate.get(`/admin/chat/${users?._id}`).then((res) => {
          setChat(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [users]);

  return (
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        {/* <LogoSearch /> */}
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div onClick={()=> setCurrentChat(chat)}>
                <Conversation
                  key={chat._id}
                  data={chat}
                  currentUserId={users?._id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
        </div>
        <ChatBox
        chat={currentChat}
        currentUserId={users?._id}
        />
      </div>
    </div>
  );
};

export default Chat;
