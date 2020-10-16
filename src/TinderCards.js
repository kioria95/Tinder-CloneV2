import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import db from "./firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    db.collection("people").onSnapshot((snapshot) =>
      setPeople(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            key={person.name}
            className="swipe"
            preventSwipe={["up", "down"]}
          >
            <div
              style={{
                backgroundImage: `url(${person.url})`,
              }}
              className="card"
            >
              <h3>{person.name}</h3>
              <p>{person.bio}</p>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
