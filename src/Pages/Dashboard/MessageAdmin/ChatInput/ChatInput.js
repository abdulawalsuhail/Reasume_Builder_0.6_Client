import React, { useState } from "react";
import "./ChatInput.css";

const ChatInput = ({handleSendMessage}) => {
    const [msg,setMsg] = useState("")
    const sendChat = (event) => {
        event.preventDefault();
        if (msg.length > 0) {
            handleSendMessage(msg);
            setMsg("");
        }
      };
  return (
    <>
      <div>
        <form onSubmit={(event) => sendChat(event)} className="input-container">
          <input
            type="text"
            placeholder="type your message here"
            className="outline-none "
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
          <button type="submit" className="px-4 btn-primary">Send</button>
        </form>
      </div>
    </>
  );
};

export default ChatInput;
