import React, { useState, useEffect } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";
import db from "./firebase";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = (e) => {
    e.preventDefault();
    db.collection("messages").add({
        message: input,
    })
    setInput("");
  };

  useEffect(() => {
    db.collection("messages").onSnapshot((snapshot) =>
    setMessages(snapshot.docs.map((doc) => doc.data()))
  );

  }, []);

  return (
    <div className="chatScreen">
     
      {messages.map((message) =>
        message.name ? (
            <>
            <p>You Matched with {`${message.name}`}
            </p>
          <div className="chatScreen__message">
            <Avatar className="chatScreen__image" src={message.image} />
            <p className="chatScreen__text">{message.message}</p>
          </div>

          </>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          className="chatScreen__inputField"
          type="text"
          placeholder="Enter Message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="chatScreen__inputButton"
          type="submit"
          onClick={handleSend}
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
