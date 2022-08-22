import React, { useRef, useState } from 'react';
import './message.css';

const Message = () => {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();
    const scrollRef = useRef();
    return (
        <>
         <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
          
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
              <>
                <div className="chatBoxTop">
                  
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" >
                    Send
                  </button>
                </div>
              </>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            
          </div>
        </div>
      </div>
        
        </>
    );
};

export default Message;