import { Avatar } from "@material-ui/core";
import React from "react";
import "./Chat.css";

function Chat({ name, profilePic, timestamp, message }) {
  return (
    <div className="chat">
      <Avatar className="chat__image" src={profilePic} />
      <div className="chat__details">
        <h2>{name} </h2>
        <p> {message}</p>
      </div>

      {/* <div className="chat__timestamp">{new Date(timestamp?.toUTCString())}</div> */}
    </div>
  );
}

export default Chat;
