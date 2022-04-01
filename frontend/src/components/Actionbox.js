import React from "react";
import "../css/left.css";

const Actionbox = ({ text, icon, number }) => {
  return (
    <div>
      <div className="action_body">
        <div>{text}</div>
        <div>{number}</div>
      </div>
    </div>
  );
};

export default Actionbox;
