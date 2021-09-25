import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function HomePage({ setUserName, setBalance, balance, userName }) {
	let [inputValue, setInputValue] = useState(balance);
	let [userNameValue, setUserNameValue] = useState(userName);
	const regex = /(^\s*$)|(^[a-zA-Z]\w*$)/;
	console.log('rerendered');

	function handleBalanceAndDisabled(e) {
		setInputValue(e.target.value);
		// console.log('from handleBalanceAndDisabled', balance, inputValue);
	}
	function handleNameChange(e) {
		setUserNameValue(e.target.value || 'Anonymous');
	}
	function enterCasino() {
		setBalance(+inputValue);
		setUserName(userNameValue);
	}
	return (
		<form className="mainForm">
			<label htmlFor="username">Username:</label>
			<input
				type="text"
				maxLength="10"
				placeholder="Enter your name"
				onChange={handleNameChange}
				name="username"
				// required
				defaultValue={userName}
			/>
			<label htmlFor="balance"> Balance: </label>
			<input
				type="number"
				name="balance"
				min="500"
				max="10000"
				step="10"
				onChange={handleBalanceAndDisabled}
				defaultValue={balance}
				required
			/>
			{!(+inputValue >= 500 && +inputValue <= 10000) ? (
				<button onClick={(e) => e.preventDefault()} className="minimum">
					Over 500 and less 10.000
				</button>
			) : !regex.test(userNameValue) ? (
				<button onClick={(e) => e.preventDefault()} className="minimum">
					Input a valid username
				</button>
			) : (
				<Link to="/blackjack">
					<button className="playButton" onClick={enterCasino}>
						Enter Casino
					</button>
				</Link>
			)}
		</form>
	);
}
