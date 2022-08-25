import React, { useEffect, useState } from "react";
import axiosPrivate from "../../../Api/axiosPrivate";

const Conversation = ({ data, currentUserId,online}) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if(currentUserId){
      const userId = data.members.find((id) => id !== currentUserId);
    const getUserData = async () => {
      try {
        axiosPrivate.get(`/conversationuser/${userId}`).then((res) => {
          setUserData(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
    }
  }, []);
  return (
    <>
      <div className="follower conversation">
        <div className="flex items-center">
        {online && <div className="online-dot"></div>}
          {userData?.img ? (
            <div class="avatar rounded-full">
              <div class="w-12 rounded-full">
                <img  src={userData?.img} alt="" />
              </div>
            </div>
          ) : (
            <div class="avatar rounded-full">
              <div class="w-12 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt=""/>
              </div>
            </div>
          )}
          <div className="name text-[16px] font-[500]" >
            <span>{userData?.name}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;
