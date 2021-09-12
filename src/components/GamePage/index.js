import React, { useState } from 'react';
import initialCards from '../../cardsData.js';
import { Link } from 'react-router-dom';

export default function GamePage({ user, balance }) {
	const [cards, setCards] = useState(initialCards);

	return (
		<div className="game">
			<div className="topBar">
				<button>
					<Link to="/">Back to main</Link>
				</button>
				<p className="displayName">
					<p>{user}</p>
					<p>{balance}</p>
				</p>
			</div>
			<div className="mainGame">
				<div className="main">
					<div className="dealer"></div>
					<div className="player">
						<div className="box">
							<p className="score">score</p>
							<div className="betAmount">Bet Amount</div>
							<button>Clear</button>
						</div>
					</div>
				</div>
				<div className="amountSelector"></div>
			</div>
		</div>
	);
}
