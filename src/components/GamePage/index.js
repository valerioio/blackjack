import React, { useState } from "react";
import initialCards from "../../cardsData.js";
import { Link } from "react-router-dom";

export default function GamePage({ user, balance, setBalance }) {
//   const [cards, setCards] = useState(initialCards);
  const [betAmount, setBetAmount] = useState(0);
  function handleBetClick() {
    if (balance>=50) {
      setBetAmount(betAmount + 50);
      setBalance(balance - 50);
    }
  }
  function handleClearClick() {
    setBalance(balance + betAmount);
    setBetAmount(0);
  }
  return (
    <div className="game">
      <div className="topBar">
        <button>
          <Link to="/">Back to main</Link>
        </button>
        <div className="displayName">
          <p>{user}</p>
          <p>{balance}</p>
        </div>
      </div>
      <div className="mainGame">
        <div className="main">
          <div className="dealer"></div>
          <div className="player">
            <div className="box">
              <p className="score">score</p>
              <div className="betAmount" onClick={handleBetClick}>
                {betAmount}
              </div>
              <button onClick={handleClearClick}>Clear</button>
            </div>
          </div>
        </div>
        <div className="amountSelector"></div>
      </div>
    </div>
  );
}
