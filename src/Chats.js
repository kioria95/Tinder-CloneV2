import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import "./Chats.css";
import db from "./firebase";

function Chats() {
  const [chats, setChats] = useState([]);
  const[messages,setMessages] = useState([])

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
    
    </div>
  );
}

export default Chats;
