import React from "react";
import "../css/middle.css";
const Messagebox = ({ name, imageUrl, subject, message, time }) => {
  return (
    <div>
      <div className="message_body">
        <div className="sender_image">
          <img src={imageUrl} alt=""></img>
        </div>
        <div className="sender_detail">
          <div className="message_detail">
            <h1 className="message_name">{name}</h1>
            <p className="message_time">{time}</p>
          </div>
          <div className="message_text">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default Messagebox;
