import React from 'react';

const UserMessage = ({msg}) => {
    return (
           <div className={`${msg.fromSelf ? "message own" : "message"}`}>
          <div className="messageTop">
          <img
            className="messageImg"
            src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <p className="messageText">{msg.message}</p>
          </div>
        
        </div> 
    );
};

export default UserMessage;