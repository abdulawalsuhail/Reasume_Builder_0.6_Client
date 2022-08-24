import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { io } from "socket.io-client";
import auth from "../../../../firebase.init";
import UserInformation from "../../../../Hook/UserInformation";
import axiosPrivate from "../../../Api/axiosPrivate";
import ChatInput from "../ChatInput/ChatInput";
import "./Message.css";
import UserMessage from "./UserMessage";

const Message = ({ currentChat, own }) => {
  const socket = useRef();
  const [user] = useAuthState(auth);
  const [users] = UserInformation(user);
  const [messages, setMessages] = useState([]);
  const [arrivalMsg, setArrivalMsg] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    if (users?._id && currentChat?._id) {
      axiosPrivate
        .get(`/messages/${users?._id}?to=${currentChat?._id}`)
        .then((res) => {
          setMessages(res.data);
        });
    }
  }, [currentChat, users]);

  useEffect(() => {
    if(currentChat){
      socket.current = io("http://localhost:5000/");
    socket?.current?.emit("add-user", currentChat._id);
    }
  }, [currentChat]);
  const handleSendMessage = (msg) => {



    socket?.current?.emit("send-msg", {
      to: currentChat._id,
      from: users?._id,
       msg,
    });

    if (users?._id && currentChat?._id) {
      axiosPrivate
        .post("/messages", {
          from: users?._id,
          to: currentChat?._id,
          message: msg,
        })
        .then((res) => {
          // console.log(res.data);
        });
    }
    

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);

    if (users?._id && currentChat?._id) {
      axiosPrivate
        .get(`/messages/${users?._id}?to=${currentChat?._id}`)
        .then((res) => {
          setMessages(res.data);
        });
    }
  };

  useEffect(() => {
    if (socket?.current) {
      socket?.current.on("msg-recieve", (msg) => {
        console.log(msg);
        setArrivalMsg({ fromSelf: false, message: msg });
      });
    }
  }, []);


  useEffect(() => {
    arrivalMsg && setMessages((prev) => [...prev, arrivalMsg]);
  }, [arrivalMsg]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className={` h-[100%] `}>
      <div className="h-[500px] overflow-y-scroll">
      
        {messages.map((msg) => (
          <div ref={scrollRef}>
            <UserMessage key={msg._id} msg={msg} own={users?._id} />
          </div>
        ))}
      </div>
      <div>
        <ChatInput handleSendMessage={handleSendMessage}></ChatInput>
      </div>
    </div>
  );
};

export default Message;
