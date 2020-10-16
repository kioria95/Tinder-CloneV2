import { Avatar } from "@material-ui/core";
import React from "react";
import "./Chat.css";
import { Link } from "react-router-dom";

function Chat({ name, profilePic, timestamp, message }) {
  return (
    <Link to={`/chats/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" src={profilePic} />
        <div className="chat__details">
          <h2>{name} </h2>
          <p> {message}</p>
        </div>

        <p className="chat__timestamp">
          {new Date(timestamp?.toDate()).toUTCString()}
        </p>
      </div>
    </Link>
  );
}

export default Chat;
