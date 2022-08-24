import React, { useEffect, useState } from "react";
import axiosPrivate from "../../../Api/axiosPrivate";
import "./Chatbox.css";

const ChatBox = ({ chat, currentUserId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUserId);
    const getUserData = async () => {
      try {
        if (userId) {
          axiosPrivate.get(`/conversationuser/${userId}`).then((res) => {
            setUserData(res.data);
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) getUserData();
  }, [chat, currentUserId]);

  return (
    <>
      <div className="ChatBox-container">
        {chat ? (
          <>
            {/* chat-header */}
            <div className="chat-header">
              <div className="follower">
                <div className="flex items-center">
                  {userData?.img ? (
                    <div class="avatar rounded-full">
                      <div class="w-12 rounded-full">
                        <img src={userData?.img} alt="" />
                      </div>
                    </div>
                  ) : (
                    <div class="avatar rounded-full">
                      <div class="w-12 rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt="" />
                      </div>
                    </div>
                  )}
                  <div className="name text-[16px] font-[500] ml-4" >
                    <span>{userData?.name}</span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid #ececec",
                  marginTop: "20px",
                }}
              />
            </div>
            {/* chat-body */}
            <div className="chat-body">
              {/* {messages.map((message) => (
                  <>
                    <div ref={scroll}
                      className={
                        message.senderId === currentUser
                          ? "message own"
                          : "message"
                      }
                    >
                      <span>{message.text}</span>{" "}
                    </div>
                  </>
                ))} */}
            </div>
            {/* chat-sender */}
            {/* <div className="chat-sender">
                <div onClick={() => imageRef.current.click()}>+</div>
                <InputEmoji
                  value={newMessage}
                  onChange={handleChange}
                />
                <div className="send-button button" onClick = {handleSend}>Send</div>
                <input
                  type="file"
                  name=""
                  id=""
                  style={{ display: "none" }}
                  ref={imageRef}
                />
              </div>{" "} */}
          </>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a chat to start conversation...
          </span>
        )}
      </div>
    </>
  );
};

export default ChatBox;
