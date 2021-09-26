import React, { useEffect, useState } from 'react';
import initialCards from '../../cardsData.js';
import './index.css';
import shuffle from '../../functions/shuffle';
import getScore from '../../functions/getScore';
import { Link } from 'react-router-dom';
const cardsArray = [...initialCards, ...initialCards, ...initialCards, ...initialCards];
const initialCardState = [...shuffle(cardsArray)];

export default function Blackjack({ balance, setBalance }) {
	const [cards, setCards] = useState(initialCardState);
	const [betAmount, setBetAmount] = useState(0);
	const [dealerScore, setDealerScore] = useState(null);
	const [playerScore, setPlayerScore] = useState(null);
	const [playerCards, setPlayerCards] = useState([]);
	const [dealerCards, setDealerCards] = useState([]);
	const [text, setText] = useState('');
	const [state, setState] = useState('begin');
	const [betSize, setBetSize] = useState(5);

	useEffect(() => {
		if (
			playerScore === 21 &&
			playerCards.length === 2 &&
			(dealerScore < 10 || dealerCards.length > 1)
		) {
			setState('game over');
			// setIsGameOver(true);
			setText('You have won, you have BLACKJACK');
			setBalance(balance + betAmount * 2.5);
		} else if (playerScore === 21) {
			drawDealerCard();
		} else if (playerScore > 21) {
			setText('You have busted');
			setState('game over');
			//   setIsGameOver(true);
		}
	}, [playerScore]);

	useEffect(() => {
		if (dealerCards.length > 1) {
			if (dealerScore < 17) {
				if (playerScore === 21 && playerCards.length === 2 && dealerCards.length === 2) {
					setState('game over');
					// setIsGameOver(true);
					setText('You win');
					setBalance(balance + betAmount * 2.5);
					return;
				}
				drawDealerCard();
			} else {
				setState('game over');
				// setIsGameOver(true);
				if (dealerScore > 21) {
					setText('You win he busted');
					setBalance(balance + betAmount * 2);
				} else if (dealerScore > playerScore) {
					setText('You Lost');
				} else if (dealerScore < playerScore) {
					setText('You win');
					setBalance(balance + betAmount * 2);
				} else {
					setText('It stands');
					setBalance(balance + betAmount);
				}

				// dealerScore <= 21
				// 	? setText(
				// 			dealerScore > playerScore
				// 				? `You lost`
				// 				: dealerScore < playerScore
				// 				? `You won`
				// 				: `It stands`
				// 	  )
				// 	: setText('You win he busted');
			}
		}
	}, [dealerScore]);

	function playAgain() {
		// console.log('playagain');
		setState('begin');
		// setIsGame(false);
		// setIsGameOver(false);
		setPlayerCards([]);
		setDealerCards([]);
		setPlayerScore(null);
		setDealerScore(null);
		setBetAmount(0);
		setText('');
	}
	function handleBetClick() {
		if (balance >= betAmount + betSize && (state === 'begin' || state === 'betting')) {
			setState('betting');
			setBetAmount(betAmount + betSize);
		}
	}
	function handleClearClick() {
		setState('begin');
		setBetAmount(0);
	}
	function dealGame() {
		setState('game');
		setBalance(balance - betAmount);
		// setIsGame(true);

		// const [card1, card2, card3] = cards;
		// setPlayerCards([card1]);
		// setPlayerScore(getScore([card1]));
		// setCards(cards.slice(3));
		// setTimeout(() => {
		// 	setDealerCards([card2]);
		// 	setDealerScore(getScore([card2]));
		// }, 500);
		// setTimeout(() => {
		// 	setPlayerCards([card1, card3]);
		// 	setPlayerScore(getScore([card1, card3]));
		// }, 1000);

		setDealerCards([cards[2]]);
		setPlayerCards([cards[0], cards[1]]);
		setDealerScore(getScore([cards[2]]));
		setPlayerScore(getScore([cards[0], cards[1]]));
		setCards(cards.slice(3));
		return;
	}
	function drawPlayerCard() {
		setPlayerCards([...playerCards, cards[0]]);
		setPlayerScore(getScore([...playerCards, cards[0]]));
		setCards(cards.slice(1));
	}
	function drawDealerCard() {
		setDealerCards([...dealerCards, cards[0]]);
		setDealerScore(getScore([...dealerCards, cards[0]]));
		setCards(cards.slice(1));
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
									<img
										key={index}
										src={card.image}
										alt={card.name}
										className="cardImage"
									/>
								))}
							</div>
						</div>
					</div>
					<div className="player">
						<div className="box">
							<p className="score">Player score :{playerScore}</p>
							<div className="showCards">
								{playerCards.map((card, index) => (
									<img
										key={index}
										src={card.image}
										alt={card.name}
										className="cardImage"
									/>
								))}
							</div>
							<div className="betAmount" onClick={handleBetClick}>
								{betAmount === 0 ? null : `£${betAmount}`}
							</div>
							<div className="actionButtons">
								<div className="displayBetAndButtons">
									<p>Bet Size: {betSize}</p>

									<div>
										{state === 'betting' ? (
											<button onClick={handleClearClick}>Clear</button>
										) : null}
										{state === 'game' ? (
											<button onClick={drawPlayerCard}>Draw</button>
										) : null}
										{state === 'game' ? (
											<button onClick={drawDealerCard}>Stand</button>
										) : null}
									</div>
								</div>
								<div>
									{state === 'game over' ? (
										<button onClick={playAgain}>Play again</button>
									) : state === 'betting' ? (
										<button onClick={dealGame}>Deal</button>
									) : null}
								</div>
							</div>
						</div>
					</div>
					<h1>{text}</h1>
				</div>
				<div className="amountSelector">
					<Link to="/casinoMainPage">
						<button>Casino Lobby</button>
					</Link>
					<p>Bet Size</p>
					{[5, 10, 25, 50, 100].map((item, index) => (
						<img
							className="chips"
							src={`/chips/${item}.png`}
							alt={item}
							key={index}
							onClick={() => {
								setBetSize(item);
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
