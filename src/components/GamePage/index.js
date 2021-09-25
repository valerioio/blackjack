import React, { useState } from "react";
import initialCards from "../../cardsData.js";
import "./index.css";
import shuffle from "../../functions/shuffle";
const cardsArray = [
  ...initialCards,
  ...initialCards,
  ...initialCards,
  ...initialCards,
];
const initialCardState = [...shuffle(cardsArray)];
export default function GamePage({ balance, setBalance }) {
  const [cards, setCards] = useState(initialCardState);
  const [betAmount, setBetAmount] = useState(0);
  const [dealerScore, setDealerScore] = useState(null);
  const [playerScore, setPlayerScore] = useState(null);
  const [isGame, setIsGame] = useState(false);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);

  function handleBetClick() {
    if (balance >= 50 && !isGame) {
      setBetAmount(betAmount + 50);
      setBalance(balance - 50);
    }
  }

  function handleClearClick() {
    console.log(typeof balance, typeof betAmount);
    setBalance(balance + betAmount);
    setBetAmount(0);
  }
  function getScore(array) {
    console.log("inside getScore", array);
    return array.reduce((acc, cur) => acc + cur.value, 0);
  }
  function dealGame() {
    setIsGame(true);
    setDealerCards([cards[2]]);
    setPlayerCards([cards[0], cards[1]]);
    // console.log(
    // 	'inside dealGame',
    // 	dealerCards,
    // 	playerCards,
    // 	getScore(dealerCards),
    // 	getScore(playerCards)
    // 	);
    setDealerScore(getScore([cards[2]]));
    setPlayerScore(getScore([cards[0], cards[1]]));
    setCards(cards.slice(3));
    return;
  }
  return (
    <div className="game">
      <div className="mainGame">
        <div className="main">
          <div className="dealer">
            <div className="displayDealer">
              <p>Dealer</p>
              <p>Score: {dealerScore} </p>
              <div className="showCards">
                {dealerCards.map((card, index) => (
                  <img key={index} src={card.image} alt={card.name} />
                ))}
              </div>
            </div>
          </div>
          <div className="player">
            <div className="box">
              <p className="score">Player score :{playerScore}</p>
              <div className="showCards">
                {playerCards.map((card, index) => (
                  <img key={index} src={card.image} alt={card.name} />
                ))}
              </div>
              <div className="betAmount" onClick={handleBetClick}>
                {betAmount === 0 ? null : betAmount}
              </div>
              <div className="actionButtons">
                <div>
                  {betAmount === 0 || isGame ? null : (
                    <button onClick={handleClearClick}>Clear</button>
                  )}
                  {isGame ? (
                    <button onClick={handleClearClick}>Draw</button>
                  ) : null}
                  {isGame ? (
                    <button onClick={handleClearClick}>Stand</button>
                  ) : null}
                </div>
                <div>
                  {betAmount === 0 || isGame ? null : (
                    <button onClick={dealGame}>Deal</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="amountSelector"></div>
      </div>
    </div>
  );
}
