import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import "./Chats.css";
import db from "./firebase";

function Chats() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    db.collection("chats")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setChats(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="chats">
      {chats.map((chat) => (
        <Chat
          name={chat.name}
          profilePic={chat.profilePic}
          message={chat.message}
          timestamp={chat.timestamp}
        />
      ))}
      <Chat
        name="Sarah"
        message="Hey sexy!"
        timestamp="35 minutes ago"
        profilePic=""
      />

      <Chat
        name="Sarah"
        message="Hey sexy!"
        timestamp="35 minutes ago"
        profilePic=""
      />

      <Chat
        name="Sarah"
        message="Hey sexy!"
        timestamp="35 minutes ago"
        profilePic=""
      />
    </div>
  );
}

export default Chats;
