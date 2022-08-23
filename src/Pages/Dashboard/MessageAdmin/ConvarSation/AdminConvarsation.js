import React from "react";
import profile from "../../../../assets/icon/profile.png";
import "./ConverSation.css";
const AdminConvarsation = ({admin,handleUserChatView}) => {

  const {name,img}  = admin
  
return (
    <div onClick={() => handleUserChatView(admin)} className="flex items-center mb-6  gap-2">
       {
        img ?  <div class="avatar  ">
        <div class="w-10 rounded-full">
          <img src={img} />
        </div>
      </div>:<div class="avatar  ">
        <div class="w-10 rounded-full">
          <img src={profile} />
        </div>
      </div>
       }
     
      <span className="conversationName">{name}</span>
    </div>
  );
};

export default AdminConvarsation;
