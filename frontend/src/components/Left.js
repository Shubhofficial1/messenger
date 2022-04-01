import React from "react";
import "../css/left.css";
import Actionbox from "./Actionbox";

const Left = () => {
  return (
    <div className="left_section">
      <div className="compose">
        <h1>compose</h1>
      </div>

      <div className="actions">
        <Actionbox text="Inbox" number="1,705" />
        <Actionbox text="Starred" number="1,705" />
        <Actionbox text="Draft" number="1,705" />
        <Actionbox text="Delete" number="1,705" />
        <Actionbox text="Archieve" number="1,705" />
      </div>
      {/* <div className="folder">
        <Actionbox text="Work" />
        <Actionbox text="personal" />
        <Actionbox text="Credit" />
      </div> */}
    </div>
  );
};

export default Left;
