import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
export default function HomePage({ setUserName, setBalance, balance, userName }) {
	let [isDisabled, setDisabled] = useState(false);
	let [inputValue, setInputValue] = useState(balance);
	let [userNameValue, setUserNameValue] = useState(userName);
	function handleBalanceAndDisabled(e) {
		if (+e.target.value >= 500 && +e.target.value <= 10000 && isDisabled) {
			setDisabled(false);
		} else if ((+e.target.value < 500 || +e.target.value > 10000) && !isDisabled) {
			setDisabled(true);
		}
		setInputValue(e.target.value);
		// console.log(balance);
	}
	function handleNameChange(e) {
		if (e.target.value === '') {
			setUserNameValue('Anonymous');
		}
		setUserNameValue(e.target.value);
		if (!/^[a-zA-Z]\w*$/.test(e.target.value)) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
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
				// onKeyPress="return /[a-z]/i.test(event.key)"
				// pattern="[a-zA-Z]\w*"
				// pattern={/^[a-zA-Z]/}
				name="username"
				required
				defaultValue={userName}
			/>

			<label htmlFor="balance"> Balance: </label>
			<input
				type="number"
				name="balance"
				min="500"
				max="10000"
				step="100"
				onChange={handleBalanceAndDisabled}
				defaultValue={balance}
				required
			/>

			{isDisabled ? (
				<button className="minimum">Over 500 and less 10.000</button>
			) : (
				<Link to="/blackjack">
					<button className="playButton" type="submit" onSubmit={enterCasino}>
						Enter Casino
					</button>
				</Link>
			)}
		</form>
	);
}
