import React from "react";
import "../css/right.css";
import DeleteIcon from "@material-ui/icons/Delete";
import ChatIcon from "@material-ui/icons/Chat";
import ErrorIcon from "@material-ui/icons/Error";
import StarIcon from "@material-ui/icons/Star";
import IconButton from "@material-ui/core/IconButton";

const Right = () => {
  return (
    <div className="right_section">
      <div className="right_header">
        <IconButton>
          <DeleteIcon className="top_icon" />
        </IconButton>
        <IconButton>
          <ChatIcon className="top_icon" />
        </IconButton>
        <IconButton>
          <ErrorIcon className="top_icon" />
        </IconButton>
        <IconButton>
          <StarIcon className="top_icon" />
        </IconButton>
      </div>
      <div className="right_body">
        <div classname="right_senderdetail">
          <img
            className="right_senderimage"
            src="https://blog.hubspot.com/hubfs/image8-2.jpg"
            alt=""
          ></img>
        </div>
        <div className="right_sendername">
          <h1>Google</h1>
          <p>www.google.com</p>
        </div>
      </div>
      <div className="right_subject">
        <h1>
          Documentation meeting about the react project we have been working on
          .
        </h1>
        <p>
          We detected a strange payment process from your account. Please
          confirm the payment from your side.Please confirm the payment from
          your side. We detected a strange payment process from your account.
          Please confirm the payment from your side.Please confirm the payment
          from your side.We detected a strange payment process from your
          account. Please confirm the payment from your side.Please confirm the
          payment from your side.We detected a strange payment process from your
          account. Please confirm the payment from your side.Please confirm the
          payment from your side.We detected a strange payment process from your
          account. Please confirm the payment from your side.Please confirm the
          payment from your side.We detected a strange payment process from your
          account. Please confirm the payment from your side.Please confirm the
          payment from your side.We detected a strange payment process from your
          account. Please confirm the payment from your side.Please confirm the
          payment from your side. Please confirm the payment from your
          side.Please confirm the payment from your side.We detected a strange
          payment process from your account. Please confirm the payment from
          your side.Please confirm the payment from your side.We detected a
          strange payment process from your account. Please confirm the payment
          from your side.Please confirm the payment from your side.We detected a
          strange payment process from your account. Please confirm the payment
          from your side.Please confirm the payment from your side.We detected a
          strange payment process from your account. Please confirm the payment
          from your side.Please confirm the payment from your side.Please
          confirm the payment from your side.Please confirm the payment from
          your side.We detected a strange payment process from your account.
          Please confirm the payment from your side.Please confirm the payment
          from your side.We detected a strange payment process from your
          account. Please confirm the payment from your side.Please confirm the
          payment from your side.We detected a strange payment process from your
          account. Please confirm the payment from your side.Please confirm the
          payment from your side.We detected a strange payment process from your
          account. Please confirm the payment from your side.Please confirm the
          payment from your side.
        </p>
      </div>
    </div>
  );
};

export default Right;
