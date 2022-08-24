import React, { useEffect, useState } from "react";
import InputEmoji from "react-input-emoji";
import axiosPrivate from "../../../Api/axiosPrivate";
import "./Chatbox.css";

const ChatBox = ({ chat, currentUserId, setSendMessage,reciveMessage }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessages] = useState("");
  

    useEffect(()=>{
        if(reciveMessage !== null && reciveMessage.chatId === chat._id){
            setMessages([...messages,reciveMessage])
        }
    },[reciveMessage])
   
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

  //   fetching data for message
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        if (chat?._id) {
          axiosPrivate.get(`/message/${chat?._id}`).then((res) => {
            setMessages(res.data);
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessage();
    // if(chat !== null) fetchMessage()
  }, [chat]);
  // text handle click
  const handleChange = (newMessage) => {
    setNewMessages(newMessage);
  };

  const handleSend = (e) => {
    e.preventDefault();

    const message = {
      senderId: currentUserId,
      text: newMessage,
      chatId: chat._id,
    };

    // send database

    if (currentUserId && chat._id) {
      try {
        axiosPrivate.post("/message", message).then((res) => {
          setNewMessages("");
          const fetchMessage = async () => {
            try {
              if (chat?._id) {
                axiosPrivate.get(`/message/${chat?._id}`).then((res) => {
                  setMessages(res.data);
                });
              }
            } catch (error) {
              console.log(error);
            }
          };
          fetchMessage();
        });
      } catch (error) {
        console.log(error);
      }
    }

  

    //  send message to socket server
    const receiverId = chat.members.find((id) => id !== currentUserId);
    setSendMessage({ ...message, receiverId });
  };
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
                  <div className="name text-[16px] font-[500] ml-4">
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
              {messages?.map((message) => (
                <>
                  <div
                    className={
                      message?.senderId === currentUserId
                        ? "message own"
                        : "message"
                    }
                  >
                    <span>{message.text}</span>{" "}
                  </div>
                </>
              ))}
            </div>
            {/* chat-sender */}
            <div className="chat-sender">
              {/* onClick={() => imageRef.current.click()} */}
              <div>+</div>
              <InputEmoji value={newMessage} onChange={handleChange} />

              <div className="send-button button" onClick={handleSend}>
                Send
              </div>
              <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
                //   ref={imageRef}
              />
            </div>{" "}
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
