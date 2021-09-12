import React, { useState } from 'react';
import initialCards from '../../cardsData.js';
import { Link } from 'react-router-dom';
import './index.css';
import shuffle from '../../functions/shuffle';
const cardsArray = [...initialCards, ...initialCards, ...initialCards, ...initialCards];
const initialCardState = [...shuffle(cardsArray)];
export default function GamePage({ user, balance, setBalance }) {
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
		console.log('inside getScore', array);
		return array[0].value + array[1].value;
	}
	function dealGame() {
		setIsGame(true);
		const [card1, card2, card3, ...newCards] = cards;
		console.log(card1, card2, card3);
		const newDealerCards = [...dealerCards, card2];
		setDealerCards(newDealerCards);
		setPlayerCards([card1, card3]);
		setCards(newCards);
		console.log(
			'inside dealGame',
			dealerCards,
			playerCards
			// getScore(dealerCards),
			// getScore(playerCards)
		);
		// setDealerScore(getScore([card2]));
		// setPlayerScore(getScore([card1, card3]));
		return;
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
					<div className="dealer">
						<div className="displayDealer">
							<p>Dealer</p>
							<p>Score: {dealerScore} </p>
						</div>
					</div>
					<div className="player">
						<div className="box">
							<p className="score">Player score :{console.log(playerScore)}</p>
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
