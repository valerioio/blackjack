import React, { useState } from "react";
import initialCards from "../../cardsData.js";
import { Link } from "react-router-dom";

export default function GamePage({ user, balance }) {
  const [cards, setCards] = useState(initialCards);

  return (
    <div>
      <p>{user} {balance}</p>
      <button onClick={() => console.log(user, balance)}>Click</button>
      <button>
        <Link to="/">Back to main</Link>
      </button>
    </div>
  );
}
