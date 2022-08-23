import React from "react";
import "./ChatInput.css";

const ChatInput = () => {
  return (
    <>
      <div>
        <form className="input-container">
          <input
            type="text"
            placeholder="type your message here"
            className="outline-none "
          />
          <button type="submit" className="px-4 btn-primary">Send</button>
        </form>
      </div>
    </>
  );
};

export default ChatInput;
