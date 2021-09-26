import React from 'react';
import { Link } from 'react-router-dom';

export default function EnterCasinoButton({ inputValue, userNameValue, enterCasino }) {
	const regex = /(^\s*$)|(^[a-zA-Z]\w*$)/;
	return (
		<>
			{!(+inputValue >= 500 && +inputValue <= 10000) ? (
				<button onClick={(e) => e.preventDefault()} className="minimum">
					Over 500 and less 10.000
				</button>
			) : !regex.test(userNameValue) ? (
				<button onClick={(e) => e.preventDefault()} className="minimum">
					Input a valid username
				</button>
			) : (
				<Link to="/casinoMainPage">
					<button className="playButton" onClick={enterCasino}>
						Enter Casino
					</button>
				</Link>
			)}
		</>
	);
}
