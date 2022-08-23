import React from "react";
import ChatInput from "../ChatInput/ChatInput";
import "./Message.css";

const Message = ({ own }) => {
  

  return (
    <div className={` h-[100%] `}>
      <div className="h-[500px] overflow-y-scroll">
        <div className={`${own ? "message own" : "message"}`}>
          <div className="messageTop">
          <img
            className="messageImg"
            src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <p className="messageText">hello</p>
          </div>
        
        </div>
      </div>
      <div>
        <ChatInput></ChatInput>
      </div>
    </div>
  );
};

export default Message;
