import { useState } from 'react';
import EnterCasinoButton from '../EnterCasinoButton';
import './index.css';

export default function HomePage({ setUserName, setBalance, balance, userName }) {
	let [inputValue, setInputValue] = useState(balance);
	let [userNameValue, setUserNameValue] = useState(userName);

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
				step="1"
				onChange={handleBalanceAndDisabled}
				defaultValue={balance}
				required
			/>
			<EnterCasinoButton
				inputValue={inputValue}
				userNameValue={userNameValue}
				enterCasino={enterCasino}
			/>
		</form>
	);
}
