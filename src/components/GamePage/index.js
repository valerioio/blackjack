import React, { useEffect, useState } from 'react';
import initialCards from '../../cardsData.js';

export default function GamePage({ user,balance }) {
	const [cards, setCards] = useState(initialCards);

	return (
		<div>
			<p>hi</p>
			<button onClick={() => console.log(user,balance)}>Click</button>
		</div>
	);
}
