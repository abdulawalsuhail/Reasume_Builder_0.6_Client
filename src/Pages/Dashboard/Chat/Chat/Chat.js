import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { io } from "socket.io-client";
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
  const [onlineUsers,setOnlineUsers] = useState([])
  const [senMessage,setSendMessage] = useState(null)
  const [reciveMessage,setReciveMessage] = useState(null)

  const socket = useRef()


// send message
    useEffect(()=>{
        if(senMessage !== null){
            socket.current.emit("send-message",senMessage)
        }
    },[senMessage])

   

 useEffect(()=> {
    socket.current = io("http://localhost:8800");

   if(users?._id){
    socket.current.emit("new-user-add",users?._id)
    socket.current.on("get-users",(users)=>{
        setOnlineUsers(users)
       
    })
   }

 },[users])


  // recive message
  useEffect(()=> {
    socket.current?.on("recieve-message",(data)=> {
        console.log(data);
        setReciveMessage(data)
    })
},[])


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
        setSendMessage={setSendMessage}
        reciveMessage={reciveMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
